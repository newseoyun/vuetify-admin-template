<template>
  <v-list
    dense
    nav
    expand
  >
    <template v-for="(item, index) in items">
      <default-list-group
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <default-list-item
        v-else
        :key="`item-${index}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
import DefaultListGroup from './ListGroup'
import DefaultListItem from './ListItem'

export default {
  name: 'DefaultList',
  components: {
    DefaultListItem,
    DefaultListGroup,
  },
  props: {
    items: {
      type: Array,
      default: () =>  ([]),
    }
  }

}
</script>
<style lang="">

</style>
