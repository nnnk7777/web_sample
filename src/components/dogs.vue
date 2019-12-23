<template lang="html">
  <div class="container">
    <dogInfo
      v-for="dog in dogs"
      :img = dog.img_path
      :description = dog.description
    />
  </div>
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'

export default {
  data(){
    return{
      dogs: []
    }
  },
  components: {
    dogInfo
  },
  created(){
    this.$axios.get('https://nonaka.nkmr.io/api/get_dog_images.php')
          .then((response) => {
            this.dogs = response.data
          })
          .catch((reason) => {
            this.message = '取得に失敗しました';
          });
  }
}
</script>

<style lang="css" scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    width: 60vw;
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>
