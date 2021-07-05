<template>
  <v-app>
    <v-main>
      <authentication-view />
    </v-main>
  </v-app>
</template>

<script>
import AuthenticationView from './View'

export default {
  name: 'AuthenticationLayout',
  components : {
    AuthenticationView,
  }
}
</script>
<style lang="">

</style>
