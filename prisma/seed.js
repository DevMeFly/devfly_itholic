const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const course1 = await prisma.course.create({
    data: {
      title: 'Learning to code 3!',
      lessons: {
        create: [
          { title: 'Learn the terminal 3 1' },
          { title: 'Learn the terminal 3 2' },
          { title: 'Learn the terminal 3 3' },
          { title: 'Learn the terminal 3 4' },
          { title: 'Learn the terminal 3 5' },
          { title: 'Learn the terminal 3 6' },
          { title: 'Learn the terminal 3 7' },
        ],
      },
    },
  })

  console.log({ course1 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
