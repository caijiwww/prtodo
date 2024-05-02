<script setup>
import { ref } from 'vue'
import ChildComp from './components/ChildComp.vue'
import Cong from './components/Cong.vue'


import ButtonCounterNew from './components/ButtonCounterNew.vue'



const childMsg = ref('No child msg yet')
const msg = ref('from parentdfgdfgdfg slot message')

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }







</script>

<template>
 
  <ButtonCounterNew /><br>

 
  <br>

  <ChildComp @response="(msg) => childMsg = msg">
    slotMessage: {{ msg }}
  </ChildComp>
  <br>
  <p>{{ childMsg }}</p>
  <br>

  <Cong />
</template>




<style scoped></style>
