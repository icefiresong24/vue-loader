<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>
      {{ message + 2 }}
    </div>
    <button @click="add(2)">加2</button>
    <button @click="test">减2</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 1,
    };
  },
  mounted() {},
  methods: {
    add: function (val) {
      this.message += val;
    },
    test: function (val) {
      this.message -= 2;
    },
  },
};
</script>
<style scoped></style>
