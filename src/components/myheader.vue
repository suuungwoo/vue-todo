<template>
  <div>ここは{{msg}}です</div>
</template>

<script>
export default {
  name: 'myheader',
  props: {
    msg: String,
  },
};
</script>
