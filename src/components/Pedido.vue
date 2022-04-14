<template>
    <div class="menu">
    <h2>Realice su pedido</h2>
    <table>
      <tr class="tituloTabla">
        <td>
          Sabores
        </td>
        <td>
          Adorno
        </td>
      </tr>
      <tr>
        <td style="text-align: left;">
          <input type="checkbox" @click="$store.commit('checkVain')" value="Vainilla" v-model="$store.state.sabores">Vainilla
          <br>
          <input type="checkbox" @click="$store.commit('checkChoc')" value="Chocolate" v-model="$store.state.sabores">Chocolate
          <br>
          <input type="checkbox" @click="$store.commit('checkNara')" value="Naranja" v-model="$store.state.sabores">Naranja
          <br>
          <input type="checkbox" @click="$store.commit('checkZana')" value="Zanahoria" v-model="$store.state.sabores">Zanahoria
        </td>
        <td style="text-align: left;">
          <input type="checkbox" @click="$store.commit('checkBoda')" value="Pareja" v-model="$store.state.adornos">Pareja (Boda)
          <br>
          <input type="checkbox" @click="$store.commit('checkMario')" value="MarioBros" v-model="$store.state.adornos">Mario Bros
          <br>
          <input type="checkbox" @click="$store.commit('checkGoku')" value="Goku" v-model="$store.state.adornos">Goku
          <br>
          <input type="checkbox" @click="$store.commit('checkVela')" value="Vela de número" v-model="$store.state.adornos">Vela de número
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Pedido',
}
</script>