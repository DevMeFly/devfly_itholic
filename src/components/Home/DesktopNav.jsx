import { useUser } from '@auth0/nextjs-auth0/client'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const DesktopNav = () => {
  const { user } = useUser()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div className='flex items-center justify-between text-text'>
        <div className='flex items-center gap-5'>
          <Image
            width={70}
            height={70}
            priority
            src='/logo.png'
            alt='logo'
            className='rounded-xl'
          />
          <div className='text-lg font-bold'>
            Skills <span className='text-yellow'> Builder</span>
          </div>
        </div>
        <div className='lg:hidden'>
          <Button
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <div className='text-yellow '>
              <AiOutlineMenu size={40} />
            </div>
          </Button>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem component='a' href='/' onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component='a' href='/dashboard' onClick={handleClose}>
              Dashboard
            </MenuItem>
            <MenuItem component='a' href='/courses' onClick={handleClose}>
              Courses
            </MenuItem>
            <MenuItem
              component='a'
              href='/dashboard/profile'
              onClick={handleClose}
            >
              Profile
            </MenuItem>
            {user ? (
              <MenuItem
                component='a'
                href='/api/auth/logout'
                onClick={handleClose}
              >
                Logout
              </MenuItem>
            ) : (
              <MenuItem
                component='a'
                href='/api/auth/login'
                onClick={handleClose}
              >
                Login
              </MenuItem>
            )}
          </Menu>
        </div>
        <div className='hidden lg:flex lg:gap-16 lg:text-lg '>
          <Link legacyBehavior href='/'>
            <a className='font-semibold text-text no-underline decoration-yellow  hover:underline hover:decoration-4'>
              Home
            </a>
          </Link>
          <Link legacyBehavior href='/courses/'>
            <a className='font-semibold text-text no-underline  decoration-yellow hover:underline hover:decoration-4'>
              Courses
            </a>
          </Link>
          <Link legacyBehavior href='/dashboard'>
            <a
              className='font-semibold text-text  no-underline decoration-yellow hover:underline hover:decoration-4'
              target='_blank'
            >
              Dashboard
            </a>
          </Link>
          <Link legacyBehavior href='/dashboard/profile'>
            <a
              className='font-semibold text-text  no-underline decoration-yellow hover:underline hover:decoration-4'
              target='_blank'
            >
              Profile
            </a>
          </Link>
        </div>
        <div className='hidden lg:flex'>
          <Stack direction='row'>
            {user ? (
              <Link
                legacyBehavior
                href='/api/auth/logout'
                className='font-semibold text-text no-underline'
              >
                <Button
                  variant='outlined'
                  className='rounded-xl border-2 border-text px-10 py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary'
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link
                legacyBehavior
                href='/api/auth/login'
                className='font-semibold text-text no-underline'
              >
                <Button
                  variant='outlined'
                  className='rounded-xl border-2 border-text px-10 py-2 font-semibold text-text hover:border-yellow hover:bg-yellow hover:text-primary'
                >
                  Login
                </Button>
              </Link>
            )}
          </Stack>
        </div>
      </div>
    </>
  )
}

export default DesktopNav
