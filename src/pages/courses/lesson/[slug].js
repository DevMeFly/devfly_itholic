import CoursDashboardLayout from '@/components/coursedashboard/layout'
import DashboardProvider from '@/components/coursedashboard/provider/context'
import { getLessons } from '@/utils/db'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import Player from 'react-player/youtube'
import prisma from '../../../../lib/prisma'

const LessonPage = ({ lesson: { title, videoUrl }, user, lessons }) => {
  return (
    <DashboardProvider>
      <CoursDashboardLayout lessons={lessons}>
        <div className='h-full'>
          <h2 className=' py-2 font-poppins text-xl font-extrabold text-primary'>
            {title}
          </h2>
          {videoUrl ? (
            <div className='h-full w-full'>
              <Player
                width='100%'
                height='90%'
                url={videoUrl}
                controls={true}
              />
            </div>
          ) : user ? (
            <>
              <Link href='/pricing'>
                <div className='rounded-md bg-green-200 py-2 px-4'>
                  Subscribe
                </div>
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
      </CoursDashboardLayout>
    </DashboardProvider>
  )
}
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res, params, courseId }) {
    const { slug } = params
    const session = await getSession(req, res)
    const email = session?.user?.email

    const lessons = await getLessons(courseId)

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
        lessons: JSON.parse(JSON.stringify(lessons)),
        user: session?.user || null,
      },
    }
  },
})

export default LessonPage
