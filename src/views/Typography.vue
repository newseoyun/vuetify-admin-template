<template>
  <v-container>
    <v-card>
      <v-card-title>
        Typography
      </v-card-title>
      <v-container class="gray lighten-3">
        <v-card-text>
          <v-card class="pa-3 text-h2 primary lighten-3">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 secondary darken-3 error--text text--lighten-2">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 error">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 primary--text">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 secondary--text">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 error--text">
            컨텐츠
          </v-card>

          <v-card
            class="pa-3 d-none d-sm-block"
            outlined
          >
            <p class="text-h1">
              Heading 1
            </p>
            <p class="text-h2">
              Heading 2
            </p>
            <p class="text-h3 text-sm-subtitle-1">
              Heading 3
            </p>
            <p class="font-weight-black">
              font-weight-black
            </p>
            <p class="font-weight-thin">
              font-weight-thin
            </p>
            <p class="text-justify">
              Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.

              Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
            </p>
            <p class="text-right">
              Right aligned text on all viewport sizes.
            </p>
            <p class="text-center text-sm-left">
              Center aligned text on all viewport sizes.
            </p>
          </v-card>
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
