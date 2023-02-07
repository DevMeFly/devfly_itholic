import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import Head from 'next/head'

const CoursesDetails = () => {
  return (
    <>
      <Head>
        <title>Skills Builder</title>
        <meta name='description' content='Skills builder platform' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main className='mx-auto flex max-w-[1440px] flex-col gap-24 bg-primary p-10'>
        <DesktopNav />

        <div className='flex flex-col gap-5'>
          <div className='text-[38px] font-bold text-text'>Course Catalog</div>
          <Stack direction='row'>
            <Button
              variant='outlined'
              className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
            >
              Machine Learning
            </Button>
          </Stack>
        </div>
        <div className='div flex flex-col justify-center gap-10 lg:flex-row lg:gap-24'>
          <div className='1st_section flex flex-col gap-10 '>
            <div className='gap2 flex flex-col'>
              <div className='text-[28px] font-bold text-text'>
                What you will learn
              </div>
              <div className='font-thin text-[24x] text-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
              </div>
              <div className='font-thin text-[24x] text-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
              </div>{' '}
            </div>
            <div className='gap2 flex flex-col'>
              <div className='text-[28px] font-bold text-text'>
                Whhy is the course different?
              </div>
              <div className='font-thin text-[24x] text-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
              </div>
              <div className='font-thin text-[24x] text-text'>
                Master the basics of python.
              </div>{' '}
              <div className='font-thin text-[24x] text-text'>
                Master the basics of python.
              </div>{' '}
            </div>
          </div>
          <div className='2nd_section flex flex-col gap-10'>
            <div className='flex flex-col gap-10'>
              <div className='gap2 flex flex-col'>
                <div className='text-[28px] font-bold text-text'>
                  Description
                </div>
                <div className='font-thin text-[24x] text-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{' '}
                  <div className='font-thin text-[24x] text-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{' '}
                  </div>
                </div>
              </div>
              <div gap2 flex flex-col>
                <div className='text-[28px] font-bold text-text'>
                  Course content
                </div>
                <div className='font-thin text-[24x] text-yellow'>
                  20 sessions
                </div>
                <div className='font-thin text-[24x] text-yellow'>
                  Total Duration : 1h{' '}
                </div>{' '}
              </div>
              <div className='gap2 flex flex-col'>
                <div className='text-[28px] font-bold text-text'>
                  Prerequesites
                </div>
                <div className='font-thin text-[24x] text-text'>
                  No notion in Python needed. Beginners are all welcome
                </div>
                <div className='font-thin text-[24x] text-text'>
                  Everything you need is a PC{' '}
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
        <Stack direction='row'>
          <Button
            variant='outlined'
            className=' rounded-xl border-transparent bg-yellow px-10 py-2 font-bold text-primary  '
          >
            Enroll Now
          </Button>
        </Stack>
        <Footer />
      </main>
    </>
  )
}

export default CoursesDetails
