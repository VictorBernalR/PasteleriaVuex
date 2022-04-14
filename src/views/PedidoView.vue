<template>
    <Header/>
    <DetallePedido/>
</template>
<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import DetallePedido from "../components/DetallePedido.vue";

export default {
  name: 'PedidoView',
  components: {
    Header,
    DetallePedido,
  }
}
</script>