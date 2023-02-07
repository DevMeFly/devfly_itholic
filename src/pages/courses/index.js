import CourseCard from '@/components/Home/CourseCard'
import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import Head from 'next/head'
import { getCourses } from '../../utils/db'

export default function Courses({ courses }) {
  return (
    <>
      <Head>
        <title>Skills Builder</title>
        <meta name='description' content='Skills builder platform' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main className='mx-auto flex max-w-[1440px] flex-col gap-24 bg-primary p-10'>
        <DesktopNav />
        <CourseCard name={'All '} courses={courses} />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getCourses()

  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  }
}
