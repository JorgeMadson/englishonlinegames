<template>
  <header>
    <div>
      <router-link :to="{ name: 'home' }">
        <h1
          style="text-transform: uppercase"
          title="The best place to practive your english"
        >
          English Online Games
        </h1>
      </router-link>
    </div>
    <nav>
      <router-link class="button" :to="{name: 'games'}">
        All games
      </router-link>
      <router-link class="button" :to="{ name: 'create_games' }">
        Create a game
      </router-link>
      <router-link class="button" :to="{ name: 'games' }">
        Play together
      </router-link>
      <button
        title="Dark mode"
        id="dark-switcher"
        class="dark-mode"
        onclick="darkMode()"
      >
        💡
      </button>
    </nav>
  </header>
</template>