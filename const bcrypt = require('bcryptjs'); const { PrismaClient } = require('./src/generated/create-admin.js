const bcrypt = require('bcryptjs');
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Admin@123', 10);

  const user = await prisma.user.create({
    data: {
      name: 'Administrator',
      email: 'admin@ucsh.edu.mm',
      hashedPassword: password,
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
