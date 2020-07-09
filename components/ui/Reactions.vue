<template>
  <div class="flex items-center px-3 py-1 bg-teal-600 rounded-full select-none">
    <span class="text-xs font-black text-teal-200 transition">{{ likesCount }}</span>
    <icon name="thumb-up" class="inline w-5 mx-0.5 text-teal-50 transition" />
    <icon name="thumb-down" class="inline w-5 mx-0.5 text-teal-50 transition" />
    <span class="text-xs font-black text-teal-200 transition">{{ dislikesCount }}</span>
  </div>
</template>

<script>
export default {
  name: "Reactions",
  props: ["reactions"],
  computed: {
    likesCount() {
      const likes = this.reactions.find(r => r.reaction_type_id === 1);
      return (likes && likes.count) || 0;
    },
    dislikesCount() {
      const dislikes = this.reactions.find(r => r.reaction_type_id === 2);
      return (dislikes && dislikes.count) || 0;
    }
  }
};
</script>

<style>
</style>
