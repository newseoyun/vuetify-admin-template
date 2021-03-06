const state = {
  drawer: true,
  gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  items: [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
    { title: 'Pages', icon: 'mdi-menu', items: [
      { title: 'Authentication', icon: 'mdi-login', items: [
        { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in' },
        { title: 'SignUp', icon: 'mdi-clipboard-account', to: '/authentication/sign-up' },
      ] },
      { title: 'ProductList', icon: 'mdi-clipboard-list-outline', to: '/page/product-list' },
    ] },
    { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system' },
    { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page' },
    { title: 'Breakpoints', icon: 'mdi-view-dashboard', to: '/breakpoints' },
    { title: 'Typography', icon: 'mdi-view-dashboard', to: '/typography' },
    { title: 'Tables', icon: 'mdi-chart-box-outline', items: [
      { title: 'Basic Table', icon: 'mdi-account-box-multiple', to: '/table/basic-table' },
      { title: 'App Table', icon: 'mdi-account-box-multiple', to: '/table/app-table' },
    ]},
    { title: 'Form', icon: 'mdi-account-box-multiple', items: [
      { title: 'Validation Form', icon: 'mdi-account-box-multiple', to: '/form/validation-form' },
      { title: 'App Form', icon: 'mdi-account-box-multiple', to: '/form/app-form' },
    ]},
    { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons' },
    { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons' },
  ],
}
const getters = {
  getDrawer: state => state.drawer
}
const mutations = {
  setDrawer(state, data) {
    state.drawer = data
  }
}
const actions = {
  toggleDrawer({ commit }, value) {
    commit('setDrawer', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
