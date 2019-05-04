import React, { useContext, Fragment } from 'react'
import Context from '../../../Context/Context'
import { useQuery } from 'react-apollo-hooks'
import { GET_COMPANY } from '../../../utils/query'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const Home = () => {
  const { data } = useQuery(GET_COMPANY, {
    suspend: false,
  })

  const [state, dispatch] = useContext(Context)

  const companiesLoader = () => {
    dispatch({
      type: 'change_company',
      companies: data.Company,
    })
  }

  const companyHandler = () => {
    dispatch({
      type: 'set_company',
      index: 0,
    })
  }

  const handleChooseCompany = id => {
    console.log('id is : ', id)
    dispatch({
      type: 'set_company',
      index: id,
    })
  }

  return (
    <Fragment>
      <button onClick={companiesLoader}>load companies</button>
      <button onClick={companyHandler}>get company</button>
      <button
        onClick={() => {
          dispatch({ type: 'set_locals', locals: 'en' })
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set_locals', locals: 'fo' })
        }}
      >
        FO
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set_locals', locals: 'de' })
        }}
      >
        DE
      </button>
      <Grid container spacing={12}>
        <Grid xs={4} style={{ color: '#001011', padding: 20 }}>
          <Grid justify="center">
            <Paper style={{ padding: 8, height: 400, overflowX: 'auto' }}>
              <Typography gutterBottom variant="title">
                Standard license
              </Typography>
              <Typography gutterBottom variant="body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Typography gutterBottom variant="title">
                Why do we use it?
              </Typography>
              <Typography variant="body">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid xs={8} style={{ padding: 20 }}>
          <Grid justify="center">
            <Paper style={{ padding: 10 }}>
              <Typography variant="subtitle1">
                Trýst á eina fyritøku fyri at velja hana.
              </Typography>
            </Paper>
          </Grid>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Mother Id</TableCell>
                  <TableCell align="right">User Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.companies
                  ? state.companies.map((item, index) => {
                      return (
                        <TableRow
                          key={index}
                          onClick={handleChooseCompany.bind(this, index)}
                        >
                          <TableCell component="th" scope="row">
                            {item.id}
                          </TableCell>
                          <TableCell align="right">{item.mother_id}</TableCell>
                          <TableCell align="right">{item.user_id}</TableCell>
                          <TableCell align="right">{item.name}</TableCell>
                        </TableRow>
                      )
                    })
                  : console.log('error')}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Home