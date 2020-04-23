<template>
  <div class="n-registration__wrap">
    <form
       @submit.prevent="submitHandler"
       class="n-registration"
    >
      <div class="n-registration__head">
        {{'Login to get more features'}}
      </div>
      <div class="n-registration__body">
        <n-form-input
           class="n-registration__input"
           labelText="Email"
           inputId="user-name"
           @onChange="emailHandler"
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

      <button
         type="submit"
         class="n-registration__submit"
      >{{'Submit'}}
      </button>
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
      email: null,
      password: null,
      repeatPassword: null,
      isEmailValid: false,
      isPasswordValid: false
    }),
    methods: {
      ...mapActions([]),

      submitHandler() {
        console.log({
          l: this.email,
          p: this.password,
          c: this.repeatPassword
        });
      },
      emailHandler(email) {
        this.email = email;
      },
      passwordHandler(password) {
        this.password = password;
      },
      repeatPasswordHandler(repeatPassword) {
        this.repeatPassword = repeatPassword;
      }
    },
    watch: {
      email(newEmail, oldEmail) {
        const emailMask = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (newEmail.match(emailMask)) {
          this.isEmailValid = true;
          console.log(newEmail);
        }else {
          this.isEmailValid = false;
          console.log('false');
        }
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