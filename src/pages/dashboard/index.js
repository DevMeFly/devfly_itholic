import CourseCard from '@/components/Home/CourseCard'
import DashboardLayout from '@/dashboard/layout'
import DashboardProvider from '@/dashboard/provider/context'
import { getCourses } from '@/utils/db'
import Content from '../../components/content'

export default function Page({ courses }) {
  return (
    <div className='flex flex-col gap-5'>
      <CourseCard name={'Featured '} courses={courses} />
      <Content title='Google' />
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
