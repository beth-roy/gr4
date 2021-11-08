<template>
<div>
 <MainFrame />
    <div>
    <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        HomePage
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    </div>
  </main>
</div>
</div>
</template>

<script>
import MainFrame from "../components/MainFrame.vue";



export default {
  name: "Home",
  components: {
   // AppMenu,
   MainFrame,


  },
  data() {
    return {
     
    };
  },
};
</script>
