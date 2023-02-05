import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Dashboard = () => {
  return (
    <div className='g'>
      <div className='j'>hi</div>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()
export default Dashboard
