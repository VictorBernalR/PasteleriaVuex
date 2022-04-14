<template>
    <div class="menu">
        <table>
            <tr class="tituloTabla">
                <td>
                    Dato
                </td>
                <td>
                    Detalle
                </td>
            </tr>
            <tr>
                <td>
                    Nombre
                </td>
                <td>
                    {{ $store.state.nombre }}
                </td>
            </tr>
            <tr>
                <td>
                    Teléfono
                </td>
                <td>
                    {{ $store.state.telefono }}
                </td>
            </tr>
            <tr>
                <td>
                    Correo
                </td>
                <td>
                    {{ $store.state.correo }}
                </td>
            </tr>
            <tr>
                <td>
                    Sabor(es)
                </td>
                <td>
                    {{ $store.state.sabores.join(', ') }}
                </td>
            </tr>
            <tr>
                <td>
                    Adorno(s)
                </td>
                <td>
                    {{ $store.state.adornos.join(', ') }}
                </td>
            </tr>
            <tr>
                <td>
                    Descripción del pastel
                </td>
                <td>
                    {{ $store.state.descripcion }}
                </td>
            </tr>
        </table>
    </div>
</template>