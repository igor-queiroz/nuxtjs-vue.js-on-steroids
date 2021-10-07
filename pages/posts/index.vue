<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '../../components/posts/PostList.vue'

export default {
  components: {
    PostList,
  },
}
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
