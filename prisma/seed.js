const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
      });
      const mc = await prisma.MC.upsert({
        where: { name: 'Woopa' },
        update: {},
        create: {
          name: 'Woopa',
          lang: 'Español',
          missionCommander: 'ajolonauta',
          enrollments: 3,
          hasCertification: true,
        },
      });

      const mc1 = await prisma.MC.upsert({
        where: { name: 'Woopa1' },
        update: {},
        create: {
          name: 'Woopa1',
          lang: 'Español',
          missionCommander: 'ajolonauta1',
          enrollments: 3,
          hasCertification: true,
        },
      });

      const mc2 = await prisma.MC.upsert({
        where: { name: 'Woopa2' },
        update: {},
        create: {
          name: 'Woopa2',
          lang: 'Español',
          missionCommander: 'ajolonauta2',
          enrollments: 3,
          hasCertification: true,
        },
      });


    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();