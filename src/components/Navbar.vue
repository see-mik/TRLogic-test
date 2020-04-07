<template>
  <header>
    <div class="container">
      <div class="inner">
        <router-link to="/" tag="a" class="logo">
          CustomKeep
        </router-link>

        <nav>
          <router-link to="/" tag="li">
            <a href="#">Home</a>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "../assets/scss/mixins";

  header {
    background-color: cadetblue;
    width: 100%;

    .logo {
      border-radius: 5px;
      padding: .2em .3em;
      font-family: var(--logoFont);
      font-weight: bold;
      font-size: 30px;
      color: #d9eeec;
      text-shadow: 0 2px 2px rgba(#543864, .6);
    }

    nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      list-style: none;

      li {
        @include _slide-hover();

        padding: .2em 1.1em;
        margin-left: 1rem;

        &:first-child {
          margin-left: 0;
        }
      }

      a {
        font-size: 14px;
        color: #3c3c3c;
      }
    }
  }
</style>