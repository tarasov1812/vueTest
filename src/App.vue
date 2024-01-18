<template>
<Navbar/>
<MyCanvas />
<Footer />
</template>

<script>
import MyCanvas from './components/MyCanvas.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    MyCanvas,
    Navbar,
    Footer,
  },
};
</script>

