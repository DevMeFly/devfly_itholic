import Link from 'next/link'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col justify-around gap-10 text-text lg:flex-row lg:gap-32 lg:text-[20px] '>
        <div className='flex flex-col gap-5'>
          <div className='font-bold'>Quick Links</div>
          <div className='flex flex-col gap-2 font-thin'>
            <div>
              <Link href='' className='text-sm text-text no-underline'>
                Home
              </Link>
            </div>
            <div>
              <Link href='' className='text-sm text-text no-underline'>
                {' '}
                Courses
              </Link>
            </div>
            <div>
              <Link href='' className='text-sm text-text no-underline'>
                Profile
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='font-bold'>Sign Up</div>
          <div className='flex flex-col gap-4 font-thin'>
            <div>
              <Link href='' className='text-sm text-text no-underline'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='font-bold'>Contact Us</div>
          <div className='flex flex-col gap-4 font-thin'>
            <div className='flex items-center gap-3 text-text'>
              <BsFillTelephoneFill />
              <div className='text-sm'>+212 65324341</div>{' '}
            </div>
            <div className='flex items-center gap-3 text-text'>
              {' '}
              <AiOutlineMail />
              <div className='text-sm'>example@gmail.com</div>{' '}
            </div>
            <div className='flex items-center gap-3 text-sm text-text'>
              <AiOutlineHome />
              <div>2751 Ash Dr.San Jose, South </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
