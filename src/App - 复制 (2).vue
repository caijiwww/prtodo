<script setup>
import { ref } from 'vue'
import ChildComp from './components/ChildComp.vue'
import Cong from './components/Cong.vue'
import JSConfetti from 'js-confetti'

const childMsg = ref('No child msg yet')
const msg = ref('from parentdfgdfgdfg')


const confetti = new JSConfetti()

function showConfetti() {
  //confetti.addConfetti()
  confetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  })
}
</script>

<template>
  <ChildComp @response="(msg) => childMsg = msg">
    slotMessage: {{ msg }}
  </ChildComp>
  <br>
  <p>{{ childMsg }}</p>
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
</template>




<style scoped></style>
