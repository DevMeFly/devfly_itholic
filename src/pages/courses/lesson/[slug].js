import CoursDashboardLayout from '@/components/coursedashboard/layout'
import DashboardProvider from '@/components/coursedashboard/provider/context'
import { getLessons } from '@/utils/db'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import Player from 'react-player/youtube'
import prisma from '../../../../lib/prisma'

const LessonPage = ({
  lesson: { title, videoUrl, price, course },
  user,
  lessons,
}) => {
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
              <div className='flex items-center gap-4'>
                To view this course you need either a subscription
                <Link href='/pricing'>
                  <div className='w-fit rounded-md bg-green-200 py-2 px-4'>
                    View Plans
                  </div>
                </Link>
              </div>
              Or buy it for
              <span className='font-poppins font-bold text-primary'>
                {' : ' + course.price} DH
              </span>
              <button className='ml-2 rounded-md border bg-primary py-2 px-4 text-text'>
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
  async getServerSideProps({ req, res, params }) {
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
    const lessons = await getLessons(lesson.courseId)
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
