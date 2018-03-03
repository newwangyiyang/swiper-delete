<template>
  <div class="assess_wrap">
    <div :class="['last_score', 'rubberBand', 'animated', {'notSub': lastScoreObj.notSub}]" v-if="lastScoreObj.lastScoreShow">
          <a href="javascript:;">剩{{lastScoreObj.lastScore}}分</a>
      </div>
      <div class="fill_tit">
          <span>填写您的工作总结</span>
          <span @click="addNewContent">再添加一条</span>
      </div>
      <fillAssess v-for="(item, index) in scoreAndSummaryList" v-if="item" :key="item._id" :index="index" :indexData.sync="item"/>
      <ul class="model_score">
          <li>评分等级：</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出色，按时高质完成工作，并主动改进工作：9--10分；</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;满意，按时按要求完成工作：8--8.9分；</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般，基本能按时完成工作，但有待改进，：6--7.9分；</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有问题,不能按时完成工作：4--5.9分；</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;危险,工作不胜任、不称职：2--3.9分。</li>

          <li>分值计算：</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本项标准分×评分等级÷10</li>
          <li>*该评分不能超过60分，否则无法提交</li>
      </ul>
      <div class="submit_all_btn" @click="fourBtn">
          <a href="javascript:;">提交全部</a>
      </div>
      
  </div>
</template>

<script>
import fillAssess from "../components/fillAssess";
import { Toast } from "mint-ui";
import { mapState, mapMutations } from "vuex";
export default {
  name: "myAssess",
  data() {
    return {
      lastScoreObj: {
        lastScoreShow: 0,
        lastScore: 60,
        notSub: 0
      },
      allScore: 0
    };
  },
  computed: {
    ...mapState(["scoreAndSummaryList"])
  },
  methods: {
    ...mapMutations(["addNewContent"]),
    fourBtn() {
      this.$router.push({name: 'staticFourth'});
    }
  },
  watch: {
    scoreAndSummaryList() {
      let allS = 0;
      this.scoreAndSummaryList.forEach((v, i) => {
        allS += +v.score;
      });
      this.allScore = allS;
      this.lastScoreObj.lastScoreShow = 1;
      this.lastScoreObj.lastScore = 60 - this.allScore;
      this.lastScoreObj.notSub = this.allScore >= 60 ? 1 : 0;
    }
  },
  components: {
    fillAssess
  }
};
</script>

<style lang="less" scoped>
.assess_wrap {
  overflow: hidden;
  .last_score {
    position: fixed;
    z-index: 999;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #39b2ff;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 30px;
    top: 30px;
    opacity: 0.7;
    a {
      color: #fff;
      font-size: 32px;
    }
    &.notSub {
      background-color: #e74c3c;
    }
  }
  > .fill_tit {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    > span {
      font-size: 28px;
      color: #666;
      padding: 0 20px;
      &:last-of-type {
        height: 100%;
        line-height: 80px;
        background-color: #39b2ff;
        color: #fff;
      }
    }
  }
  min-height: 100vh;
  background-color: #f0f0f0;
  .submit_all_btn {
    width: 80vw;
    height: 90px;
    background-color: #39b2ff;
    margin: 40px auto;
    text-align: center;
    line-height: 90px;
    border-radius: 20px;
    > a {
      color: #fff;
      font-size: 30px;
    }
  }
  .model_score {
    padding: 25px;
    display: flex;
    flex-direction: column;
    line-height: 50px;
    background-color: #fff;
    >li:first-of-type {
      font-size: 30px;
    }
    >li:last-nth-of(3) {
      font-size: 30px;
    }
    >li:last-of-type {
      color: #de5246;
      text-align: right;
    }
  }
}
</style>
