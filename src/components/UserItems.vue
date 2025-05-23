<template>
  <div class="user-items__wrapper">
    <div class="user-items__container">
      <user-item
          v-for="(item, index) in items"
          :item="item"
          :key="index"
          @click="onItemClick(index, item)"
      />
    </div>
    <div v-if="$slots.footer" class="user-items__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Item, ItemClickPayload} from "@/interfaces/items";
import UserItem from "@/components/UserItem.vue";

defineProps({
  items: {
    type: Array<Item>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'click', payload: ItemClickPayload): void,
}>()

function onItemClick(index: number, item: Item) {
  emit('click', {index, item})
}
</script>

<style lang="scss" scoped>
.user-items__wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--color-border);
  height: 100%;
}

.user-items__container {
  display: flex;
  justify-items: flex-start;
  gap: var(--items-gap);
  flex-wrap: wrap;
  padding-bottom: 20px;
}
.user-items__footer {
  justify-self: flex-end;
  //align-self: flex-end;
}
</style>
