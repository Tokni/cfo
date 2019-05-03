import { useSubscription } from 'react-apollo-hooks'
import { GET_SUBSCRIP_ACCOUNTS } from '../../../utils/query'
import React, { Fragment, useContext } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Context from '../../../Context/Context'

const Accounts = () => {
  const [state, dispatch] = useContext(Context)
  const { data, error, loading } = useSubscription(GET_SUBSCRIP_ACCOUNTS, {
    suspend: false,
    variables: {
      company_id: state.company ? state.company.id : null,
    },
  })

  if (loading) {
    console.log('Loading accounts...')
    return (
      <tr>
        <td>-</td>
      </tr>
    )
  }
  if (error) {
    console.log('Error accounts: ', error)
    return (
      <tr>
        <td>-</td>
      </tr>
    )
  }
  console.log('Accounts data er : ', data.Account)
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Debit / Credit</TableCell>
            <TableCell align="right">Company name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.Account.map(item => {
            return (
              <Fragment>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.balance}</TableCell>
                  <TableCell align="right">
                    {item.debit ? 'debit' : 'credit'}
                  </TableCell>
                  <TableCell align="right">{item.Company.name}</TableCell>
                </TableRow>
              </Fragment>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default Accounts