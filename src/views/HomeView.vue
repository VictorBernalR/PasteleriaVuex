<template>
  <Header/>
  <Sabores/>
  <Adornos/>
  <Pedido/>
  <Contacto/>
  <Info/>
</template>
<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";
import Pedido from "../components/Pedido.vue";
import Contacto from "../components/Contacto.vue";
import Info from "../components/Info.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    Sabores,
    Adornos,
    Pedido,
    Contacto,
    Info,
  }
}
</script>
<style>
  .home{
    width: 900px;
  }

  .menu{
    width: 900px;
  }

  .menu table{
    width: 80%;
    margin: 0 auto;
  }

  .tituloTabla{
    background-color: darkblue; 
    font-weight: bold; 
    color: white
  }

  .datosPer{
    width: 900px;
  }

  .datosPer table{
    width: 80%;
    margin: 0 auto;
    border: solid;
    border-color: darkblue;
    border-width: 1px;
  }
  section{
    text-align: center;
  }

  section p{
    font-size: small;
  }
</style>