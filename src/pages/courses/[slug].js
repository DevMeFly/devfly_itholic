import Link from 'next/link'
import { getCourseBySlug, getCourses } from '../../utils/db'

const CoursePage = ({ course: { title, price, lessons, description } }) => {
  const isFree = price === 0

  return (
    <div className='text-white'>
      <h2 className='text-3xl'>{title}</h2>
      <h2 className='text-3xl'>{description}</h2>
      <ul className='p-2'>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link href={`/lesson/${lesson.slug}`}>
              {lesson.id}. {lesson.title}------------{lesson.description}
            </Link>
          </li>
        ))}
      </ul>
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
  const { slug } = params
  const course = await getCourseBySlug(slug)

  return {
    props: {
      course: JSON.parse(JSON.stringify(course)),
    },
  }
}

export default CoursePage
