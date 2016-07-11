
function pagination(res) {
    let nextPage = undefined
    if (res.data.page < res.data.pages) {
        nextPage = res.data.page + 1
    }
    // Return the pagination descriptor
    return {
        next: nextPage ? { page: nextPage } : undefined,
    }
}

function urlQuery(req) {
    return Object.assign({},
        req.filters,
        req.page,
        {
            ordering: req.sorting.map(field => {
                let prefix = field.sorted == 'ascending' ? '' : '-'
                return prefix + field.name
            }).join(',')
        }
    )
}

module.exports = [

    // USERS
    {
        id: 'users',
        url: 'users/',
        pagination,
        transform: { readResponseData: data => data.docs },
    },
    {
        id: 'user',
        url: 'users/:id/',
    },

    // SECTIONS
    {
        id: 'sections',
        url: 'sections/',
        urlQuery,
        pagination,
        transform: { readResponseData: data => data.docs },
    },
    {
        id: 'section',
        url: 'sections/:id/',
    },

    // CATEGORIES
    {
        id: 'categories',
        url: 'categories',
        urlQuery,
        pagination,
        enableDepagination: true,
        transform: { readResponseData: data => data.docs },
    },
    {
        id: 'category',
        url: 'categories/:id',
    },
    {
        id: 'allCategories',
        use: 'categories',
    },

    // TAGS
    {
        id: 'tags',
        url: 'tags/',
        urlQuery,
        pagination,
        transform: { readResponseData: data => data.docs },
    },
    {
        id: 'tag',
        url: 'tags/:id/',
    },

    // ENTRIES
    {
        id: 'entries',
        url: 'entries/',
        urlQuery,
        pagination,
        transform: { readResponseData: data => data.docs },
    },
    {
        id: 'entry',
        url: 'entries/:id/',
    },

    // ENTRIELINKS
    {
        id: 'links',
        url: 'entrylinks/',
        pagination,
        enableDepagination: true,
        transform: { readResponseData: data => data.docs },
    },
    {
        id: 'link',
        url: 'entrylinks/:id/',
    },

    // SPECIAL CONNECTORS

    // sections_options
    // a helper for retrieving the sections used with select fields
    {
        id: 'sections_options',
        url: 'sections/',
        transform: {
            readResponseData: data => ({
                options: data.docs.map(function(item) {
                    return { value: item.id, label: item.name }
                }),
            })
        },
    },

    // category_options
    // a helper for retrieving the categories used with select fields
    {
        id: 'categories_options',
        url: 'categories/',
        transform: {
            readResponseData: data => ({
                options: data.docs.map(function(item) {
                    return { value: item.id, label: item.name }
                }),
            })
        },
    },

    // tags_options
    // a helper for retrieving the tags used with select fields
    {
        id: 'tags_options',
        url: 'tags/',
        transform: {
            readResponseData: data => ({
                options: data.docs.map(function(item) {
                    return { value: item.id, label: item.name }
                }),
            })
        },
    },

    // AUTHENTICATION
    {
        id: 'login',
        url: 'login/',
        mapping: { read: 'post', },
        transform: {
            readResponseData: data => ({
                requestHeaders: { "Authorization": `Token ${data.token}` },
                authInfo: data,
            })
        }
    },

]