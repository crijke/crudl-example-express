import CustomDashboard from './custom/Dashboard'

import users from './views/users'
import sections from './views/sections'
import categories from './views/categories'
import tags from './views/tags'
import entries from './views/entries'
import auth from './auth'

const OPTIONS = {
  debug: false,
  basePath: '/',
  baseURL: '/graphql-api/'
}

const admin = {}
admin.title = 'crudl.io Express GraphQL Example'
admin.options = OPTIONS
admin.views = { users, sections, categories, tags, entries }
admin.auth = auth
admin.custom = { dashboard: CustomDashboard }
admin.id = 'crudl-example-express'
admin.messages = {
  'login.button': 'Sign in',
  'logout.button': 'Sign out',
  'logout.affirmation': 'Have a nice day!',
  pageNotFound: 'Sorry, page not found.'
}

export default admin
