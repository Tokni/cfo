import gql from 'graphql-tag'

const GET_SUBSCRIP_ACCOUNTS = gql`
  subscription($company_id: uuid!) {
    Account(where: { company_id: { _eq: $company_id } }) {
      id
      type
      name
      debit
      balance
      company_id
      account_numbers
      Company {
        user_id
        name
      }
    }
  }
`

const GET_ACCOUNTS_NAME_BALANCE = gql`
  subscription getAccountNamesBalances($company_id: uuid!, $debit: Boolean) {
    Account(
      where: { company_id: { _eq: $company_id }, debit: { _eq: $debit } }
    ) {
      name
      balance
    }
  }
`

const GET_SUBSCRIP_ACCOUNT = gql`
  subscription getAccount($company_id: uuid!, $id: uuid!) {
    Account(where: { company_id: { _eq: $company_id }, id: { _eq: $id } }) {
      account_numbers
    }
  }
`

const PUT_ACCOUNT_BALANCE = gql`
  mutation putBalanceAccount(
    $id: uuid
    $company_id: uuid!
    $balance: numeric!
  ) {
    update_Account(
      where: { id: { _eq: $id }, company_id: { _eq: $company_id } }
      _set: { balance: $balance }
    ) {
      affected_rows
    }
  }
`

const PUT_ACCOUNT_NUMBERS = gql`
  mutation putAccountNumber($id: uuid!, $account_numbers: json!) {
    update_Account(
      where: { id: { _eq: $id } }
      _set: { account_numbers: $account_numbers }
    ) {
      affected_rows
    }
  }
`
// mutation putAccountNumber($id: uuid!) {
//   update_Account(where: {id: {_eq: $id}}, _set: {account_numbers: [{name: "betri", account_number: "9181-444.444.4"}]}) {
//     affected_rows
//     returning {
//       account_numbers
//     }
//   }
// }

const POST_ACCOUNT = gql`
  mutation createAccount(
    $name: String!
    $balance: numeric!
    $type: Int!
    $debit: Boolean!
    $company_id: uuid!
  ) {
    insert_Account(
      objects: {
        name: $name
        balance: $balance
        type: $type
        debit: $debit
        company_id: $company_id
      }
    ) {
      affected_rows
    }
  }
`

const GET_ACCOUNTS_BY_TYPE = gql`
  subscription getDebitAccounts($company_id: uuid!, $debit: Boolean!) {
    Account(
      where: { company_id: { _eq: $company_id }, debit: { _eq: $debit } }
    ) {
      name
      balance
    }
  }
`
export {
  GET_SUBSCRIP_ACCOUNTS,
  GET_SUBSCRIP_ACCOUNT,
  GET_ACCOUNTS_NAME_BALANCE,
  POST_ACCOUNT,
  PUT_ACCOUNT_NUMBERS,
  PUT_ACCOUNT_BALANCE,
  GET_ACCOUNTS_BY_TYPE,
}
