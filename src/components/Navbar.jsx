import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  //Making the navbar bg color change from transparent to white when sroclling
  const [navColor, setnavColor] = useState('transparent')
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#FFFF') : setnavColor('transparent')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          transition: 'all 0.5s',
        }}
        id='home'
        className='sticky top-0 z-50 flex h-14 items-center justify-between px-4 py-12 transition duration-500 lg:items-center 2xl:px-[10%]'
      >
        hi
        <div
          className={`${
            showNav
              ? 'left-0 z-10'
              : 'transition-left -left-full lg:left-0 lg:top-0 lg:-z-10'
          } 
        fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-white text-xl 
        duration-500 lg:sticky lg:h-fit lg:w-fit lg:flex-row lg:items-center lg:justify-center lg:gap-[48px] lg:bg-transparent lg:text-[16px] xl:ml-[8rem]`}
        >
          <div
            onClick={() => setShowNav(!showNav)}
            className='flex w-40 items-center gap-3 lg:w-fit lg:gap-0'
          >
            hi
          </div>
        </div>
        <button className='z-10 lg:hidden'>
          {showNav ? (
            <IconContext.Provider value={{ className: 'text-2xl' }}>
              <AiOutlineClose onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: 'text-2xl' }}>
              <AiOutlineMenu onClick={() => setShowNav(!showNav)} />
            </IconContext.Provider>
          )}
        </button>
      </nav>
    </>
  )
}

export default Navbar
