const actions = {
  updateUserStore ({commit, state} :any, data: any) {
    commit('updateUserStore', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      session: {},
      userID: data.userID,
      isAuthenticated: true
    })
  },
  clearUserStore ({commit, state} :any, data: any) {
    // Will re-work this to tie in with mutations
    commit('clearUserStore', {
      firstName: '',
      lastName: '',
      email: '',
      session: {},
      userID: '',
      isAuthenticated: false
    })
  }
}

export default actions