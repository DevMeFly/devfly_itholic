import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Categories = ({ courses, name }) => {
  return (
    <>
      <div className=' flex flex-col gap-10 font-poppins'>
        <div className='flex flex-col items-center gap-4 text-center text-text'>
          <div className='flex flex-col gap-0'>
            <div className='text-[38px] font-bold text-text'>
              {name}
              <span className='text-[38px] font-bold text-yellow'>Courses</span>
            </div>
          </div>
          <div className='pg text-[20px] font-light '>
            Discover, collect, and learn extraordinary courses through our
            awesome platform.
          </div>
        </div>
        <div className=' flex flex-col items-center justify-center gap-10 text-center lg:grid lg:grid-cols-3'>
          {courses.map(({ id, title, thumbnail, author, slug }) => {
            return (
              <div
                key={id}
                className='flex w-fit flex-col items-center justify-center gap-5 rounded-xl bg-purple'
              >
                <Link
                  className='flex w-fit flex-col items-center justify-center gap-5 rounded-xl bg-purple p-3'
                  href={`/course-details/${slug}`}
                >
                  <div>
                    <Image
                      src={thumbnail}
                      width={320}
                      height={250}
                      alt=''
                      className='rounded-xl'
                    />
                  </div>
                  <div className='max-w-[320px] text-[20px] font-bold text-text'>
                    {title}
                  </div>
                  <div className='flex max-w-[320px] gap-6'>
                    <div className='font-thin text-text'>
                      Created by <span className='text-yellow'>{author}</span>
                    </div>
                    <div className='flex items-center text-yellow'>
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
                        className='rounded-xl border-text  px-5 py-2 font-thin text-text hover:text-primary '
                      >
                        Web
                      </Button>
                    </Stack>
                    <Stack direction='row'>
                      <Button
                        variant='outlined'
                        className='rounded-xl border-transparent px-5 py-2 font-bold text-text hover:bg-yellow hover:text-primary '
                      >
                        Enroll Now
                      </Button>
                    </Stack>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Categories
