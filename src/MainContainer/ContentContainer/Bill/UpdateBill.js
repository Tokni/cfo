import Context from '../../../Context/Context'
import Language from '../../../utils/language'
import PropTypes from 'prop-types'
import React, { Fragment, useState, useContext } from 'react'
import SnackBar from '../SnackBar/SnackBar'
import StoreExpense from '../../StoreContainer/StoreExpense'
import StoreVendor from '../../StoreContainer/StoreVendor'
import StoreTax from '../../StoreContainer/StoreTax'
import { Edit } from '../../../Helpers/Constants'
import { PUT_BILL } from '../../../utils/Query/BillQuery'
import { setTimeout } from 'timers'
import { useMutation } from 'react-apollo-hooks'
import {
  withStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Fab,
  InputLabel,
} from '@material-ui/core'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    flexGrow: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})

const UpdateBill = props => {
  //load expense, vendor, tax
  const expenses = StoreExpense()
  const vendors = StoreVendor()
  const taxes = StoreTax()

  const [open, setOpen] = useState(false)
  const [vendor_id, setVendor_id] = useState(props.Vendor.id)
  const [expense_id, setExpense_id] = useState(props.Expense.id)
  const [description, setDescription] = useState(props.description)
  const [tax_id, setTax_id] = useState(props.Tax.id)
  const [payment, setPayment] = useState(props.payment)
  const [date_bill_received, setDate_bill_received] = useState(
    props.date_bill_received
  )
  const [payment_due, setPayment_due] = useState(props.payment_due)
  const [attachment_id, setAttachment_id] = useState('')

  const { classes } = props
  const updateBilltMutation = useMutation(PUT_BILL)
  const [state] = useContext(Context)
  const [msg, setMsg] = useState(false)
  const [msgSuccess, setMsgSuccess] = useState(true)

  const handleClose = props => {
    // setVendor_id(props.id)
    // setExpense_id('')
    // setDescription('')
    // setTax_id('')
    // setPayment(0)
    // setDate_bill_received(null)
    // setPayment_due(null)
    // setAttachment_id('')

    if (state.company) {
      setOpen(!open)
    }
    setMsg(false)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (
      props.id !== undefined &&
      state.vendor_id !== '' &&
      state.expense_id !== '' &&
      description !== '' &&
      tax_id !== '' &&
      payment !== 0 &&
      date_bill_received !== null &&
      payment_due !== null &&
      (attachment_id !== '' || attachment_id !== undefined)
    ) {
      updateBilltMutation({
        variables: {
          id: props.id,
          company_id: state.company.id,
          vendor_id,
          expense_id,
          description,
          tax_id,
          payment,
          date_bill_received,
          payment_due,
          attachment_id: attachment_id ? attachment_id : null,
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
      <Fab
        onClick={handleClose}
        color="primary"
        aria-label="Add"
        className={classes.fab}
      >
        <Edit />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {Language[state.locals].addbill}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {Language[state.locals].fillformtoaddbill}
          </DialogContentText>

          <TextField
            autoFocus
            select
            margin="dense"
            value={vendor_id || ''}
            id="vendor"
            label={Language[state.locals].vendor}
            fullWidth
            onChange={e => {
              setVendor_id(e.target.value)
            }}
          >
            {vendors ? (
              vendors.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                )
              })
            ) : (
              <option>no vendors created</option>
            )}
          </TextField>

          <TextField
            autoFocus
            select
            margin="dense"
            value={expense_id || ''}
            id="expense"
            label={Language[state.locals].expense}
            fullWidth
            onChange={e => {
              setExpense_id(e.target.value)
            }}
          >
            {expenses ? (
              expenses.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                )
              })
            ) : (
              <option>empty</option>
            )}
          </TextField>

          <TextField
            autoFocus
            margin="dense"
            id="description"
            value={description || ''}
            label={Language[state.locals].description}
            // type="text"
            fullWidth
            onChange={e => {
              setDescription(e.target.value)
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="payment"
            label={Language[state.locals].payment}
            value={payment}
            type="number"
            fullWidth
            onChange={e => {
              setPayment(e.target.value)
            }}
          />
          <TextField
            autoFocus
            select
            margin="dense"
            id="tax"
            label={Language[state.locals].tax}
            value={tax_id || ''}
            fullWidth
            onChange={e => {
              setTax_id(e.target.value)
            }}
          >
            {taxes ? (
              taxes.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name + ' %' + item.tax_percentage * 100}
                  </option>
                )
              })
            ) : (
              <option>No tax created</option>
            )}
          </TextField>

          <InputLabel>{Language[state.locals].billreceived}</InputLabel>
          <TextField
            autoFocus
            margin="dense"
            id="tax"
            value={date_bill_received || ''}
            type="date"
            fullWidth
            onChange={e => {
              setDate_bill_received(e.target.value)
            }}
          />
          <InputLabel>{Language[state.locals].paymentdue}</InputLabel>
          <TextField
            autoFocus
            margin="dense"
            id="payment_due"
            label={Language[state.locals].payment_due}
            value={payment_due}
            type="date"
            fullWidth
            onChange={e => {
              setPayment_due(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="attachment"
            label={Language[state.locals].attachment}
            value={attachment_id}
            type="text"
            fullWidth
            onChange={e => {
              setAttachment_id(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button name="cancel" onClick={handleClose} color="primary">
            {Language[state.locals].cancel}
          </Button>
          <Button name="submit" onClick={onSubmit} color="primary">
            {Language[state.locals].add}
          </Button>
        </DialogActions>
      </Dialog>
      {msg === true ? (
        msg === true && msgSuccess === true ? (
          <SnackBar message={'Bill updated successfully'} state={'success'} />
        ) : (
          <SnackBar message={'Fill all parameters'} state={'error'} />
        )
      ) : null}
    </Fragment>
  )
}

UpdateBill.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UpdateBill)
