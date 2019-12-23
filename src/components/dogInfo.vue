<template lang="html">
  <div class="dogInfo">
    <img :src=img class="dogImage">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
		img: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="css" scoped>
  .dogInfo{
    border: solid;
    margin: 10px;
    padding: 10px;
  }
  .dogImage{
    width: 200px;
  }
</style>
