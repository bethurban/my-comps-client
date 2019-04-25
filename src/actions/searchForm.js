// * Action Creators **

export const updateSearchFormData = searchFormData => {
  return {
    type: 'UPDATED_DATA',
    searchFormData
  }
}

export const resetSearchForm = () => {
  return {
    type: 'RESET_SEARCH_FORM'
  }
}
