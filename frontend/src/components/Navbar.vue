<<template>
    <nav class="sticky bg-slate-800 mx-10 opacity-80 border-2 rounded-2xl shadow-md h-16 mb-8 shadow-slate-900 text-slate-100">
      <div class="ml-3 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Use RouterLink for each link with dynamic classes and cursor-pointer -->
                <RouterLink
                  to="/portfolio"
                  @click="setActive('portfolio')"
                  :class="buttonClasses('portfolio')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  aria-current="page">
                  Portfolio
                </RouterLink>
  
                <RouterLink
                  to="/stocks"
                  @click="setActive('stocks')"
                  :class="buttonClasses('stocks')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Stocks
                </RouterLink>
  
                <RouterLink
                  to="/sectors"
                  @click="setActive('sectors')"
                  :class="buttonClasses('sectors')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Sectors
                </RouterLink>
  
                <RouterLink
                  to="/calendar"
                  @click="setActive('calendar')"
                  :class="buttonClasses('calendar')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Calendar
                </RouterLink>
  
                <RouterLink
                  to="/login"
                  @click="setActive('login')"
                  :class="buttonClasses('login')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Login
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeButton: 'dashboard', // Default active button
      };
    },
    methods: {
      setActive(button) {
        this.activeButton = button;
      },
      buttonClasses(button) {
        return this.activeButton === button
          ? 'bg-slate-400 text-slate-800' // Active button styles
          : 'text-dark-text-secondary hover:bg-slate-400 hover:text-slate-800'; // Inactive button styles
      },
    },
  };
  </script>
  >