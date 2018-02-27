import React from 'react'
import CustomDashboard from './custom/Dashboard'

const users = require('./views/users')
const sections = require('./views/sections')
const categories = require('./views/categories')
const tags = require('./views/tags')
const entries = require('./views/entries')
const { login, logout } = require('./auth')

const OPTIONS = {
  debug: false,
  basePath: '/crudl-rest/',
  baseURL: '/rest-api/'
}

const admin = {}
admin.title = 'crudl.io Express REST Example'
admin.options = OPTIONS
admin.views = { users, sections, categories, tags, entries }
admin.auth = { login, logout }
admin.custom = { dashboard: CustomDashboard }
admin.id = 'crudl-example-express'
admin.messages = {
  'login.button': 'Sign in',
  'logout.button': 'Sign out',
  'logout.affirmation': 'Have a nice day!',
  pageNotFound: 'Sorry, page not found.'
}

export default admin
