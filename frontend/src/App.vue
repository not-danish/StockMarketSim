<script setup>
import { RouterLink, RouterView} from 'vue-router'
import Navbar from './components/Navbar.vue'
import 'animate.css'
</script>

<template>
  <div class="bg-dark-background min-h-screen">
    <header>
      <Navbar />
    </header>

    <main>
      <div class="mx-16">

        <RouterView/>

      </div>
    </main>
  </div>
</template>