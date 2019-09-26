<template>
  <div>
      <div class="card">
        <router-link tag="a" :to="{name:'profile', params:{id: id }}">
          <img class="img-fluid" :src="character.image" alt="Card image cap">
        </router-link>
           <h3 class="card-title py-4 text-center">{{character.name}}</h3>
        <div class="card-body content">
            <div class="card-text uppercase">
              <span>status</span>
                <p>{{character.status}}</p>
            </div>
            <div class="card-text uppercase">
              <span>species</span>
                <p>{{character.species}}</p>
            </div>
            <div class="card-text uppercase">
              <span>gender</span>
                <p>{{character.gender}}</p>
            </div>
            <div class="card-text uppercase">
              <span>origin</span>
                <p>{{character.origin.name}}</p>
            </div>
            <div class="card-text uppercase">lasst location
                <p>{{character.location.name}}</p>
            </div>

          </div>
      </div>
  </div>

</template>

<script>
import Profile from '@/components/Profile'

export default {
  name: 'character-item',
  
  props: [
    'character'
  ],
  data() {
      return {
        id: this.character.id
      }
  },
  components: {
    Profile
  }
}
</script>

<style>
.uppercase {
  text-transform:uppercase;

}
.card-text {
  justify-content:space-between;
}
</style>