// pages/dashboard.js

import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Profile = ({ user }) => {
  return <div>Hello {user.name}</div>
}

export const getServerSideProps = withPageAuthRequired()

export default Profile
