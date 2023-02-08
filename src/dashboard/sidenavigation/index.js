import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useToggle } from '../provider/context'
import SidenavHeader from './header'
import SidenavItems from './items'
import css from './style.module.css'

const style = {
  mobilePosition: {
    left: 'left-0',
    right: 'right-0',
  },
  container: `pb-32 lg:pb-6 hidden lg:block`,
  close: `hidden lg:block lg:w-64 lg:z-auto`,
  open: `w-8/12 absolute z-40 sm:w-5/12 lg:hidden`,
  default: `bg-white h-screen overflow-y-auto top-0 lg:relative`,
}

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle()
  const [showNav, setShowNav] = useState(false)
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
      <aside
        ref={ref}
        className={`${style.default} ${style.mobilePosition[mobilePosition]} 
          ${open ? style.open : style.close} ${css.scrollbar}`}
      >
        <SidenavHeader />
        <SidenavItems />
      </aside>
      <div className='absolute pb-32 lg:pb-6'>
        <>
          <nav
            style={{
              backgroundColor: navColor,
              transition: 'all 0.5s',
            }}
            id='home'
            className='relative top-0 z-50 flex h-14 items-center justify-between px-4 py-12 transition duration-500 lg:hidden 2xl:px-[10%]'
          >
            <div
              className={`${
                showNav
                  ? 'left-0  z-10'
                  : 'transition-left -left-full lg:left-0 lg:top-0 lg:-z-10'
              } 
        fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-white text-xl 
        duration-500 lg:sticky lg:h-fit lg:w-fit lg:flex-row lg:items-center lg:justify-center lg:gap-[48px] lg:bg-transparent lg:text-[16px] xl:ml-[8rem]`}
            >
              <div
                onClick={() => setShowNav(!showNav)}
                className='flex w-40 items-center gap-3 lg:w-fit lg:gap-0'
              >
                <SidenavHeader />
                <SidenavItems />
              </div>
            </div>
            <button className='absolute top-6 left-3 z-10 lg:hidden'>
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
      </div>
    </>
  )
}
