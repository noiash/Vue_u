<template>
  <div>CompositionFunctionTest</div>
  <div>
    <p>商品名:{{ item.name }}</p>
    <p>単価:{{ item.price }}</p>
    <p>合計: {{ totalPrice }}</p> 
    <div>数量</div>
    <button @click='decrement'>-</button>
    <button @click='increment'>+</button> 
  </div>
</template>

<script>
//モジュール化して切り離した（computed不要）↓

import { reactive } from 'vue'
import useCounter from '@/composables/useCounter'

//script内で合成関数を作成する場合

  export default {
   setup(){
    const item = reactive({
      name:'商品名',
      price: 100,
      amount: 0
    })

    const { increment,
            decrement, 
            totalPrice } = useCounter(item)

    return {
      item,
      increment,
      decrement,
      totalPrice
    }
   }
  }
</script>

<style>

</style>