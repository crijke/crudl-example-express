function getInfo(data) {
  const hasNext = data.pageInfo.hasNextPage
  const next = hasNext && {
    after: data.pageInfo.endCursor
  }
  return {
    type: 'continuous',
    next,
    resultsTotal: data.totalCount,
    filteredTotal: data.filteredCount
  }
}

export default function continuousPagination(first = 20) {
  return function continuousPaginationMiddleware(next) {
    return {
      read(req) {
        req.args = { first }
        return next.read(req).then(res => {
          if (res.pagination) {
            res.data.pagination = getInfo(res.pagination)
          }
          return res
        })
      }
    }
  }
}
