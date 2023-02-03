const Categories = () => {
  const Categories = [
    {
      id: 1,
      title: 'Game Development : Programming with Java',
      creator: 'Mark Smith',
      category: 'Developement',
    },
    {
      id: 2,
      title: ' Product design and analysis : Psychical Goods creations for us',
      creator: 'Mark Smith',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Build a Website with HTML, CSS and Github Pages',
      creator: 'Adam Smith',
      category: 'Devlopment',
    },
    {
      id: 4,
      title: 'Learn Python',
      creator: 'Adam Smith',
      category: 'Data Science',
    },
    {
      id: 5,
      creator: 'Natasha Winfrey',
      title: 'Computer science for beginners',
    },
    {
      id: 6,
      creator: 'Natasha Winfrey',
      title: ' Data Scientist: Machine Learning Specialist',
    },
  ]

  return (
    <>
      <div className='flex flex-col '>
        <div className='  '>
          {Categories.map(({ id, creator, title }) => {
            return (
              <div
                key={id}
                className='flex w-full  flex-col items-center justify-center gap-4 rounded-xl bg-purple p-3'
              >
                <div className='text-gray rounded-full bg-text p-5 text-base font-bold'>
                  {creator}
                </div>
                <div className=' flex items-center gap-4 text-center'>
                  <div className='text-lg font-bold transition duration-500 dark:text-white'>
                    {title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Categories
