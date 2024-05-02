<script setup>
import JSConfetti from 'js-confetti'

//emit('response', 'hello from childdfgdfgdf')

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
  /*
  confetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  })
  */

}

showConfetti()
</script>

<template>
  
  <!--slot><br>Congratulations content</slot-->
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
</template>