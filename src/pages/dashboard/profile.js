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
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Typography sx={{ mb: 3 }} variant='h4'>
            Account
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
            <Grid item lg={8} md={6} xs={12}>
              <form autoComplete='off' noValidate {...props}>
                <Card>
                  <CardHeader
                    subheader='The information can be edited'
                    title='Profile'
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
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
                          label='Phone Number'
                          name='phone'
                          // onChange={handleChange}
                          type='number'
                          // value={values.phone}
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
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label='Select State'
                          name='state'
                          disabled
                          // onChange={handleChange}
                          required
                          // select
                          SelectProps={{ native: true }}
                          // value={values.state}
                          variant='outlined'
                        >
                          {/* {states.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))} */}
                        </TextField>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2,
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
