import { useUser } from '@auth0/nextjs-auth0/client'
import Main from './main'
import { useToggle } from './provider/context'
import Overlay from './provider/overlay'
import SideNavigation from './sidenavigation'
import TopNavigation from './topnavigation'

/*	w-[calc(100%-16rem)] class get the remain width of the main component from lg:viewport by subtracting
(the total width by the width of the side navigation component which is w-64 = 16rem)*/

const style = {
  open: 'lg:w-full',
  close: 'lg:pl-4 lg:w-[calc(100%-16rem)]',
  mainContainer: `flex flex-col w-full h-screen pl-0 lg:space-y-4`,
  container: `bg-gray-100 h-screen overflow-hidden relative lg:p-4`,
  main: `h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0`,
}

export default function DashboardLayout({ children }) {
  const { user, error, isLoading } = useUser()
  const { open } = useToggle()
  if (isLoading)
    return (
      <div className={style.container}>
        <div className='flex items-start'>
          <Overlay />
          <SideNavigation mobilePosition='left' />
          <div
            className={`${style.mainContainer} 
          ${open ? style.open : style.close}`}
          >
            <TopNavigation picture='/images/1.jpg' />
            <Main className={style.main}>{children}</Main>
          </div>
        </div>
      </div>
    )

  if (error) return <div>{error.message}</div>

  return (
    <div className={style.container}>
      <div className='flex items-start'>
        <Overlay />
        <SideNavigation mobilePosition='left' />
        <div
          className={`${style.mainContainer} 
          ${open ? style.open : style.close}`}
        >
          <TopNavigation picture={user.picture} />
          <Main className={style.main}>{children}</Main>
        </div>
      </div>
    </div>
  )
}
