<template>
  <user-items
      class="selection__container"
      :items="items"
      @click="onItemClick"
  >
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </user-items>
</template>

<script lang="ts" setup>

import {Item, ItemClickPayload} from "@/interfaces/items";
import UserItems from "@/components/UserItems.vue";

defineProps({
  items: {
    type: Array<Item>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'click', payload: ItemClickPayload): void,
}>()

function onItemClick(e: ItemClickPayload) {
  emit('click', e)
}
</script>

<style lang="scss" scoped>
.selection__container {
  //width: fit-content;
  width: 400px;
}

</style>
