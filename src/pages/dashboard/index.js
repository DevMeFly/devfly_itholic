import CourseCard from '@/components/Home/CourseCard'
import DashboardLayout from '@/dashboard/layout'
import DashboardProvider from '@/dashboard/provider/context'
import { getCourses } from '@/utils/db'

export default function Page({ courses }) {
  return (
    <div className='flex h-full flex-col gap-5 self-center rounded-xl bg-primary pt-5'>
      <div className='self-center'>
        <CourseCard name={'Your '} courses={courses} />
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <DashboardProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </DashboardProvider>
  )
}

export const getStaticProps = async () => {
  const courses = await getCourses()

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  }
}
