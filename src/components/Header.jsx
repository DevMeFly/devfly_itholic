import { Button, Stack } from '@mui/material'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=' Header  my-10 flex  flex-row gap-10 px-10 text-left font-poppins'>
      <div className='flex flex-col gap-9 text-text'>
        <div className='fles flex-col gap-0'>
          <div className='title text-[38px] font-bold'>Find Most Exciting</div>
          <span className='text-[38px] font-bold text-yellow'>
            Online Courses
          </span>
        </div>
        <div className='pg w-1/2 text-[20px] font-light '>
          Build your skills, boost your capacities and learn whenever and
          wherever you are.
        </div>
        <Stack direction='row' spacing={2}>
          <Button
            variant='outlined'
            className='text-primay rounded-xl border-2 border-yellow bg-yellow px-10 py-2 font-semibold text-primary hover:border-text hover:bg-primary hover:text-text'
          >
            Explore Cources
          </Button>
          <Button
            variant='outlined'
            className='hover:text-primay rounded-xl border-2 border-text px-10 py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary'
          >
            Start Learning
          </Button>
        </Stack>
        <div className='flex gap-8'>
          <div className='flex flex-col pl-10'>
            <div className='text-[20px] font-bold'>3M+</div>
            <div>students</div>
          </div>
          <div className='flex flex-col pl-10'>
            <div className='text-[20px] font-bold'>19K+</div>
            <div>courses</div>
          </div>
          <div className='flex flex-col pl-10'>
            <div className='text-[20px] font-bold'>10K+</div>
            <div>Instuctors</div>
          </div>
        </div>
      </div>
      <div className=' '>
        <Image src='/images/header.png' alt='header' width={500} height={500} />
      </div>
    </div>
  )
}

export default Header
