// * Action Creators **

export const updateHomeFormData = homeFormData => {
  return {
    type: 'UPDATED_DATA',
    homeFormData
  }
}

export const resetHomeForm = () => {
  return {
    type: 'RESET_HOME_FORM'
  }
}
