import DashboardLayout from '@/dashboard/layout'
import DashboardProvider from '@/dashboard/provider/context'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Content from '../../components/content'

export default function Page() {
  return <Content title='Google' />
}

Page.getLayout = function getLayout(page) {
  return (
    <DashboardProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </DashboardProvider>
  )
}
export const getServerSideProps = withPageAuthRequired()
