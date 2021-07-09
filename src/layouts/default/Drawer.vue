<template lang="">
  <v-navigation-drawer
    v-bind="$attrs"
    app
    dark
    :src="require('@/assets/sidebar.jpg')"
  >
    <template
      v-slot:img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>
    <default-drawer-header />
    <v-divider />
    <default-list :items="items" />
  </v-navigation-drawer>
</template>
<script>
import DefaultDrawerHeader from './DrawerHeader'
import DefaultList from './List'

export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader,
    DefaultList,
  },
  data: () => ({
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
      { title: 'Tables', icon: 'mdi-chart-box-outline', to: '/tables' },
      { title: 'Form', icon: 'mdi-account-box-multiple', to: '/form' },
      { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons' },
    ],
  }),
}
</script>
<style lang="">

</style>
