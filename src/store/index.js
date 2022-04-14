import { checkCompatEnabled } from '@vue/compiler-core';
import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [],
    adornos: [],
    nombre: "",
    telefono: "",
    correo: "",
    descripcion: "",
    totCho: 10,
    totVai: 10,
    totNar: 10,
    totZan: 10,
    totMar: 5,
    totBod: 5,
    totGok: 5,
    totVel: 5
  },
  getters: {
  },
  mutations: {
    checkVain: function(state) {
      if (state.sabores.includes("Vainilla"))
        state.totVai++;
      else
        state.totVai--;
    },
    checkChoc: function(state) {
      if (state.sabores.includes("Chocolate"))
        state.totCho++;
      else
        state.totCho--;
    },
    checkNara: function(state) {
      if (state.sabores.includes("Naranja"))
        state.totNar++;
      else
        state.totNar--;
    },
    checkZana: function(state) {
      if (state.sabores.includes("Zanahoria"))
        state.totZan++;
      else
        state.totZan--;
    },
    checkBoda: function(state) {
      if (state.adornos.includes("Pareja"))
        state.totBod++;
      else
        state.totBod--;
    },
    checkMario: function(state) {
      if (state.adornos.includes("MarioBros"))
        state.totMar++;
      else
        state.totMar--;
    },
    checkGoku: function(state) {
      if (state.adornos.includes("Goku"))
        state.totGok++;
      else
        state.totGok--;
    },
    checkVela: function(state) {
      if (state.adornos.includes("Vela de número"))
        state.totVel++;
      else
        state.totVel--;
    }
  },
  actions: {
  },
  modules: {
  }
})
