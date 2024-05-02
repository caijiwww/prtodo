<script setup>
import { ref } from 'vue'
import ChildComp from './components/ChildComp.vue'
import Cong from './components/Cong.vue'

import ButtonCounter from './components/ButtonCounter.vue'
import ButtonSlot from './components/ButtonSlot.vue'

//import ButtonCounterJs from './ButtonCounter.js'
//ButtonCounterJs 无效的问题

const childMsg = ref('No child msg yet')
const msg = ref('from parentdfgdfgdfg slot message')

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }




import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
 from '@fortawesome/vue-fontawesome'
 
library.add(fas, far, fab)
 
//Vue.component('font-awesome-icon', FontAwesomeIcon)
//Vue.component('font-awesome-layers', FontAwesomeLayers)
//Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


</script>

<template>
  <font-awesome-icon icon="info" fixed-width /> 
  <font-awesome-icon icon="hands-holding-child" fixed-width /> 

  <ButtonCounter /><br>
  <ButtonCounter title="fucked" /><br>

  <ButtonSlot> 
    <font-awesome-icon icon="child" fixed-width /> 
    <span style="color:red">Click me!</span>
  </ButtonSlot>
  
  <br>

  <ChildComp @response="(msg) => childMsg = msg">
    slotMessage: {{ msg }}
  </ChildComp>
  <br>
  <p>{{ childMsg }}</p>

  <Cong />
</template>




<style scoped></style>
