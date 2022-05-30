const { ADMIN_EMAIL, ADMIN_PASSWORD } = require("../src/config");
const { hashedPassword } = require("../dist/helpers/");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: ADMIN_EMAIL,
      password: hashedPassword(ADMIN_PASSWORD),
      isAdmin: true,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
