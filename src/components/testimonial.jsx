import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <>
      <div className=''>
        <div className='flex justify-center gap-2 p-10 text-center'>
          <div className='title text-[38px] font-bold text-text'>What</div>
          <span className='text-[38px] font-bold text-yellow'>people say</span>
        </div>
        <div className='flex flex-col items-center justify-around gap-11  rounded-xl border-2 border-text bg-purple px-5 py-10 text-center  lg:flex-row lg:p-5 lg:text-left'>
          <div className=' '>
            <Image
              src='/images/header.png'
              alt='header'
              width={250}
              height={250}
            />
          </div>
          <div className='flex flex-col gap-10 text-text'>
            <div className='flex flex-col gap-2 text-text'>
              <div className='text-[18px] font-bold'>Adam Smith</div>
              <div className='font-thin'>Python Developer</div>
              <div className='text-yellow'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
            <div className='font-thin'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
