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

const getCourseBySlug = async (slug) => {
  const course = await prisma.course.findUnique({
    where: {
      slug,
    },
    include: {
      lessons: {
        orderBy: {
          id: 'asc',
        },
      },
    },
  })
  await prisma.$disconnect()
  return course
}

const getCourse = async (id) => {
  const course = prisma.course.findUnique({
    where: {
      id,
    },
  })
  await prisma.$disconnect()
  return course
}

const getUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      courses: true,
    },
  })
  await prisma.$disconnect()
  return user
}

const getLessons = async () => {
  const lessons = await prisma.lesson.findMany()
  await prisma.$disconnect()
  return lessons
}

const getLessonBySlug = async (slug) => {
  const lesson = await prisma.lesson.findUnique({
    where: {
      slug,
    },
    include: {
      course: true,
    },
  })
  await prisma.$disconnect()
  return lesson
}

const createUser = async (email, stripeId) => {
  const user = await prisma.user.create({
    data: { email, stripeId },
  })
  await prisma.$disconnect()
  return user
}

const enrolUser = async (userId, courseId) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      courses: {
        connect: {
          id: courseId,
        },
      },
    },
    include: {
      courses: true,
    },
  })
  await prisma.$disconnect()
  return user
}

const subscribeUser = async (stripeId) => {
  const user = await prisma.user.update({
    where: {
      stripeId,
    },
    data: {
      isSubscribed: true,
    },
  })
  await prisma.$disconnect()
  return user
}

const cancelSubscription = async (stripeId) => {
  const user = await prisma.user.update({
    where: {
      stripeId,
    },
    data: {
      isSubscribed: false,
    },
  })
  await prisma.$disconnect()
  return user
}

export {
  getCourses,
  getCourseBySlug,
  getCourse,
  getLessons,
  getLessonBySlug,
  createUser,
  getUserByEmail,
  enrolUser,
  subscribeUser,
  cancelSubscription,
}
