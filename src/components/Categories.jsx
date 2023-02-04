import {
  AiOutlineAntDesign,
  AiOutlineDatabase,
  AiOutlineMobile,
} from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const Categories = () => {
  const Categories = [
    {
      id: 1,
      title: 'Design',
      icon: <AiOutlineAntDesign size={35} />,
    },
    {
      id: 2,
      title: ' Development',
      icon: <CgWebsite size={35} />,
    },
    {
      id: 3,
      title: 'Cyber Security',
      icon: <AiOutlineMobile size={35} />,
    },
    {
      id: 4,
      title: 'Data Science',
      icon: <AiOutlineDatabase size={35} />,
    },
    {
      id: 5,
      title: 'Management',
      icon: <CgWebsite size={35} />,
    },
    {
      id: 5,
      title: 'Programming',
      icon: <AiOutlineAntDesign size={35} />,
    },
  ]

  return (
    <>
      <div className='flex flex-col '>
        <div className='flex justify-center gap-2 p-10 text-center'>
          <div className='title text-[38px] font-bold text-text'>
            Most Popular{' '}
            <span className='text-[38px] font-bold text-yellow'>
              Categories
            </span>
          </div>
        </div>

        <div className=' grid grid-cols-2 items-center justify-around  gap-10 lg:flex lg:gap-5  '>
          {Categories.map(({ id, title, icon }) => {
            return (
              <div
                key={id}
                className='flex w-full  flex-col items-center justify-center gap-4 rounded-xl bg-purple p-3'
              >
                <div className='text-gray rounded-full bg-text p-5 text-base font-bold'>
                  {icon}
                </div>
                <div className=' flex items-center gap-4 text-center'>
                  <div className='text-lg font-bold transition duration-500 dark:text-white'>
                    {title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Categories
