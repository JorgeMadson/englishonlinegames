<template>
    <div class="save-container">
        <button @click="greet({action: 'save'})" class="small button">💾</button>
    </div>
</template>

<script>
export default {
name: 'SaveButton'
}
</script>

<style scoped>
.save-container {
    display: grid;
    justify-items: end;
}
</style>