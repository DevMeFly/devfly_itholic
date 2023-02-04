import { useUser } from '@auth0/nextjs-auth0/client'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Link from 'next/link'

const DesktopNav = () => {
  const { user } = useUser()

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>{error.message}</div>

  return (
    <>
      <div className='flex items-center justify-around text-text'>
        <div className='flex items-center gap-2'>
          <div className='text-lg font-bold'>
            Skills <span className='text-yellow'> Builder</span>
          </div>
        </div>
        <div className='flex gap-10 text-sm '>
          <Link legacyBehavior href='/'>
            <a className='font-semibold text-text no-underline' target='_blank'>
              Home
            </a>
          </Link>
          <Link legacyBehavior href=''>
            <a className='font-semibold text-text no-underline' target='_blank'>
              Courses
            </a>
          </Link>
          <Link legacyBehavior href=''>
            <a className='font-semibold text-text no-underline' target='_blank'>
              Profile
            </a>
          </Link>
        </div>
        <Stack direction='row'>
          {user ? (
            <Link legacyBehavior href='/api/auth/logout'>
              <Button
                variant='outlined'
                className='hover:text-primay rounded-xl border-2 border-text px-10 py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary'
              >
                <a className='font-semibold text-text no-underline'>Logout</a>
              </Button>
            </Link>
          ) : (
            <Link legacyBehavior href='/api/auth/login'>
              <Button
                variant='outlined'
                className='hover:text-primay rounded-xl border-2 border-text px-10 py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary'
              >
                <a className='font-semibold text-text no-underline'>Login</a>
              </Button>
            </Link>
          )}
        </Stack>
      </div>
    </>
  )
}

export default DesktopNav
