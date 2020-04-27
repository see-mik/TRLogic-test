<template>
  <div class="n-form-input">
    <label
       :for="inputId"
       v-if="labelText"
    >
      {{labelText}}
    </label>
    <input
       :id="inputId"
       v-model.trim="value"
       :type="inputType"
       @change="onChangeHandler"
    />

    <transition
       name="n-form-input__fade"
       v-on:before-enter="beforeEnter"
       v-on:enter="enter"
       v-on:leave="leave"
       v-bind:css="false"

    >
      <span
         class="n-form-input__error"
         v-if="invalid"
      >{{ errorMessage }}
      </span>
    </transition>
  </div>
</template>

<script>
  import { uid } from '../../utils/utils';

  export default {
    name: 'n-form-input',
    props: {
      labelText: String,
      inputId: String,
      inputType: String,
      inputValue: String,
      isInvalid: {
        type: Boolean,
        default: () => false
      },
      validateMessage: String
    },
    data() {
      return {
        value: this.inputValue || null,
        type: this.inputType || 'text',
        id: this.inputId || (() => 'input' + uid())
      }
    },
    computed: {
      invalid() {
        return this.isInvalid;
      },
      errorMessage() {
        return this.validateMessage;
      }
    },
    methods: {
      onChangeHandler () {
        this.$emit('onChange', this.value);
      },
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }
  }
</script>

<style lang="scss">
  .n-form-input {
    display: flex;
    flex-direction: column;

    input {
      @extend %input;
    }

    &__error {
      color: $danger;
      transition: all .5s;
    }

    &__fade-enter-active, &__fade-leave-active {
      transition: opacity .5s;
    }
    &__fade-enter, &__fade-leave-to {
      opacity: 0;
    }
  }
</style>