<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedPost.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.thumbnailLink"
      >Thumbnail Link</AppControlInput
    >

    <AppControlInput v-model="editedPost.content" control-type="textarea"
      >Content</AppControlInput
    >

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>
<script>
import AppControlInput from '../UI/AppControlInput.vue'
import AppButton from '../UI/AppButton.vue'

export default {
  components: {
    AppControlInput,
    AppButton,
  },

  props: {
    post: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            content: '',
            thumbnailLink: '',
          },
    }
  },

  methods: {
    onSave() {
      console.log(this.editedPost)
    },

    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>
