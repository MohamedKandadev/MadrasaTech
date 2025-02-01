import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Example: Creating a user
    const user = await prisma.user.create({
      data: {
        email: "mohamed@example.com",
        password: "securepassword", // Hash this in real-world apps
        firstName: "Mohamed",
        lastName: "Kandad",
        phone: "1234567890",
        role: "ADMIN", // Adjust based on your UserRole enum
        image: "https://example.com/profile.jpg",
        status: "ACTIVE", // Default status
        lastLogin: null,
        token: "",
      },
    });

    console.log("Seeding finished:", { user });
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
