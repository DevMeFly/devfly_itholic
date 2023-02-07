import Image from 'next/image'
import Link from 'next/link'
import { getCourseBySlug, getCourses, getRoadmaps } from '../../utils/db'

const CoursePage = ({
  course: {
    title,
    price,
    lessons,
    description,
    whatyoulearn,
    why,
    thumbnail,
    requirements,
    duration,
  },
  roadmap,
}) => {
  const isFree = price === 0

  return (
    <div className='text-white'>
      <h2 className='text-3xl text-red-500'>{title}</h2>
      <Image
        src={thumbnail}
        width={500}
        height={500}
        alt='hi'
        className='rounded-xl'
      />
      <h2 className=''>{description}</h2>
      <div className='text-2xl text-red-500'>What you learn</div>
      <div>{whatyoulearn}</div>
      <div className='text-2xl text-red-500'>Why you learn</div>
      <div>{why}</div>
      <div className='text-2xl text-red-500'>Requirements</div>
      {requirements.map((requirements, i) => (
        <div key={requirements.id}>
          <div className='text-green-500'>
            {i + 1}. {requirements.title}
            {i + 1}. {requirements.requirementlink}
          </div>
        </div>
      ))}
      <div className='text-2xl text-red-500'>Course content:</div>
      Total duration : {duration}
      <ul className='p-2'>
        {lessons.map((lesson, i) => (
          <li key={lesson.id}>
            <Link href={`/courses/lesson/${lesson.slug}`}>
              {i + 1}. {lesson.title}{' '}
              <span className='text-green-500'>{lesson.duration}</span>
            </Link>
          </li>
        ))}
      </ul>
      {roadmap.map((roadmap, i) => (
        <li key={roadmap.id}>
          <Link href={`/courses/lesson/${roadmap.title}`}>
            {i + 1}. {roadmap.title}
          </Link>
        </li>
      ))}
    </div>
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
  const { slug, hi } = params
  const course = await getCourseBySlug(slug)
  const roadmap = await getRoadmaps(hi)

  return {
    props: {
      course: JSON.parse(JSON.stringify(course)),
      roadmap: JSON.parse(JSON.stringify(roadmap)),
    },
  }
}

export default CoursePage
