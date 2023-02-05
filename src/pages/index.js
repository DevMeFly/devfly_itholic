import Categories from '@/components/Home/Categories'
import CourseCard from '@/components/Home/CourseCard'
import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Instructors from '@/components/Home/Instructors'
import Testimonial from '@/components/Home/Testimonial'
import Head from 'next/head'
import { getCourses } from '../utils/db'

export default function Home(courses) {
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
        <Header />
        <Categories />
        <CourseCard courses={courses} />
        <Instructors />
        <Testimonial />
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
