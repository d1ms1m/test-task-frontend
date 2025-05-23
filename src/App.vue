<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="user-items__container">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

      <div class="wrapper">
        <HelloWorld msg="You did it!"/>
      </div>
    </div>

    <div class="selected-items__container">
      <TheWelcome/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
}

.user-items__container {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .user-items__container {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .user-items__container .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
