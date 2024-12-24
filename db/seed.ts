// seed data for the database

import { PrismaClient } from "@prisma/client";
import sampleProducts from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: sampleProducts.products,
  });
  console.log(`Database has been seeded. 🌱`);
}

main();
