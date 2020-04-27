<template>
  <div class="n-registration__wrap">
    <form
       @submit.prevent="submitHandler"
       class="n-registration"
    >
      <div class="n-registration__head">
        {{'Registration'}}
      </div>
      <div class="n-registration__body">
        <n-form-input
           class="n-registration__input"
           labelText="Login"
           inputId="user-name"
           :inputValue="$v.login.$model"
           :isInvalid="$v.login.$invalid"
           :validateMessage="errorMessage.login"
           @onChange="loginHandler"
        />

        <n-form-input
           class="n-registration__input"
           labelText="Password"
           inputId="user-password"
           inputType="password"
           :inputValue="$v.password.$model"
           :isInvalid="$v.password.$invalid"
           :validateMessage="errorMessage.password"
           @onChange="passwordHandler"
        />

        <n-form-input
           class="n-registration__input"
           labelText="Repeat password"
           inputId="repeat-password"
           inputType="password"
           :inputValue="$v.repeatPassword.$model"
           :isInvalid="$v.repeatPassword.$invalid"
           :validateMessage="errorMessage.repeatPassword"
           @onChange="repeatPasswordHandler"
        />
      </div>

      <button
         class="n-registration__submit"
         type="submit"
         :disabled="$v.$invalid"
      >{{'Submit'}}
      </button>
    </form>
  </div>
</template>

<script>
  import loginRegistrationFormMixin from './../mixins/loginRegistrationForm.mixin';
  import { mapActions } from 'vuex';

  export default {
    name: 'n-registration',
    mixins: [loginRegistrationFormMixin],
    methods: {
      ...mapActions([]),

      submitHandler() {
        if (this.$v.$invalid) {
          return;
        }

        console.log({
          l: this.login,
          p: this.password,
          c: this.repeatPassword
        });
      }
    }
  }
</script>

<style lang="scss">
  .n-registration {
    @extend %form-basic;

    width: 100%;
    max-width: 400px;

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