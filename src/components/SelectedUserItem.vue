<template>
  <div class="selected-item__wrapper">
    <div class="selection__container">
      <user-item v-if="hasSelectedItem" :item="item"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Item} from "@/interfaces/items";
import UserItem from "@/components/UserItem.vue";
import {computed} from "vue";

const props = withDefaults(defineProps<{
  item: Item,
}>(), {
  item: () => ({}),
})

const hasSelectedItem = computed(() => props.item !== null && Object.keys(props.item).length)
</script>

<style lang="scss" scoped>
.selected-item__wrapper {
  width: 400px;

  .selection__container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-border);
    padding: 0.4rem;
  }
}
</style>
