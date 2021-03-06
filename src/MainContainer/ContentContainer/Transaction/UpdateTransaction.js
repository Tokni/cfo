import Context from '../../../Context/Context'
import Language from '../../../utils/language'
import Modal from '../../../Helpers/Modal'
import PropTypes from 'prop-types'
import React, { Fragment, useState, useContext } from 'react'
import SnackBar from '../SnackBar/SnackBar'
import { Edit } from '../../../Helpers/Constants'
import { useMutation } from 'react-apollo-hooks'
import { PUT_TRANSACTION } from '../../../utils/Query/TransactionQuery'
import { PUT_BILL_PAY } from '../../../utils/Query/BillQuery'
import { PUT_INVOICE_PAY } from '../../../utils/Query/InvoiceQuery'
import { withStyles, TextField } from '@material-ui/core'

const styles = theme => ({
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})

const CreateTransaction = props => {
  const [open, setOpen] = useState(false)
  const [debit_id, setDebitAccount] = useState(props.debit_id)
  const [credit_id, setCreditAccount] = useState(props.credit_id)
  const [payment, setPayment] = useState(props.payment)
  const [type, setType] = useState(props.type)
  const [bill_id, setBill] = useState(props.bill_id)
  const [billDescription, setBillDescription] = useState('')
  const [invoice_id, setInvoice] = useState(props.invoice_id)
  const [invoiceDescription, setInvoiceDescription] = useState('')
  const postTransactionMutation = useMutation(PUT_TRANSACTION)
  const updateBilltMutation = useMutation(PUT_BILL_PAY)
  const updateInvoiceMutation = useMutation(PUT_INVOICE_PAY)

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
    if (
      debit_id !== '' &&
      credit_id !== '' &&
      payment !== '' &&
      (bill_id !== null || invoice_id !== null)
    ) {
      await postTransactionMutation({
        variables: {
          id: props.id,
          company_id: state.company.id,
          credit_id,
          debit_id,
          payment,
          type,
          bill_id,
          invoice_id,
        },
      })
      if (bill_id !== null) {
        await updateBilltMutation({
          variables: {
            id: bill_id,
            company_id: state.company.id,
            paid: true,
          },
        })
      } else {
        await updateInvoiceMutation({
          variables: {
            id: invoice_id,
            company_id: state.company.id,
            paid: true,
          },
        })
      }

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
        title="updatetransaction"
        text="fill"
        submit={onSubmit}
        close={handleClose}
      >
        {/* type FIELD */}
        <TextField
          autoFocus
          margin="dense"
          id="debit"
          label={Language[state.locals].type}
          value={type || ''}
          type="text"
          fullWidth
          onChange={e => {
            setType(e.target.value)
          }}
        />

        {/* DEBIT FIELD */}
        <TextField
          autoFocus
          select
          margin="dense"
          id="debit"
          value={debit_id || ''}
          label={Language[state.locals].debit}
          type="text"
          fullWidth
          onChange={e => {
            setDebitAccount(e.target.value)
          }}
        >
          {state.company.Accounts ? (
            // eslint-disable-next-line array-callback-return
            state.company.Accounts.map((item, index) => {
              if (item.debit === true) {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                )
              }
            })
          ) : (
            <option>empty</option>
          )}
        </TextField>

        {/* CREDIT FIELD */}
        <TextField
          autoFocus
          margin="dense"
          id="credit"
          select
          value={credit_id || ''}
          label={Language[state.locals].credit || ''}
          type="text"
          fullWidth
          onChange={e => {
            setCreditAccount(e.target.value)
          }}
        >
          {state.company.Accounts ? (
            // eslint-disable-next-line array-callback-return
            state.company.Accounts.map((item, index) => {
              if (item.debit === false) {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                )
              }
            })
          ) : (
            <option>empty</option>
          )}
        </TextField>

        {/* Bill FIELD */}

        <TextField
          autoFocus
          margin="dense"
          id="bill"
          select
          value={billDescription || ''}
          label={Language[state.locals].bill || ''}
          type="text"
          fullWidth
          onChange={e => {
            setBillDescription(e.target.value)
            setBill(e.target.value.id)
            setPayment(e.target.value.payment)
          }}
        >
          {state.company.Bills ? (
            // eslint-disable-next-line array-callback-return
            state.company.Bills.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item.description}
                </option>
              )
            })
          ) : (
            <option>empty</option>
          )}
        </TextField>

        {/* invoice FIELD */}

        <TextField
          autoFocus
          margin="dense"
          id="invoice"
          select
          value={invoiceDescription || ''}
          label={Language[state.locals].invoice || ''}
          type="text"
          fullWidth
          onChange={e => {
            setInvoiceDescription(e.target.value)
            setInvoice(e.target.value.id)

            const accumulatedPrice = +e.target.value.Orders.map(
              (item, index) => {
                return item.quantity * item.price
              }
            )
            setPayment(accumulatedPrice)
          }}
        >
          {state.company.Invoices ? (
            // eslint-disable-next-line array-callback-return
            state.company.Invoices.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item.description}
                </option>
              )
            })
          ) : (
            <option>empty</option>
          )}
        </TextField>
      </Modal>

      {msg === true ? (
        msg === true && msgSuccess === true ? (
          <SnackBar
            message={'Transaction updated successfully'}
            state={'success'}
          />
        ) : (
          <SnackBar message={'Fields are required'} state={'error'} />
        )
      ) : null}
    </Fragment>
  )
}

CreateTransaction.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CreateTransaction)
