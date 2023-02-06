import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import HeaderImage from '/public/images/header.png'

const Header = () => {
  return (
    <div className='flex flex-col items-center gap-10 text-center font-poppins lg:flex-row-reverse lg:justify-between lg:text-left'>
      <div className='hidden lg:flex'>
        <Image src={HeaderImage} alt='header' width={500} height={500} />
      </div>
      <div className='flex flex-col items-center justify-start gap-9 px-3 text-text lg:items-start'>
        <div className='flex flex-col gap-0'>
          <div className='title text-[38px] font-bold'>Find Most Exciting</div>
          <span className='text-[38px] font-bold text-yellow'>
            Online Courses
          </span>
        </div>
        <div className='text-[20px] font-light '>
          Build your skills, boost your capacities and learn whenever and
          wherever you are.
        </div>
        <Stack direction='row' spacing={2}>
          <Button
            variant='outlined'
            className='rounded-xl border-2 border-yellow bg-yellow py-2 font-semibold text-primary hover:border-text hover:bg-primary hover:text-text lg:px-10'
          >
            Explore Courses
          </Button>
          <Button
            variant='outlined'
            className='rounded-xl border-2 border-text py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary lg:px-10'
          >
            Start Learning
          </Button>
        </Stack>
        <div className='flex gap-8 lg:gap-20'>
          <div className='flex flex-col '>
            <div className='text-[20px] font-bold'>3M+</div>
            <div>students</div>
          </div>
          <div className='flex flex-col '>
            <div className='text-[20px] font-bold'>19K+</div>
            <div>courses</div>
          </div>
          <div className='flex flex-col '>
            <div className='text-[20px] font-bold'>10K+</div>
            <div>Instructors</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
