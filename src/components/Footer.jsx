import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col justify-around gap-10 text-text lg:flex-row lg:gap-32 lg:text-[20px] '>
        <div className='flex flex-col gap-5'>
          <div className='font-bold'>Quick Links</div>
          <div className='flex flex-col gap-4 font-thin'>
            <div>
              <a href='' className='text-text no-underline'>
                Home
              </a>
            </div>
            <div>
              <a href='' className='text-text no-underline'>
                {' '}
                Courses
              </a>
            </div>
            <div>
              <a href='' className='text-text no-underline'>
                Profile
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='font-bold'>Sign Up</div>
          <div className='flex flex-col gap-4 font-thin'>
            <div>
              <a href='' className='text-text no-underline'>
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='font-bold'>Contact Us</div>
          <div className='flex flex-col gap-4 font-thin'>
            <div className='flex items-center gap-3 text-text'>
              <BsFillTelephoneFill />
              <div>+212 65324341</div>{' '}
            </div>
            <div className='flex items-center gap-3 text-text'>
              {' '}
              <AiOutlineMail />
              <div>example@gmail.com</div>{' '}
            </div>
            <div className='flex items-center gap-3 text-text'>
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
