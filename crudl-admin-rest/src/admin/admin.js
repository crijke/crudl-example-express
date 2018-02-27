import CustomDashboard from './custom/Dashboard'
import auth from './auth'

import users from './views/users'
import sections from './views/sections'
import categories from './views/categories'
import tags from './views/tags'
import entries from './views/entries'

const OPTIONS = {
  debug: false,
  basePath: '/',
  baseURL: '/rest-api/'
}

const admin = {}
admin.title = 'crudl.io Express REST Example'
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
