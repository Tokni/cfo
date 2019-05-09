import Auth from '../../Auth/Auth'
import Context from '../../Context/Context'
import Language from '../../utils/language'
import PropTypes from 'prop-types'
import SelectCompany from '../ContentContainer/Company/SelectCompany'
import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, AppBar, Toolbar } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const Header = props => {
  const auth = new Auth()
  const [state] = useContext(Context)
  const handleAuth = () => {
    if (auth.isAuthenticated() === false) {
      auth.login()
    } else {
      console.log('try again')
    }
  }

  const handleLogout = () => {
    auth.logout()
  }

  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            CFO
          </Typography>
          <SelectCompany />

          {localStorage.getItem('sub') ? (
            <Button onClick={handleLogout} color="inherit">
              {Language[state.locals].logout}
            </Button>
          ) : (
            <Button onClick={handleAuth} color="inherit">
              {Language[state.locals].login}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
