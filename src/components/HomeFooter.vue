<template>
  <footer>
    <p>Develope by  <a href="mailto:filholouco@gmail.com">Jorge Madson</a></p>
  </footer>
</template>

<script>
export default {
    name: 'HomeFooter'
}
</script>

<style scoped>
footer {
  display: flex;
  align-content: center;
  justify-content: center;
}
@media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10) {
    footer {
    position: absolute;
    bottom: 0;
    }
}
</style>