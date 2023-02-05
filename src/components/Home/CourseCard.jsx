import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Categories = ({ courses }) => {
  const Categories = [
    {
      id: 1,
      title: 'Game Development : Programming with Java',
      creator: 'Mark Smith',
      category: 'Developement',
      image: '/images/img1.png',
    },
    {
      id: 2,
      title: ' Product design and analysis',
      creator: 'Mark Smith',
      category: 'Design',
      image: '/images/img2.png',
    },
    {
      id: 3,
      title: 'Build a Website with HTML, CSS ',
      creator: 'Adam Smith',
      category: 'Development',
      image: '/images/img3.png',
    },
    {
      id: 4,
      title: 'Grow your web development skills',
      creator: 'Adam Smith',
      category: 'Data Science',
      image: '/images/img4.png',
    },
    {
      id: 5,
      creator: 'Natasha Winfrey',
      title: 'Computer science for beginners',
      category: 'Data Science',
      image: '/images/img5.png',
    },
    {
      id: 6,
      creator: 'Natasha Winfrey',
      title: ' Data Scientist: Machine Learning Specialist',
      category: 'Data Science',
      image: '/images/img1.png',
    },
  ]

  return (
    <>
      <div className=' flex flex-col gap-10 '>
        {' '}
        <div className='flex flex-col items-center gap-4 text-center text-text'>
          <div className='flex flex-col gap-0'>
            <div className='title text-[38px] font-bold'>
              Featured{' '}
              <span className='text-[38px] font-bold text-yellow'>Courses</span>
            </div>
          </div>
          <div className='pg text-[20px] font-light  '>
            Discover, collect, and learn extraordinary courses through our
            awesome platform.
          </div>
        </div>
        <div className=' flex flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-2'>
          {courses.courses.map(({ id, title }) => {
            return (
              <div
                key={id}
                className='flex w-full  flex-col items-center justify-center gap-5 rounded-xl bg-purple px-2 py-3'
              >
                <div>
                  <Image
                    src='/images/img1.png'
                    width={320}
                    height={250}
                    alt=''
                    className='rounded-xl'
                  />
                </div>
                <div className='text-[20px] font-bold text-text'>{title}</div>
                <div className='flex gap-6'>
                  <div className='  font-thin text-text'>
                    Created by{' '}
                    <span className='text-yellow'>Aimade Youssra</span>
                  </div>
                  <div className='text-yellow'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className='flex justify-around gap-3'>
                  <Stack direction='row'>
                    <Button
                      variant='outlined'
                      className='hover:text-primay rounded-xl  border-text px-5 py-2 font-thin text-text '
                    >
                      Web
                    </Button>
                  </Stack>
                  <Stack direction='row'>
                    <Button
                      variant='outlined'
                      className='hover:text-primay rounded-xl border-transparent px-5 py-2 font-bold text-text hover:bg-yellow hover:text-primary '
                    >
                      Enroll Now
                    </Button>
                  </Stack>
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
