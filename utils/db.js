// utils/db.js
import prisma from '../lib/prisma'

const getCourses = async () => {
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  })
  await prisma.$disconnect()
  return courses
}

export { getCourses }
