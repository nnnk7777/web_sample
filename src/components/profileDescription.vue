<template lang="html">
  <div class="columns descriptionBox">
    <div class="column">
      <img
        class="image"
        src="http://nonaka.nkmr.io/IMAGES/azuma.jpg"
      >
    </div>

    <article class="message is-dark">
      <div class="message-body">
          <p>野中滉介</p>
          <br>
          <p>1997/07/01</p>
          <p>犬が好き</p>
          <p>音楽が好き</p>
      </div>
    </article>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .descriptionBox{
    width: 60vw;
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 30px;
  }
  .image {
    width: 200px;
    width: 200px;
    overflow: hidden;
  }
  .message {
    width: 40vw;
  }
</style>
