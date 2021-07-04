<template>
  <v-router-view />
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system' },
      { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page' },
      { title: 'Breakpoints', icon: 'mdi-view-dashboard', to: '/breakpoints' },
      { title: 'Typography', icon: 'mdi-view-dashboard', to: '/typography' },
      { title: 'Tables', icon: 'mdi-chart-box-outline', to: '/tables' },
      { title: 'Form', icon: 'mdi-account-box-multiple', to: '/form' },
      { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons' },
    ],
    right: null,
  }),
};
</script>
