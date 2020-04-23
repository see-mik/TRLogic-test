<template>
  <div class="n-registration__wrap">
    <form @submit.prevent="submitHandler" class="n-registration">
      <div class="n-registration__head">
        {{'Login to get more features'}}
      </div>
      <div class="n-registration__body">
        <n-form-input
           class="n-registration__input"
           labelText="Login"
           inputId="user-name"
           @onChange="loginHandler"
        />

        <n-form-input
           class="n-registration__input"
           labelText="Password"
           inputId="user-password"
           inputType="password"
           @onChange="passwordHandler"
        />

        <n-form-input
           class="n-registration__input"
           labelText="Repeat password"
           inputId="repeat-password"
           inputType="password"
           @onChange="repeatPasswordHandler"
        />
      </div>

      <button type="submit" class="n-registration__submit">submit</button>
    </form>
  </div>
</template>

<script>
  import nFormInput from './../components/features/n-form-input.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'n-registration',
    components: {
      nFormInput
    },
    data: () => ({
      login: null,
      password: null,
      repeatPassword: null
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
      },
      repeatPasswordHandler(repeatPassword) {
        this.repeatPassword = repeatPassword;
      }
    }
  }
</script>

<style lang="scss">
  .n-registration {
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