// pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid"; // To generate unique tokens

import { prisma } from "@/lib/prisma";
import { USER_ROLE } from "@/types/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password, firstName, lastName, phone, image } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate token (UUID for now)
  const token = uuidv4();

  try {
    // Create the new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        image,
        role: USER_ROLE.EMPLOYEE, // Default role
        token,
      },
    });

    // Return response excluding sensitive data like password
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        image: user.image,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        token: user.token,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
