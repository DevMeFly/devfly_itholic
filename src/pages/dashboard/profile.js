import { AccountProfile } from '@/dashboard/account/account-profile'
import DashboardLayout from '@/dashboard/layout'
import DashboardProvider from '@/dashboard/provider/context'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import Moment from 'moment'

export default function Page(props) {
  const { user } = useUser()
  return (
    user && (
      <Box
        className='h-full rounded-xl bg-primary'
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='lg' className=' text-text'>
          <Typography sx={{ mb: 3 }} variant='h5'>
            My Profile
            {/* {JSON.stringify(user, null, 2)} */}
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile
                name={user.name}
                email={user.email}
                picture={user.picture}
                updated={Moment(user.updated_at).format('MMMM Do YYYY')}
              />
            </Grid>
            <Grid className='' item lg={8} md={6} xs={12}>
              <form autoComplete='off' noValidate {...props}>
                <Card className=''>
                  <CardHeader
                    subheader='The information can be edited'
                    title='Profile'
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          className=''
                          fullWidth
                          disabled
                          helperText='Please specify the first name'
                          label='First name'
                          name='firstName'
                          // onChange={handleChange}
                          required
                          // value={values.user}
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          disabled
                          label='Last name'
                          name='lastName'
                          // onChange={handleChange}
                          required
                          // value={values.lastName}
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          disabled
                          label='Email Address'
                          name='email'
                          // onChange={handleChange}
                          required
                          // value={values.email}
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          disabled
                          label='Country'
                          name='country'
                          // onChange={handleChange}
                          required
                          // value={values.country}
                          variant='outlined'
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 1,
                    }}
                  >
                    <Button
                      className='rounded-xl border-2 border-yellow bg-yellow py-2 font-semibold text-primary hover:border-text hover:bg-primary hover:text-text lg:px-10'
                      color='primary'
                      disabled
                      variant='contained'
                    >
                      Save details
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <DashboardProvider>
      <DashboardLayout>{page}</DashboardLayout>
    </DashboardProvider>
  )
}

export const getServerSideProps = withPageAuthRequired()
