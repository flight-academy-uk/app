<script lang="ts">
  import { onMount } from "svelte";

  let is_dark = false;

  onMount(() => {
    is_dark = document.documentElement.classList.contains("dark");
  });

  const toggleTheme = () => {
    const toggle_theme = document.documentElement.classList.toggle("dark");
    const theme = toggle_theme ? "dark" : "light";

    is_dark = toggle_theme;

    localStorage.setItem("theme", theme);
  }
</script>

<label class="flex flex-col items-center p-2 cursor-pointer" >
  <input type="checkbox" value="" class="sr-only peer" on:input={toggleTheme} />
  <span class="text-sm mb-2 font-medium text-gray-900 dark:text-gray-300 "
    >{is_dark ? "Dark" : "Light"} Mode</span
  >
  <div class="relative w-14 h-7 bg-primary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-secondary-600"></div>
</label>