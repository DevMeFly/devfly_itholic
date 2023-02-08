import Logout from '@mui/icons-material/Logout'
import { IconButton, Tooltip, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/system'
import * as React from 'react'
import { useToggle } from '../provider/context'

export default function TopNavigation({ picture }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { toggle } = useToggle()
  return (
    <header className='relative z-10 h-16 w-full items-center shadow md:h-20 lg:rounded-2xl'>
      <div className='flex-center relative mx-auto flex h-full flex-col justify-center px-3'>
        <div className='lg:max-w-68 relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2'>
          <div className='relative left-0 flex h-full w-3/4'>
            <div className='group relative flex h-full w-12 items-center'>
              <button
                type='button'
                aria-expanded='false'
                aria-label='Toggle sidenav'
                className='hidden text-4xl text-gray-500 focus:outline-none lg:block'
                onClick={toggle}
              >
                &#8801;
              </button>
            </div>
            <div className='group relative flex h-full w-full items-center lg:w-3/6 xl:w-[80%]'>
              <div className='absolute flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden'>
                <svg
                  fill='none'
                  className='relative h-5 w-5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <svg
                className='pointer-events-none absolute left-0 ml-4 hidden h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
              </svg>
              <input
                type='text'
                className='block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-gray-400 ring-opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Search'
              />
            </div>
          </div>
          <div className='relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography
                className='hidden lg:block'
                component='a'
                href='/'
                sx={{ minWidth: 100 }}
              >
                Home
              </Typography>
              <Typography
                component='a'
                href='/courses'
                className='hidden lg:block'
                sx={{ minWidth: 100 }}
              >
                Courses
              </Typography>
              <Typography
                component='a'
                href='/courses'
                className='hidden lg:block'
                sx={{ minWidth: 100 }}
              >
                Roadmaps
              </Typography>
              <Tooltip title='Account settings'>
                <IconButton
                  onClick={handleClick}
                  size='small'
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar src={picture} sx={{ width: 32, height: 32 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar src={picture} /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem
                component='a'
                href='/api/auth/logout'
                onClick={handleClose}
              >
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}
