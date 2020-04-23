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
       v-model="value"
       :type="inputType"
       @change="onChangeHandler"
    />

    <span
       class="n-form-input__error"
       v-if="valid"
    >{{message}}
    </span>
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
      isInvalid: Boolean,
      validateMessage: String
    },
    data() {
      return {
        value: this.inputValue || null,
        type: this.inputType || 'text',
        id: this.inputId || (() => 'input' + uid()),
        valid: this.isInvalid || true,
        message: this.validateMessage|| ''
      }
    },
    methods: {
      onChangeHandler () {
        this.$emit('onChange', this.value);
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
  }
</style>