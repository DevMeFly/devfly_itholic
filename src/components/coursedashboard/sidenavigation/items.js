import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import data from './data'

const style = {
  title: `font-normal mx-4 text-sm`,
  active: `bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500`,
  link: `duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500`,
}

export default function SidenavItems({ lessons }) {
  const { asPath } = useRouter()
  return (
    <ul>
      <li>
        {data.map((item) => (
          <Link legacyBehavior href={item.link} key={item.title}>
            <a
              className={`${style.link} 
              ${item.link === asPath && style.active}`}
            >
              <span>{item.icon}</span>
              <span className={style.title}>{item.title}</span>
            </a>
          </Link>
        ))}
        {lessons.map((lesson, i) => (
          <Link
            key={lesson.id}
            className={`${style.link} 
              ${`/courses/lesson/${lesson.slug}` === asPath && style.active}`}
            href={`/courses/lesson/${lesson.slug}`}
          >
            <OndemandVideoIcon />
            <span className={style.title}>Lesson : {i + 1}</span>
          </Link>
        ))}
      </li>
    </ul>
  )
}
