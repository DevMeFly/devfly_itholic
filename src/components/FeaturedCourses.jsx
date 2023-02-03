import { Button, Stack } from '@mui/material'
import Image from 'next/image'

const FeaturedCourses = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center lg:flex-row'>
        <div className=' '>
          <Image
            src='/images/featured.png'
            alt='header'
            width={250}
            height={250}
          />
        </div>

        <div className='flex flex-col items-center gap-9 text-center text-text'>
          <div className='fles flex-col gap-0'>
            <div className='title text-[38px] font-bold'>
              Featured{' '}
              <span className='text-[38px] font-bold text-yellow'>Courses</span>
            </div>
          </div>
          <div className='pg text-[20px] font-light lg:w-1/2 '>
            Discover, collect, and learn extraordinary courses through our
            awesome platform.
          </div>
          <Stack direction='row' spacing={2}>
            <Button
              variant='outlined'
              className='hover:text-primay rounded-xl border-2 border-text px-3 py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary'
            >
              Start Learning
            </Button>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default FeaturedCourses
