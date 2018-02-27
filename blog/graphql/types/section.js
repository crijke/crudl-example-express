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

const SectionType = new GraphQLObjectType({
  name: 'Section',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    slug: {
      type: GraphQLString
    },
    position: {
      type: GraphQLInt
    }
  })
})

const SectionInputType = new GraphQLInputObjectType({
  name: 'SectionInput',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    clientMutationId: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    slug: {
      type: GraphQLString
    },
    position: {
      type: GraphQLInt
    }
  })
})

const SectionResultType = new GraphQLObjectType({
  name: 'SectionResult',
  fields: () => ({
    errors: {
      type: new GraphQLList(GraphQLString)
    },
    section: {
      type: SectionType
    }
  })
})

const SectionDeleteType = new GraphQLObjectType({
  name: 'SectionDelete',
  fields: () => ({
    deleted: {
      type: GraphQLBoolean
    },
    section: {
      type: SectionType
    }
  })
})

const {
  connectionType: SectionListConnection,
  edgeType: SectionListEdge
} = connectionDefinitions({
  name: 'SectionList',
  nodeType: SectionType,
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
  SectionListConnection,
  SectionType,
  SectionInputType,
  SectionResultType,
  SectionDeleteType
}
