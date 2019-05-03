// * Action Creators **

export const updateLogin = login => {
  console.log(login)
  return {
    type: 'UPDATED_LOGIN',
    login
  }
}
