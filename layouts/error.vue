<template>
  <div class="container">
    <section>
      <h1>Error 404</h1>
      <div>
        <button @click="$router.back()">Back</button>
        <nuxt-link to="/">Home</nuxt-link>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
}

h1 {
  font-size: 50px;
  color: #f00;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 350px;

  div {
    button {
      border: none;
      font-size: 20px;
      background: none;

      &:hover {
        background: #cbc7c7;
      }
    }

    a {
      margin-left: 10px;
      font-size: 20px;

      &:hover {
        background: #cbc7c7;
      }
    }
  }
}
</style>
