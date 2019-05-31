import store from '@/stores/store'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const user = { state, actions, mutations, getters }

store.registerModule('user', user)

export default store.state.user