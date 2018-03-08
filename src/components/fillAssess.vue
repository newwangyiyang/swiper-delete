<template>
  <div class="fill_lis">
      <div class="fill_body" v-if="!scoreAndSummaryList[index].hadSumTrue">
          <textarea v-model.trim="scoreAndSummaryList[index].summary" placeholder="~请填写您本月的工作总结" rows="6"></textarea>
      </div>
      <div class="fill_bot" v-if="!scoreAndSummaryList[index].hadSumTrue">
          <div class="fill_num">
              <input type="tel" v-model.trim="scoreAndSummaryList[index].score">
              <span>权重</span>
          </div>
          <div class="fill_num">
              <input type="tel" v-model.trim="scoreAndSummaryList[index].scoreOwn">
              <span>自评分</span>
          </div>
          <a href="javascript:;" @click="submitConten(index)" :class="{'not_save': scoreBigOwn}">保存</a>
      </div>
      <leftDeleteCom v-if="scoreAndSummaryList[index].hadSumTrue" :index="index">
          <div class="sum_show" :class="['bounce', {'animated': scoreAndSummaryList[index].hadSumTrue}]">
                <p>第 {{index+1}} 条</p>
                <p>{{scoreAndSummaryList[index].summary}}</p>
                <div class="sum_bom">
                    <span>权重:{{scoreAndSummaryList[index].score}}</span>
                    <span>自评分:{{scoreAndSummaryList[index].scoreOwn}}</span>
                    <a href="javascript:;" @click="reEdit">重新编辑</a>
                </div>
            </div>
      </leftDeleteCom>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import {mapState, mapMutations} from 'vuex';
import leftDeleteCom from "./leftDeleteCom";
export default {
  name: "fillAssess",
  data() {
    return {
      scoreBigOwn: 0, //自评分大于权重
    };
  },
  computed: {
    ...mapState(['scoreAndSummaryList', 'nihao'])
  },
  props: ["index", "indexData"],
  updated() {
    let score = this.scoreAndSummaryList[this.index].score;
    let scoreOwn = this.scoreAndSummaryList[this.index].scoreOwn;
    this.scoreBigOwn = Number(score) >= Number(scoreOwn) ? 0 : 1;
    this.getHadSixthScore(60);
  },
  methods: {
    ...mapMutations(['getHadSixthScore']),
    submitConten(index) {
      if(this.scoreBigOwn) {
        Toast('自评分数不能大于权重分数');
      }else if (!this.scoreAndSummaryList[this.index].summary) {
        Toast('请填写您本月的工作总结');
      } else if (!this.scoreAndSummaryList[this.index].score) {
        Toast("请对该项填写您的评分");
      } else {
        this.scoreAndSummaryList[this.index].hadSumTrue = 1;
      }
    },
    reEdit() {
      console.log(11);
      this.scoreAndSummaryList[this.index].hadSumTrue = 0;
    }
  },
  components: {
    leftDeleteCom
  }
};
</script>

<style lang="less" scoped>
.fill_lis {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 20px;
  .fill_body {
    height: 200px;
    textarea {
      background-color: #ddf0ed;
      width: 100%;
      height: 100%;
      padding: 18px;
      font-size: 28px;
      color: #333;
    }
  }
  .fill_bot {
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    > .fill_num {
      padding-left: 20px;
      > input {
        width: 100px;
        background-color: #f0f0f0;
        height: 70px;
        border-radius: 10px;
        text-align: center;
        font-size: 28px;
      }
    }
    a {
      height: 100%;
      line-height: 80px;
      background-color: #39b2ff;
      color: #fff;
      padding: 0 40px;
      &.not_save {
        background-color: #95a5a6;
      }
    }
  }
  .sum_show {
    padding: 14px;
    > p {
      font-size: 28px;
      color: #333;
      margin-bottom: 30px;
    }
    .sum_bom {
      display: flex;
      justify-content: space-between;
      height: 60px;
      align-items: center;
      > span {
        font-size: 28px;
        color: #39b2ff;
        font-weight: 600;
      }
      > a {
        font-size: 28px;
      }
    }
  }
}


</style>
