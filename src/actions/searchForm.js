// * Action Creators **

export const updateSearchFormData = searchFormData => {
  return {
    type: 'UPDATED_FORM',
    searchFormData
  }
}

export const resetSearchForm = () => {
  return {
    type: 'RESET_SEARCH_FORM'
  }
}
