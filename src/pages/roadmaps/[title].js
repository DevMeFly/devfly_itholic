import DesktopNav from '@/components/Home/DesktopNav'
import Footer from '@/components/Home/Footer'
import { getRoadmap, getRoadmaps } from '@/utils/db'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'

const CoursesDetails = ({ roadmap, roadmaps }) => {
  const currentyear = new Date()
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
          {roadmap.map(({ id, title, description, roadmaplink }) => {
            return (
              <>
                <div key={id} className='text-text'>
                  <div className='flex text-[38px] font-bold'>{title} :</div>
                  <div className='text-[lg font-thin'>
                    {description} {currentyear.getFullYear()}
                  </div>
                </div>
                <div className='flex flex-col gap-3 self-center lg:flex-row'>
                  <div className='flex justify-center text-[38px] font-bold'></div>
                  {roadmaps.map(({ id, title, icon }) => {
                    return (
                      <Stack key={id} direction='row'>
                        <Button
                          variant='outlined'
                          className='flex gap-2 rounded-xl border-2 border-yellow px-5 py-2 font-semibold text-yellow'
                        >
                          <div className=''>
                            <Image
                              src={icon}
                              width={30}
                              height={30}
                              alt='icon'
                              className='rounded-xl'
                            />
                          </div>
                          <div className=''>{title}</div>
                        </Button>
                      </Stack>
                    )
                  })}
                </div>
                <div className='flex self-center'>
                  {/* <Image
                    src='/images/frontend.png'
                    alt='header'
                    width={1000}
                    height={500}
                  /> */}
                  <iframe className='h-screen w-screen' src={roadmaplink} />
                </div>
              </>
            )
          })}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default CoursesDetails

export const getStaticPaths = async () => {
  const roadmaps = await getRoadmaps()
  const paths = roadmaps.map(({ title }) => ({
    params: {
      title,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { title } = params
  const specificroadmap = await getRoadmap(title)
  const allroadmaps = await getRoadmaps()

  return {
    props: {
      roadmap: JSON.parse(JSON.stringify(specificroadmap)),
      roadmaps: JSON.parse(JSON.stringify(allroadmaps)),
    },
  }
}
