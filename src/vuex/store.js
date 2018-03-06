import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scoreAndSummaryList: [{
      score: "",
      summary: "",
      _id: Math.random()
    }],
    sixthAndFourthScore: 0,
    //40分逻辑
    navData: ["执行力", "业务技能", "工作责任心", "纪律性"],
    itemData: [{
        p1: "积极主动、无条件的按时高质量的完成各项工作任务。 ",
        p2: "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
        score: ""
      },
      {
        p1: "掌握并熟练应用岗位所需专业知识和技能,以顺利开展工作、解决问题,并不断提升个人业务技能。",
        p2: "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
        score: ""
      },
      {
        p1: "勇于承担责任，踏实工作，一丝不苟，坚持原则。",
        p2: "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
        score: ""
      },
      {
        p1: "理解并遵守公司的各项规章制度以及领导的指示、命令。",
        p2: "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
        score: ""
      }
    ],
    fourthScore: 0
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
    },
    getHadSixthScore(state, allScore) {
      let allS = 0;
      state.scoreAndSummaryList.forEach((v, i) => {
        allS += +v.score;
      });
      state.sixthAndFourthScore = allScore - allS;
    },
    getHadFourthScore(state, obj) {
      let allS = 0;
      state.itemData.forEach((v, i) => {
        allS += +v.score;
      });
      state.fourthScore = obj.s - allS - obj.a - obj.b;
    }
  }
});
