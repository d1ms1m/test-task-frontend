<template>
  <div class="item">
    <div class="details">
      <slot name="name">
        {{ item.name }}
      </slot>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Item} from "@/interfaces/items";
import {PropType} from "vue";

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.item {
  width: fit-content;
  height: fit-content;
  display: flex;
  position: relative;

  border: 1px solid var(--color-border);
  border-radius: var(--item-border-radius);
  padding: 0.4rem;

  &:hover {
    border-color: var(--color-border-hover);
    background-color: var(--color-border-hover);
    cursor: pointer;
  }
}

.details {
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-heading);
}

//@media (min-width: 1024px) {
//  .item {
//    margin-top: 0;
//  }
//}
</style>
