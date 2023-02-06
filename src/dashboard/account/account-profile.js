import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'

const { timeZone } = Intl.DateTimeFormat().resolvedOptions()

export const AccountProfile = ({ name, email, picture, updated }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Avatar src={picture} sx={{ width: 150, height: 150 }} />
        <Typography color='textPrimary' gutterBottom variant='h5'>
          {name}
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          Email : {email}
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          TimeZone : {timeZone}
        </Typography>
        <Typography color='textSecondary' variant='body2'>
          Updated at : {updated}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        disabled
        className='bg-primary text-text'
        color='primary'
        fullWidth
        variant='text'
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
)
