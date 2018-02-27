import { login as loginConnector } from './connectors'

const login = {
  actions: {
    login: loginConnector.create
  }
}

login.fields = [
  {
    name: 'username',
    label: 'Username',
    field: 'Text'
  },
  {
    name: 'password',
    label: 'Password',
    field: 'Password'
  }
]

export default {
  login,
  logout: undefined // Logout is optional
}
