<template>
  <div class="user-items-page__wrapper">
    <selected-user-items
        :items="selectedItems"
        @click="onItemRemove"
    >
      <template #footer>
        <span v-if="selectedItems.length">
          selected: {{ selectedItems.length }} / {{ SELECTION_ITEMS.length }}
        </span>
      </template>
    </selected-user-items>
    <selected-user-item
        class="selected-item"
        :item="selectedItem"
    />
    <user-items
        :items="SELECTION_ITEMS"
        @click="onItemsSelect"
    />
    <user-items
        :items="SELECTOR_ITEMS"
        @click="onItemSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import SelectedUserItems from "@/components/SelectedUserItems.vue";
import SelectedUserItem from "@/components/SelectedUserItem.vue";
import {ref} from "vue";
import {Item, ItemClickPayload} from "@/interfaces/items";
import UserItems from "@/components/UserItems.vue";

const SELECTION_ITEMS = [
  {
    "id": 1,
    "name": "Shoes 1"
  },
  {
    "id": 2,
    "name": "Shoes 2"
  },
  {
    "id": 3,
    "name": "Shoes 3"
  },
  {
    "id": 4,
    "name": "Shoes 4"
  },
  {
    "id": 5,
    "name": "T-shirt 1"
  },
  {
    "id": 6,
    "name": "T-shirt 2"
  },
  {
    "id": 7,
    "name": "T-shirt 3"
  },
  {
    "id": 8,
    "name": "T-shirt 4"
  }
]
const SELECTOR_ITEMS = [
  {
    "id": 11,
    "name": "Jacket 1"
  },
  {
    "id": 12,
    "name": "Jacket 2"
  },
  {
    "id": 13,
    "name": "Jacket 3"
  },
  {
    "id": 14,
    "name": "Jacket 4"
  },
  {
    "id": 15,
    "name": "Hoodie 1"
  },
  {
    "id": 16,
    "name": "Hoodie 2"
  },
  {
    "id": 17,
    "name": "Hoodie 3"
  },
  {
    "id": 18,
    "name": "Hoodie 4"
  }
]

const MAX_SELECTED_ITEMS = 6

const selectedItems = ref<Array<Item>>([])
const selectedItem = ref<Item | null>(null)

function onItemsSelect(e: ItemClickPayload) {
  if (selectedItems.value.length >= MAX_SELECTED_ITEMS) {
    selectedItems.value.shift()
  }
  selectedItems.value.push(e.item)
}

function onItemSelect(e: ItemClickPayload) {
  selectedItem.value = e.item
}

function onItemRemove(e: ItemClickPayload) {
  selectedItems.value.splice(e.index, 1)
}

</script>

<style lang="scss" scoped>
.user-items-page__wrapper {
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-template-rows: auto 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  padding: 0 2rem;

  .selected-item {
    justify-self: end;
  }

  ::v-deep(.selection__container) {
    min-height: 126px;
  }
}
</style>
