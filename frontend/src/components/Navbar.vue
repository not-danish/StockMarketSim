<<template>
    <nav class="bg-dark-secondary mx-10 opacity-80 border-2 border- rounded-2xl shadow-lg h-13 mb-8">
      <div class="ml-3 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Use RouterLink for each link with dynamic classes and cursor-pointer -->
                <RouterLink
                  to="/dashboard"
                  @click="setActive('dashboard')"
                  :class="buttonClasses('dashboard')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  aria-current="page">
                  Dashboard
                </RouterLink>
  
                <RouterLink
                  to="/team"
                  @click="setActive('team')"
                  :class="buttonClasses('team')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Team
                </RouterLink>
  
                <RouterLink
                  to="/projects"
                  @click="setActive('projects')"
                  :class="buttonClasses('projects')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Projects
                </RouterLink>
  
                <RouterLink
                  to="/calendar"
                  @click="setActive('calendar')"
                  :class="buttonClasses('calendar')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Calendar
                </RouterLink>
  
                <RouterLink
                  to="/stocks"
                  @click="setActive('stocks')"
                  :class="buttonClasses('stocks')"
                  class="rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                  Stocks
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
          ? 'bg-dark-accent text-dark-text' // Active button styles
          : 'text-dark-text-secondary hover:bg-dark-hover hover:text-dark-text'; // Inactive button styles
      },
    },
  };
  </script>
  >