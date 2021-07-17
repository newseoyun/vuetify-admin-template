<template>
  <v-container fluid>
    <v-card class="mt-5">
      <v-card-text>
        {{ customValue }}
        <AppTextField
          v-model="customValue"
          label="이름"
          placeholder="여기에 입력해주세요"
          :counter="20"
        />
        <AppTextField
          v-model="customValue"
          label="나이"
          placeholder="여기에 입력해주세요"
          :counter="20"
        />
        <AppTextField
          v-model="customValue"
          label="닉네임"
          placeholder="여기에 입력해주세요"
          :counter="20"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import AppTextField from '@/components/app/TextField'

export default {
  components: {
    AppTextField,
  },
  data: () => ({
    customValue: null,
  }),
}
</script>
<style lang="">

</style>
