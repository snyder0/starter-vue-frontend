const mutations = {
    updateUserStore (data: any, payload: any) {
      // State mutations
      data.firstName = payload.firstName
      data.lastName = payload.lastName
      data.email = payload.email
      data.session = payload.session
      data.userID = payload._id
      data.loggedIn = true
    },
    clearUserStore (data: any) {
      // State mutations
      data.firstName = ''
      data.lastName = ''
      data.email = ''
      data.session = {}
      data.userID = null
      data.loggedIn = false
    }
  }
  
  export default mutations