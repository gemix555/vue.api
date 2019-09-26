<template>
   <div class="card col-6"> 
         
          <img class="img" :src="character.image" alt="Card image cap">
           <h3 class="card-title py-4 text-center">{{character.name}}</h3>
        <div class="card-body" style="justify-content:space-between">
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
                 <p v-if="character && character.origin">
                  {{character.origin.name}}
                </p> 
               
            </div>
            <div class="card-text uppercase">
              <span>lasst location</span>          
                  <p v-if="character && character.location">
                    {{character.location.name}}
                    </p>               
                  
            </div>
            <router-link tag="a" class="btn btn-primary" to="/">Return Home</router-link>
          </div>
      
  </div>
</template>

<script>
import  * as  CharacterServices from '@/services/CharacterServices'

export default {
  name: 'profile',
  data() {
    return{
      character: {},
      name: ''
    }
    
  },
  created() {
    const {id} = this.$route.params;
    CharacterServices.fetchProfile(id).then((res) =>
    this.character = res.data
    );
  }
}
</script>
<style>
.uppercase {
  text-transform:uppercase;
}
</style>