<template>
    <div class="menu">
        <table>
            <tr class="tituloTabla">
                <td>
                    Adorno
                </td>
                <td>
                    Cantidad
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                Pareja (boda)
                </td>
                <td style="text-align: right;">
                {{ $store.state.totBod }}
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Mario Bros
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totMar }}
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Goku
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totGok }}
                </td>
            </tr>
            <tr>
                <td style="text-align: left;">
                    Vela de número
                </td>
                <td style="text-align: right;">
                    {{ $store.state.totVel }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  name: 'AdornosAdmin',
}
</script>