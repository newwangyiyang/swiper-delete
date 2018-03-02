import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scoreAndSummaryList: [{
      score: "",
      summary: "",
      _id: Math.random()
    }]
  },
  mutations: {
    addNewContent(state) {
      state.scoreAndSummaryList.push({
        score: "",
        summary: "",
        _id: Math.random()
      });
    },
    deleteArrIndex(state, index) {
      state.scoreAndSummaryList.splice(index, 1);
    }
  }
});
