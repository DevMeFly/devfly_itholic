const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const roadmap1 = await prisma.roadmap.create({
    data: {
      title: 'Backend',
      description: '',
      roadmaplink:
        'https://miro.medium.com/max/1400/1*WWkUziCc9vBMtzkKOyYoJQ.webp',
      icon: 'https://miro.medium.com/max/1400/1*WWkUziCc9vBMtzkKOyYoJQ.webp',
      courses: {
        create: {
          title: 'HTML & CSS Crash Course',
          duration: '7 h',
          whatyoulearn:
            'What you will learn: Master the basics of Python Open and play files in lists Create loops to loop through each element of a dataset Retrieve and filter the elements you are interested in using slicing and Boolean operators Use dictionaries to count items in a dataset Create functions and automate our searches Use modules and classes in Python Simplify code using list comprehension Work with regular expressions to extract any kind of well-targeted words/texts in a dataset Work with dates to analyze trends by month or year Deal with concrete cases from the real world on projects In general, detect trends by exploring and analyzing a dataset',
          why: 'Why is this course different? This won&apos;t be a class where you stare at my code for hours. It&apos;s a course where you practice, put your hands in the code and manipulate the data yourself for hours. My goal is above all to give you the desire to thoroughly investigate datasets. After completing this course, you will be able to interact with any csv file, spot trends on any topic you are interested in  So let&apos;s do that! Sign up today and start learning the basics of Python with real-world examples of data manipulation ! Who is this course for? Beginner in programming wishing to learn the basics of Python from A to Z Analysts wishing to discover Python applied to datascience Anyone wishing to start a career in Data Science Anyone curious about Data Science ',
          description:
            'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
          price: 0,
          slug: 'html-css-crash-course-series',
          author: 'The Net Ninja',
          thumbnail:
            'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1uCgossTRXqBImbdOwxo',
          requirements: {
            create: {
              title: 'No notion in Python necessary.',
              requirementlink: 'https://www.w3schools.blog/internet',
            },
          },
          lessons: {
            create: {
              title: 'HTML & CSS Crash Course Tutorial #1-Introduction',
              duration: '1 h',
              description:
                'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
              videoUrl: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&t=139s',
              slug: 'html-css-crash-course-series-lesson-1',
            },
          },
        },
      },
    },
  })
  const roadmap2 = await prisma.roadmap.create({
    data: {
      title: 'Backend',
      description: '',
      roadmaplink: 'https://roadmap.sh/roadmaps/backend.png',
      icon: 'https://miro.medium.com/max/1400/1*WWkUziCc9vBMtzkKOyYoJQ.webp',
      courses: {
        create: {
          title: 'Node.js Crash Course Tutorial',
          duration: '7 h',
          whatyoulearn:
            'What you will learn: Master the basics of Python Open and play files in lists Create loops to loop through each element of a dataset Retrieve and filter the elements you are interested in using slicing and Boolean operators Use dictionaries to count items in a dataset Create functions and automate our searches Use modules and classes in Python Simplify code using list comprehension Work with regular expressions to extract any kind of well-targeted words/texts in a dataset Work with dates to analyze trends by month or year Deal with concrete cases from the real world on projects In general, detect trends by exploring and analyzing a dataset',
          why: 'Why is this course different? This won&apos;t be a class where you stare at my code for hours. It&apos;s a course where you practice, put your hands in the code and manipulate the data yourself for hours. My goal is above all to give you the desire to thoroughly investigate datasets. After completing this course, you will be able to interact with any csv file, spot trends on any topic you are interested in  So let&apos;s do that! Sign up today and start learning the basics of Python with real-world examples of data manipulation ! Who is this course for? Beginner in programming wishing to learn the basics of Python from A to Z Analysts wishing to discover Python applied to datascience Anyone wishing to start a career in Data Science Anyone curious about Data Science ',
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
              duration: '1 h',
              description:
                'Hey gang & welcome to your very first HTML & CSS tutorial. Throughout this crash course series I&apos;ll take you from total beginner to create great-looking sites with HTML & CSS. In this video, we&apos;ll cover what HTML & CSS are, as well as setting up our dev environment. ',
              videoUrl: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&t=139s',
              slug: 'Node.js-Crash-Course-Tutorial-lesson1',
            },
          },
        },
      },
    },
  })

  console.log({ roadmap1 })
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
