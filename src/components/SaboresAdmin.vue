<template>
    <div class="menu">
        <h2>Inventario de sabores</h2>
        <table>
            <tr class="tituloTabla">
                <td>
                    Sabor
                </td>
                <td>
                    Cantidad
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Vainilla
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totVai }}
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Chocolate
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totCho }}
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Naranja
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totNar }}
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Zanahoria
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totZan }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  name: 'SaboresAdmin',
}
</script>