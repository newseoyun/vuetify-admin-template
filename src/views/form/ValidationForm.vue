<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot=" { invalid }"
        >
          {{ invalid }}
          <v-form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="이름"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="10"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="전화번호"
              :rules="{
                required: true,
                numeric: true,
                digits: 11
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                label="PhoneNumber"
                :error-messages="errors"
                :counter="11"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="이메일"
              :rules="{
                required: true,
                email: true,
              }"
            >
              <v-text-field
                v-model="email"
                label="E-Mail"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="선택"
              :rules="{
                required: true,
              }"
            >
              <v-select
                v-model="select"
                label="Select"
                :items="items"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="체크"
              :rules="{
                required: true,
              }"
            >
              <v-checkbox
                v-model="checkbox"
                label="Checkbox"
                value="1"
                :error-messages="errors"
              />
            </validation-provider>
            <v-btn
              type="submit"
              class="mr-4"
              color="primary"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Forms',
  components: {

  },
  data: () => ({
    name: null,
    phoneNumber: null,
    email: null,
    select: null,
    checkbox: null,
    customValue: null,
    items: [
      {text: '아이템1', value: 1},
      {text: '아이템2', value: 2},
      {text: '아이템3', value: 3},
    ]
  }),
  methods: {
    submit() {
      this.$refs.observer.validate().then(result => {
        console.log('result: ', result)
        if(result) {
          alert('양식 제출')
        }
      })
    },
    clear() {
      this.name = null
      this.phoneNumber = null
      this.email = null
      this.select = null
      this.checkbox = null
    }
  },
}
</script>
<style lang="">

</style>
