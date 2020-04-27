/* Common options for Login & Registration forms */

import nFormInput from './../components/features/n-form-input.vue';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';


export default {
  components: {
    nFormInput
  },
  data: () => ({
    login: null,
    password: null,
    repeatPassword: null,
    errorMessage: {
      login: null,
      password: null,
      repeatPassword: null
    }
  }),
  methods: {
    loginHandler(login) {
      this.login = login;
    },
    passwordHandler(password) {
      this.password = password;
    },
    repeatPasswordHandler(repeatPassword) {
      this.repeatPassword = repeatPassword;
    }
  },
  watch: {
    login(login) {
      this.login = login;

      if (!this.$v.login.required) {
        this.errorMessage.login = 'Please enter your email';
      } else if (!this.$v.login.email) {
        this.errorMessage.login = 'Please enter a valid email address';
      }
    },

    password(password) {
      this.password = password;

      if (!this.$v.password.required) {
        this.errorMessage.password = 'Please enter your password';
      } else if (!this.$v.login.minLength) {
        this.errorMessage.password = 'Password should be at least 8 symbols';
      }
    },

    repeatPassword(repeatPassword) {
      this.repeatPassword = repeatPassword;

      if (!this.$v.repeatPassword.sameAsPassword) {
        this.errorMessage.repeatPassword = `Passwords doesn't match`;
      }
    }
  },
  validations: {
    login: {
      required, email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  }
}