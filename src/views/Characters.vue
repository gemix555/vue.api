<template>
  <div>
        <characters-list :characters="characters"/> 
  </div>
</template>

<script>
import CharactersList from '@/components/CharactersList'
import  * as  CharacterServices from '@/services/CharacterServices'

export default {
  name: 'characters',
  components: {
  CharactersList,
  
  },
  data(){
    return {
      characters: [],
    }
  },
  created() {
    CharacterServices.fetchCharacters().then((response) => {
      this.characters = response.data.results;
    });
  }
}
</script>
