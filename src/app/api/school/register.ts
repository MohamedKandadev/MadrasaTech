import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    switch (req.method) {
      case "POST":
        const { name, address, city, phone, email } = req.body;

        await prisma.school.create({
          data: {
            name,
            address,
            city,
            phone,
            email,
            admin: {
              connect: {
                id: "session?.user?.id",
              },
            },
          },
        });
        break;
      case "GET":
        break;

      default:
        break;
    }
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
