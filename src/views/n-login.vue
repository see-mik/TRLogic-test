<template>
  <div class="n-login__wrap">
    <form @submit.prevent="submitHandler" class="n-login">
      <div class="n-login__head">
        {{'Login to get more features'}}
      </div>
      <div class="n-login__body">
        <n-form-input
           class="n-login__input"
           labelText="Login"
           inputId="user-name"
           @onChange="loginHandler"
        />

        <n-form-input
           class="n-login__input"
           labelText="Password"
           inputId="user-password"
           inputType="password"
           @onChange="passwordHandler"
        />
      </div>

      <div class="n-login__footer">
        <button type="submit" class="n-login__submit">submit</button>
        <router-link to="/registration" tag="a">Registration</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import nFormInput from './../components/features/n-form-input.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'n-login',
    components: {
      nFormInput
    },
    data: () => ({
      login: null,
      password: null
    }),
    methods: {
      ...mapActions([]),

      submitHandler() {
        console.log({
          l: this.login,
          p: this.password
        });
      },
      loginHandler(login) {
        this.login = login;
      },
      passwordHandler(password) {
        this.password = password;
      }
    }
  }
</script>

<style lang="scss">
  .n-login {
    @extend %form-basic;

    &__wrap {
      @extend %wrap-center;
    }

    &__head {
      font-size: 16px;
      margin-bottom: $margin *4;
    }

    &__input {
      width: 100%;
      margin-bottom: $margin *3;
    }

    &__submit {
      @extend %btn;
      @include _slide-hover($success);

      font-size: 14px;
      line-height: 1.1;
      color: #fff;
      text-transform: capitalize;
    }
  }
</style>