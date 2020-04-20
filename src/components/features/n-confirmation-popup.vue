<template>
  <div
     class="n-confirmation-popup__wrap"
     ref="wrapper"
  >
    <div class="n-confirmation-popup">
      <div class="n-confirmation-popup__head">
        <slot>Are you sure ?</slot>
      </div>
      <div class="n-confirmation-popup__footer">
        <button
           class="n-confirmation-popup__apply"
           @click="applyHandler"
        >{{applyBtnText}}
        </button>
        <button
           class="n-confirmation-popup__cancel"
           @click="cancelHandler"
        >Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'n-confirmation-popup',
    data: () => ({}),
    props: {
      applyBtnText: {
        type: String,
        default: () => 'Apply'
      }
    },
    methods: {
      applyHandler() {
        this.$emit('onConfirmationApply')
      },
      cancelHandler() {
        this.$emit('onConfirmationCancel');
      }
    },
    mounted() {
      const vm = this;
      document.addEventListener('click', function ({target}) {
        if (target === vm.$refs['wrapper']) {
          vm.cancelHandler();
        }
      })
    }
  }
</script>

<style lang="scss">
  .n-confirmation-popup {
    background-color: #fff;
    flex-basis: 200px;
    display: flex;
    flex-direction: column;
    padding: $padding*4 $padding*3;
    border-radius: $radius;

    &__wrap {
      background-color: rgba(0, 0, 0, .4);
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
    }

    &__head {
      margin-bottom: $margin*3;
    }

    &__footer {
      display: flex;
      justify-content: flex-end;

      button {
        color: #fff;
        cursor: pointer;
        padding: $padding $padding*2;
        margin-left: $margin*2;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    &__apply {
      @include _slide-hover($success, $dark: true);
    }

    &__cancel {
      @include _slide-hover($danger, $dark: true);
    }
  }
</style>