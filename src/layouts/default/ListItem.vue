<template>
  <v-list-item
    link
    class="py-1"
    :to="item.to"
    active-class="primary"
  >
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: 'DefaultListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  }

}
</script>
<style lang="">

</style>
