const AllCourses = ({ courses }) => {
  return (
    <>
      <h1>Courses</h1>
      <div className='rounded-xl py-5 shadow-xl'>
        {courses.courses.map((title, createdAt) => {
          return (
            <div
              key={courses._id}
              className='flex items-center justify-between gap-5 px-3  hover:bg-[#5A4AEF] hover:text-white'
            >
              <div className=''>
                <div className='flex items-center'>
                  <div className=''>
                    <span className=''>{title}</span>
                    <span>-------------------------</span>
                    <span className=''>{createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AllCourses
