import React, { useState, useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Auth from '../../Auth/Auth'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '../Drawers/Drawer'
import Language from '../../utils/language'
import Context from '../../Context/Context'
import SelectCompany from '../ContentContainer/Company/SelectCompany'


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
  const [drawer, setDrawer] = useState(false)
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

  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawer}
          >

            <MenuIcon />
            {drawer ? <Drawer /> : ''}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            CFO
          </Typography>
          <SelectCompany/>
          
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
