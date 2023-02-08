import CourseCard from '@/components/Home/CourseCard'
import DashboardLayout from '@/dashboard/layout'
import DashboardProvider from '@/dashboard/provider/context'
import { getCourses } from '@/utils/db'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Page({ courses }) {
  return (
    <>
      <div className='flex h-full flex-col gap-5 self-center rounded-xl bg-primary pt-5'>
        <div className='self-center'>
          <CourseCard name={'Your '} courses={courses} />
        </div>
      </div>
      <CourseCard name={'Your '} courses={courses} />
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <DashboardProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </DashboardProvider>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    const courses = await getCourses()

    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
      },
    }
  },
})
