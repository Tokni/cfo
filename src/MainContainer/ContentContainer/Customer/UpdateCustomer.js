import Context from '../../../Context/Context'
import Language from '../../../utils/language'
import Modal from '../../../Helpers/Modal'
import PropTypes from 'prop-types'
import React, { Fragment, useState, useContext } from 'react'
import SnackBar from '../SnackBar/SnackBar'
import { Edit } from '../../../Helpers/Constants'
import { useMutation } from 'react-apollo-hooks'
import { PUT_CUSTOMER } from '../../../utils/Query/CustomersQuery'
import { withStyles, TextField } from '@material-ui/core'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    flexGrow: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})

const UpdateCustomer = props => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(props.name)
  const putCustomerMutation = useMutation(PUT_CUSTOMER)
  const [state] = useContext(Context)
  const [msg, setMsg] = useState(false)
  const [msgSuccess, setMsgSuccess] = useState(true)

  const handleClose = () => {
    if (state.company !== null) {
      setOpen(!open)
    }
    setMsg(false)
  }

  const onSubmit = async e => {
    if (name !== null || name !== '') {
      await putCustomerMutation({
        variables: {
          name,
          company_id: state.company.id,
          id: props.id,
        },
      })
      setTimeout(() => {
        setMsgSuccess(true)
        setMsg(true)
      }, 1000)
    } else {
      setTimeout(() => {
        setMsgSuccess(false)
        setMsg(true)
      }, 1000)
    }
    handleClose()
  }

  return (
    <Fragment>
      <Modal
        Icon={Edit}
        title="updatecustomer"
        text="fillformtoupdatecustomer"
        submit={onSubmit}
        close={handleClose}
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={name}
          label={Language[state.locals].name}
          type="text"
          fullWidth
          onChange={e => {
            setName(e.target.value)
          }}
        />
      </Modal>
      {msg === true ? (
        msg === true && msgSuccess === true ? (
          <SnackBar
            message={Language[state.locals].customersuccessfullyupdated}
            state={'success'}
          />
        ) : (
          <SnackBar
            message={Language[state.locals].nameisrequired}
            state={'error'}
          />
        )
      ) : null}
    </Fragment>
  )
}

UpdateCustomer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UpdateCustomer)
