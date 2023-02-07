import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import Head from 'next/head'
import Link from 'next/link'
import { getCourseBySlug, getCourses } from '../../utils/db'

const CoursePage = ({ course: { title, price, lessons, description } }) => {
  const isFree = price === 0

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
        <div className='text-text'>
          <h2 className='text-3xl'>{title}</h2>
          <h2 className='text-3xl'>{description}</h2>
          <ul className='p-2'>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <Link href={`/courses/lesson/${lesson.slug}`}>
                  {lesson.id}. {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const courses = await getCourses()
  const paths = courses.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const course = await getCourseBySlug(slug)

  return {
    props: {
      course: JSON.parse(JSON.stringify(course)),
    },
  }
}

export default CoursePage
