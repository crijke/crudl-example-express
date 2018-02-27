import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} from 'graphql'
import { connectionDefinitions } from 'graphql-relay'
import { EntryType, EntryInputType } from './entry'

const db = require('../../db')

const EntryLinkType = new GraphQLObjectType({
  name: 'Entrylink',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    entry: {
      type: EntryType,
      resolve(parent, args) {
        return db.models.Entry.findById(parent.entry)
      }
    },
    url: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    position: {
      type: GraphQLInt
    }
  })
})

const EntryLinkInputType = new GraphQLInputObjectType({
  name: 'EntryLinkInput',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    clientMutationId: {
      type: GraphQLString
    },
    entry: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    position: {
      type: GraphQLInt
    }
  })
})

const EntryLinkResultType = new GraphQLObjectType({
  name: 'EntryLinkResult',
  fields: () => ({
    errors: {
      type: new GraphQLList(GraphQLString)
    },
    entryLink: {
      type: EntryLinkType
    }
  })
})

const EntryLinkDeleteType = new GraphQLObjectType({
  name: 'EntryLinkDelete',
  fields: () => ({
    deleted: {
      type: GraphQLBoolean
    },
    entryLink: {
      type: EntryLinkType
    }
  })
})

const {
  connectionType: EntryLinkListConnection,
  edgeType: EntryLinkListEdge
} = connectionDefinitions({
  name: 'EntryLinkList',
  nodeType: EntryLinkType,
  connectionFields: () => ({
    filteredCount: {
      type: GraphQLInt,
      resolve: connection => connection.filteredCount
    },
    totalCount: {
      type: GraphQLInt,
      resolve: connection => connection.totalCount
    }
  })
})

module.exports = {
  EntryLinkListConnection,
  EntryLinkType,
  EntryLinkInputType,
  EntryLinkResultType,
  EntryLinkDeleteType
}
