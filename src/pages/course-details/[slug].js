import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getCourseBySlug, getCourses } from '../../utils/db'

const CoursesDetails = ({
  course: {
    title,
    lessons,
    description,
    whatyoulearn,
    why,
    thumbnail,
    requirements,
    duration,
  },
}) => {
  return (
    <>
      <Head>
        <title>Skills Builder</title>
        <meta name='description' content='Skills builder platform' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main className='mx-auto flex max-w-[1440px] flex-col gap-24 bg-primary p-10 font-poppins'>
        <DesktopNav />
        <div className='flex flex-col gap-5'>
          <div className='text-[38px] font-bold text-text'> {title}</div>
          <Image
            src={thumbnail}
            width={500}
            height={500}
            alt='hi'
            className='rounded-xl'
          />
          <div className='text-[38px] font-bold text-text'>Course Catalog</div>
          <Stack direction='row'>
            <Button
              variant='outlined'
              className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
            >
              Machine Learning
            </Button>
          </Stack>
        </div>
        <div className='flex flex-col justify-center gap-10 text-justify lg:flex-row lg:gap-24'>
          <div className='flex flex-col gap-10 '>
            <div className='gap2 flex flex-col'>
              <div className='text-[28px] font-bold text-text'>
                What you will learn
              </div>
              <div className='font-thin text-[24x] text-text'>
                {whatyoulearn}
              </div>
            </div>
            <div className='gap2 flex flex-col'>
              <div className='text-[28px] font-bold text-text'>
                Whhy is the course different?
              </div>
              <div className='font-thin text-[24x] text-text'>{why}</div>
            </div>

            <Stack direction='row'>
              <div className='flex flex-col gap-5'>
                <div className='gap2 flex flex-col'>
                  <div className='text-[28px] font-bold text-text'>
                    Course content
                  </div>
                  <div className='font-bold text-[24x] text-yellow'>
                    Total Duration : {duration}
                  </div>
                </div>
                {lessons.map((lesson) => (
                  <Link key={lesson.id} href={`/courses/lesson/${lesson.slug}`}>
                    <Button
                      variant='outlined'
                      className='flex gap-2 rounded-xl border-transparent bg-yellow py-2 font-bold text-primary  '
                    >
                      <OndemandVideoIcon />
                      {lesson.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </Stack>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-10'>
              <div className='gap2 flex flex-col'>
                <div className='text-[28px] font-bold text-text'>
                  Description
                </div>
                <div className='font-thin text-[24x] text-text'>
                  {description}
                </div>
              </div>
            </div>
            <div className='gap2 flex flex-col'>
              <div className='text-[28px] font-bold text-text'>
                Prerequisites
              </div>
              <div className='font-thin text-[24x] text-text'>
                {requirements.map((requirements, i) => (
                  <div key={requirements.id}>
                    <Link href={requirements.requirementlink}>
                      {i + 1}. {requirements.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export default CoursesDetails
