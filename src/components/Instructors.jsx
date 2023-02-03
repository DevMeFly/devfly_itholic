import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'

const Intructors = () => {
  const Intructors = [
    {
      id: 1,
      name: 'Bessie Cooper',
    },
    {
      id: 2,
      name: 'Kathryn Murphy',
    },
    {
      id: 3,
      name: 'Wade Warren',
    },
    {
      id: 4,
      name: 'Bessie Cooper',
    },
    {
      id: 5,
      name: 'Wade Warren',
    },
    {
      id: 6,
      name: 'Wade Warren',
    },
  ]

  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-center gap-2 text-center lg:p-10'>
          <div className='title text-[38px] font-bold text-text'>
            Meet Our best{' '}
            <span className='text-[38px] font-bold text-yellow'>
              Intructors
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-around gap-10 lg:grid-cols-3  '>
          {Intructors.map(({ id, name }) => {
            return (
              <div
                key={id}
                className='flex w-full   items-center justify-around gap-6 rounded-xl bg-purple p-3 py-8'
              >
                <div className='text-text'>
                  <RxAvatar color='text' size={50} />
                </div>
                <div className='text-text'>
                  <div className='text-[18px] font-bold'>{name}</div>
                  <div className='font-thin'>Programmer</div>
                </div>

                <div className='text-text'>
                  <BsFillArrowUpRightSquareFill color='text' size={50} />
                </div>
                <div className=' flex items-center gap-4 text-center'>
                  <div className='text-lg font-bold transition duration-500 dark:text-white'></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Intructors
