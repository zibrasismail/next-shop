// seed data for the database

import { PrismaClient } from "@prisma/client";
import sampleProducts from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.product.createMany({
    data: sampleProducts.products,
  });
  await prisma.user.createMany({
    data: sampleProducts.users,
  });
  console.log(`Database has been seeded. 🌱`);
}

main();
