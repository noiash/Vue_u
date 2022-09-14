<template>
  <div class="red-b">
    <div class="border__blud">
      SCSSのテストです
    </div>
    <div class="background__primary">
      SCSSのグローバルテストです
    </div>
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      testData: 'テストdataです'
    }
  }
}
</script>

<style scoped lang="scss">
.red-b {
  border: 1px red solid;
}

.border {
  &__blud {
    border: 1px blue solid;
  }
}

.background__primary {
  background-color: $color-primary;
}

</style>