import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'

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
          <div className='text-[38px] font-bold text-text'>Roadmaps</div>
          <div class='flex flex-col gap-3 lg:flex-row'>
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
              >
                Machine Learning
              </Button>
            </Stack>
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
              >
                Web DEV
              </Button>
            </Stack>
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
              >
                CYBER SECURITY
              </Button>
            </Stack>
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
              >
                DATA SCIENCE
              </Button>
            </Stack>
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
              >
                DESIGN
              </Button>
            </Stack>
          </div>
          <div className='flex gap-3'>
            {' '}
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='rounded-xl border-transparent px-5 py-2 font-bold text-text decoration-yellow  hover:text-yellow hover:underline hover:decoration-4 '
              >
                Roadmaps
              </Button>
            </Stack>
            <Stack direction='row'>
              <Button
                variant='outlined'
                className='  rounded-xl border-transparent font-bold text-text decoration-yellow hover:text-yellow hover:underline hover:decoration-4 '
              >
                Courses Suggestions
              </Button>
            </Stack>
          </div>

          <div className=' flex self-center'>
            <Image
              src='/images/frontend.png'
              alt='header'
              width={1000}
              height={500}
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default CoursesDetails
