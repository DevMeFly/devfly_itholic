const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // const roadmap1 = await prisma.roadmap.create({
  //   data: {
  //     title: 'Backend',
  //     roadmaplink:
  //       'https://miro.medium.com/max/1400/1*WWkUziCc9vBMtzkKOyYoJQ.webp',
  //     courses: {
  //       create: {
  //         title: 'HTML & CSS Crash Course',
  //         description:
  //           'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
  //         price: 0,
  //         slug: 'html-css-crash-course-series',
  //         author: 'The Net Ninja',
  //         thumbnail:
  //           'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1uCgossTRXqBImbdOwxo',
  //         requirements: {
  //           create: {
  //             title: 'What is Internet',
  //             requirementlink: 'https://www.w3schools.blog/internet',
  //           },
  //         },
  //         lessons: {
  //           create: {
  //             title: 'HTML & CSS Crash Course Tutorial #1-Introduction',
  //             description:
  //               'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
  //             videoUrl: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&t=139s',
  //             slug: 'html-css-crash-course-series-lesson-1',
  //             content: {
  //               create: {
  //                 content:
  //                   'The <!DOCTYPE html> declaration defines that this document is an HTML5 document',
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  const roadmap2 = await prisma.roadmap.create({
    data: {
      title: 'Backend',
      roadmaplink: 'https://roadmap.sh/roadmaps/backend.png',
      courses: {
        create: {
          title: 'Node.js Crash Course Tutorial',
          description:
            'Hey gang, welcome to the first Node js tutorial from this crash course. To download Node.js go to https://nodejs.org/en/download/ and select either the windows or mac version. ',
          price: 0,
          slug: 'Node.js-Crash-Course-Tutorial',
          author: 'The Net Ninja',
          thumbnail:
            'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9fPHe00Tn2lKlIoHwmZI',
          requirements: {
            create: {
              title: 'Html and css',
              requirementlink:
                'https://devfly-itholic.vercel.app/courses/html-css-crash-course-series',
            },
          },
          lessons: {
            create: {
              title: 'Node.js Crash Course Tutorial #1 - Introduction & Setup',
              description:
                'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
              videoUrl: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&t=139s',
              slug: 'Node.js-Crash-Course-Tutorial-lesson1',
              content: {
                create: {
                  content:
                    'Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs Nodejs',
                },
              },
            },
          },
        },
      },
    },
  })

  console.log({ roadmap2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
