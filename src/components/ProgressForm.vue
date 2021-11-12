<template>
    <div class="min-h-full">
  <header class="pb-24 bg-blue-600">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="relative py-5 flex items-center justify-center lg:justify-between">
        <!-- Logo -->
        <div class="absolute left-0 flex-shrink-0 lg:static">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto" src="https://cdn.iconscout.com/icon/free/png-256/barbells-20-160914.png" alt="Workflow">
          </a>
        </div>
        <!-- Right section on desktop -->
        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
          <button type="button" class="flex-shrink-0 p-1 text-indigo-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <!-- Profile -->
          <div class="ml-4 relative flex-shrink-0">
            <div>
              <button type="button" class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://www.doyonutilities.com/wp-content/uploads/profile-icon.png" alt="">
              </button>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div class="flex-1 min-w-0 px-12 lg:hidden">
          <div class="max-w-xs w-full mx-auto">
            <label for="desktop-search" class="sr-only">Search</label>
            <div class="relative text-white focus-within:text-gray-600">
               </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block border-t border-white border-opacity-20 py-5">
        <div class="grid grid-cols-3 gap-8 items-center">
          <div class="col-span-2">
            <nav class="flex space-x-4">

            </nav>
          </div>
          <div>
            <div class="max-w-md w-full mx-auto">
              <label for="mobile-search" class="sr-only">Search</label>
              <div class="relative text-white focus-within:text-gray-600">
        
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <div class="z-20 fixed inset-0 bg-black bg-opacity-0" aria-hidden="true"></div>
    </div>
  </header>
  <main class="-mt-24 pb-8">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="sr-only">Page title</h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 class="sr-only" id="section-1-title">Section title</h2>
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <div class="p-6" >
                <!-- Code here below the chart visualization -->
                <bar v-if="loadchart===true" :exercise="exercise"/>
              </div>
            </div>
          </section>
        </div>
        <!-- Right column -->

       
        <div class="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 class="sr-only" id="section-2-title">Section title</h2>
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <div class="p-6">         
<div>
  <div class="flow-root mt-6">
    
    <ul role="list"  class="-my-5 divide-y divide-gray-200">
      <li class="py-4" v-for="exercise in exerciseList" :key="exercise.name">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" :src="exercise.icon" alt="">
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{exercise.name}}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{exercise.type}}
            </p>
          </div>
          <div >
            <a @click='showChart(exercise)' href="#" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
              Show chart
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="mt-6">
    <a href="#" class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      View all
    </a>
  </div>
</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"><span class="block sm:inline">&copy; 2021 Experior Workout Tracker Inc.</span> <span class="block sm:inline">All rights reserved.</span></div>
    </div>
  </footer>
</div>
</template>
<script>
import Bar from "./Bar.vue";

export default {
  name: "ProgressForm",
    components: {
    Bar
  },
  data() {
    return {
      exercise : "",
      loadchart : false,
     exerciseList : [
               {name : "Push Up",
        type : "CONCENTRIC",
        icon: "https://cdn-icons-png.flaticon.com/512/2548/2548530.png"},
                {name : "Squat",
        type : "ECCENTRIC",
        icon : "https://cdn-icons-png.flaticon.com/512/3043/3043290.png"},
          {name : "Plank",
        type : "ISOMETRIC",
        icon: "https://cdn-icons-png.flaticon.com/512/2647/2647657.png"}
     ],
    };
  },
  methods: {
   logHello(){
     console.log("hello!!!")
   },
   showChart(exercise){
       console.log(exercise)
        this.exercise = exercise.name
       this.loadchart=true
     //Code the function to show the chart
   }
  }
};

</script>