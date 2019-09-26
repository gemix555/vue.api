<template>

  <div class="row">
      <item  class="col-3  m-2"
      v-for="character in characters"
       :key="character.id"
       :character="character"
      />
  </div>

</template>

<script>
import Item from '@/components/CharacterItem'
import Profile from '@/components/Profile'

export default {
  name: 'characters-list',
  props: ['characters'],
  components:{
      Item, Profile
  }
  
}
</script>