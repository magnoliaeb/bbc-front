<template>
  <div class="">
    <client-only>
      <sweet-modal icon="success" ref="successModal">{{ msg }}</sweet-modal>
      <sweet-modal icon="error" ref="errorModal">{{ msg }}</sweet-modal>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: null,
    };
  },
  mounted() {
    this.$nuxt.$on("success-notify", (text) => {
      if (
        this.$refs.errorModal != undefined &&
        this.$refs.errorModal != undefined
      ) {
        this.msg = text;
        this.$refs.errorModal.close();
        this.$refs.successModal.open();
        setTimeout(() => {
          if (this.$refs.successModal != undefined) {
            this.$refs.successModal.close();
          }
        }, 2000);
      }
    });

    this.$nuxt.$on("error-notify", (text) => {
      if (
        this.$refs.errorModal != undefined &&
        this.$refs.errorModal != undefined
      ) {
        this.msg = text;
        this.$refs.successModal.close();
        this.$refs.errorModal.open();
        setTimeout(() => {
          if (this.$refs.errorModal != undefined) {
            this.$refs.errorModal.close();
          }
        }, 2000);
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
