<template>
    <div>
        <Navbar />
        <main>
            <Welcome />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Welcome from '@/components/Welcome.vue';

export default {
    name: 'Main-Home',
    components: {
        Navbar,
        Welcome
    }
}
</script>

<style scoped>
/* Add any additional styling here */
</style>