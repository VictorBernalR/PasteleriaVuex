<template>
    <Header/>
    <SaboresAdmin/>
    <AdornosAdmin/>
</template>
<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import SaboresAdmin from "../components/SaboresAdmin.vue";
import AdornosAdmin from "../components/AdornosAdmin.vue";

export default {
  name: 'AdministracionView',
  components: {
    Header,
    SaboresAdmin,
    AdornosAdmin,
  }
}
</script>