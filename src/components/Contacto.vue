<template>
    <div class="datosPer">
    <h2>Llene su información de contacto</h2>
    <table>
      <tr>
        <td>
          Nombre
        </td>
        <td>
          <input type="text" placeholder="Capture su nombre" v-model="$store.state.nombre">
        </td>
      </tr> 
      <tr>
        <td>
          Teléfono
        </td>
        <td>
          <input type="text" placeholder="Capture su teléfono" v-model="$store.state.telefono">
        </td>
      </tr>
      <tr>
        <td>
          Correo electrónico
        </td>
        <td>
          <input type="text" placeholder="Capture su Correo electrónico" v-model="$store.state.correo">
        </td>
      </tr>
      <tr>
          <td>
              Descripción del pastel
          </td>
          <td>
              <input type="text" placeholder="Describa el pastel" v-model="$store.state.descripcion" >
          </td>
      </tr>
    </table>
    <br>

    <router-link to="/pedido"><button>Hacer pedido</button></router-link>
  </div>
</template>
<script>
export default {
  name: 'Contacto',
}
</script>