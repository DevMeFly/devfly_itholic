import { Box, Drawer, useMediaQuery } from '@mui/material'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { ChartBar as ChartBarIcon } from '../icons/chart-bar'
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag'
import { User as UserIcon } from '../icons/user'
import { Logo } from './logo'
import { NavItem } from './nav-item'

const items = [
  {
    href: '/dashboard',
    icon: <ChartBarIcon fontSize='small' />,
    title: 'Dashboard',
  },
  {
    href: '/products',
    icon: <ShoppingBagIcon fontSize='small' />,
    title: 'Products',
  },
  {
    href: '/account',
    icon: <UserIcon fontSize='small' />,
    title: 'Account',
  },
]

export const DashboardSidebar = (props) => {
  const { open, onClose } = props
  const router = useRouter()
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  })

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }

      if (open) {
        onClose?.()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath],
  )

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href='/' passHref>
              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
            </NextLink>
          </Box>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor='left'
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant='permanent'
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </Drawer>
  )
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
