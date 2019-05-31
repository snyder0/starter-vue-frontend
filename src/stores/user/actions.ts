'use strict'

const actions = {
  updateUserStore ({commit, state}, data) {
    commit('updateUserStore', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      session: {},
      userID: data.userID,
      loggedIn: true
    })
  },
  clearUserStore ({commit, state}, data) {
    // Will re-work this to tie in with mutations
    commit('clearUserStore', {
      firstName: '',
      lastName: '',
      email: '',
      session: {},
      userID: '',
      loggedIn: false
    })
  }
}

export default actions