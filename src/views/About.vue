<template lang="html">
  <div class="container">
    <button class="button is-primary is-medium"
         style="margin-top: 20px;"
         @click="isCardModalActive = true">
         Launch card modal (keep scroll)
     </button>
    <profileDescription/>
    <dogs/>


    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="/static/img/placeholder-1280x960.png" alt="Image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="/static/img/placeholder-1280x960.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> <a>#responsive</a>
                    <br>
                    <small>11:09 PM - 1 Jan 2016</small>
                </div>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>
import profileDescription from '@/components/profileDescription.vue'
import dogs from '@/components/dogs.vue'
import modalComponent from '@/components/modalComponent.vue'

export default {
  components: {
    profileDescription,
    dogs,
    modalComponent
  },
  data() {
      return {
          isCardModalActive: false
      }
  }
}
</script>

<style lang="css" scoped>
</style>
