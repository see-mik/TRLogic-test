<template>
  <header class="n-navbar">
    <div class="container">
      <div class="inner">
        <router-link
           to="/"
           tag="a"
           class="n-navbar__logo"
        >CustomKeep
        </router-link>

        <nav class="n-navbar__list">
          <router-link
             to="/login"
             tag="li"
             class="n-navbar__list-item"
          >
            <a href="#" class="n-navbar__link">Login</a>
          </router-link>

          <router-link
             to="/registration"
             tag="li"
             class="n-navbar__list-item"
          >
            <a href="#" class="n-navbar__link">Registration</a>
          </router-link>

          <router-link
             tag="li"
             to="/create"
             class="n-navbar__list-item"
          >
            <a href="#" class="n-navbar__link">Create</a>
          </router-link>
          <router-link
             to="/"
             tag="li"
             class="n-navbar__list-item"
          >
            <a href="#" class="n-navbar__link">Home</a>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .n-navbar {
    background-color: cadetblue;
    width: 100%;

    &__logo {
      border-radius: 5px;
      padding: .2em .3em;
      font-family: $font_logo;
      font-weight: bold;
      font-size: 30px;
      color: #d9eeec;
      text-shadow: 0 2px 2px rgba(#543864, .6);
    }

    &__list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      list-style: none;
    }

    &__list-item {
      @include _slide-hover();

      padding: .2em 1.1em;
      margin-left: 1rem;

      &:first-child {
        margin-left: 0;
      }
    }

    &__link {
      font-size: 14px;
      color: #3c3c3c;
    }
  }
</style>