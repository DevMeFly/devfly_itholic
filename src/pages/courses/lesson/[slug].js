import { getSession } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import Player from 'react-player/lazy'
import prisma from '../../../../lib/prisma'

const LessonPage = ({ lesson: { title, videoUrl }, user }) => {
  return (
    <div className='text-white'>
      <h2 className='mb-4 text-3xl'>{title}</h2>
      {videoUrl ? (
        <Player width='50%' height='100%' url={videoUrl} controls={true} />
      ) : user ? (
        <>
          <Link href='/pricing'>
            <div className='rounded-md bg-green-200 py-2 px-4'>Subscribe</div>
          </Link>
          <button className='ml-2 rounded-md border py-2 px-4'>
            Buy course
          </button>
        </>
      ) : (
        <Link href='/api/auth/login'>
          <div className='rounded-md bg-green-200 py-2 px-4'>Login</div>
        </Link>
      )}
    </div>
  )
}

export const getServerSideProps = async ({ req, res, params }) => {
  const { slug } = params
  const session = await getSession(req, res)
  const email = session?.user?.email

  const lesson = await prisma.lesson.findUnique({
    where: {
      slug,
    },
    include: {
      course: true,
    },
  })

  let user = null
  if (email) {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        courses: true,
      },
    })
  }

  await prisma.$disconnect()

  const userAllowedCourse =
    lesson.course.price === 0 ||
    user?.isSubscribed ||
    user?.courses.find((course) => course.id === lesson.course.id)

  if (!userAllowedCourse) {
    lesson.videoUrl = null
  }

  return {
    props: {
      lesson: JSON.parse(JSON.stringify(lesson)),
      user: session?.user || null,
    },
  }
}

export default LessonPage
