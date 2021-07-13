<template>
  <v-list-group
    :prepend-icon="item.icon"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>

    <template v-for="(child, index) in item.items">
      <DefaultListGroup
        v-if="child.items"
        :key="`sub-group-${index}`"
        :item="child"
      />
      <DefaultListItem
        v-else
        :key="`child-${index}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>
<script>
export default {
  name: 'DefaultListGroup',
  components: {
    DefaultListItem: () => import(
      /* webpackChunkName: "default-list-item" */
      './ListItem'
    ),
    DefaultListGroup: () => import(
      /* webpackChunkName: "default-list-group" */
      './ListGroup'
    ),
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>
