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
  </div>
</template>

<script>
  import { uid } from '../../utils/utils';

  export default {
    name: 'n-form-input',
    data: () => ({
      value: null,
      type: null,
      id: null
    }),
    props: {
      labelText: String,
      inputId: String,
      inputType: String,
      inputValue: String
    },
    created() {
      this.value = this.inputValue || null;
      this.type = this.inputType || 'text';
      this.id = this.inputId || (() => 'input' + uid())
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