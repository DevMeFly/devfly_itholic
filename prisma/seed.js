const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const course1 = await prisma.course.create({
    data: {
      title: 'HTML & CSS Crash Course',
      description:
        'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
      price: 0,
      slug: 'html-css-crash-course-series',
      author: 'The Net Ninja',
      thumbnail:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1uCgossTRXqBImbdOwxo',
      lessons: {
        create: [
          {
            title: 'HTML & CSS Crash Course Tutorial #1-Introduction',
            description:
              'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
            videoUrl: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&t=139s',
            slug: 'html-css-crash-course-series-lesson-1',
          },
          {
            title: 'HTML & CSS Crash Course Tutorial #2-HTML Basics',
            description:
              'Hey gang, in this HTML tutorial I&aposll show you the basics of HTML syntax and how to construct HTML tags & documents.',
            videoUrl: 'https://www.youtube.com/watch?v=mbeT8mpmtHA&t=4s',
            slug: 'html-css-crash-course-series-lesson-2',
          },
        ],
      },
    },
  })
  const course2 = await prisma.course.create({
    data: {
      title: 'Flutter Tutorial for Beginners',
      description:
        'Hey gang, in this Flutter tutorial for beginners, I&apos;ll give you a quick introduction to the course and Flutter itself, a preview of what we&apos;ll be building & finally show you how to install Flutter on your computer.',
      price: 0,
      slug: 'flutter-tutorial-for-beginners',
      author: 'The Net Ninja',
      thumbnail:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/OlwlomQIGlJ5pMXS4Yyg',
      lessons: {
        create: [
          {
            title: 'Flutter Tutorial for Beginners #1 - Intro & Setup',
            description:
              'Hey gang, in this Flutter tutorial for beginners, I&apos;ll give you a quick introduction to the course and Flutter itself, a preview of what we&apos;ll be building & finally show you how to install Flutter on your computer.',
            videoUrl: 'https://www.youtube.com/watch?v=1ukSR1GRtMU',
            slug: 'flutter-tutorial-for-beginners-lesson-1',
          },
          {
            title: 'Flutter Tutorial for Beginners #2 - Flutter Overview',
            description:
              'Hey gang, in this HTML tutorial I&aposll explain the basic concepts of Flutter and what makes up a Flutter app - WIDGETS!!',
            videoUrl: 'https://www.youtube.com/watch?v=bKueYVtV0eA',
            slug: 'flutter-tutorial-for-beginners-lesson-2',
          },
        ],
      },
    },
  })

  console.log({ course1 })
  console.log({ course2 })
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
