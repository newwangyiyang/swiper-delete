<template>
  <div class="fill_lis">
      <div class="fill_body" v-if="!hadSumTrue">
          <textarea v-model.trim="sumText" placeholder="~请填写您本月的工作总结" rows="6"></textarea>
      </div>
      <div class="fill_bot" v-if="!hadSumTrue">
          <div class="fill_num">
              <input type="tel" v-model.trim="sumScore">
              <span>请对该项填写您的评分</span>
          </div>
          <a href="javascript:;" @click="submitConten(index)">保存</a>
      </div>
      <leftDeleteCom v-if="hadSumTrue" :index="index">
          <div class="sum_show" :class="['bounce', {'animated': hadSumTrue}]">
                <p>第 {{index+1}} 条</p>
                <p>{{tempData.summary}}</p>
                <div class="sum_bom">
                    <span>{{tempData.score}}</span>
                    <a href="javascript:;" @click="reEdit">重新编辑</a>
                </div>
            </div>
      </leftDeleteCom>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import {mapState} from 'vuex';
import leftDeleteCom from "./leftDeleteCom";
export default {
  name: "fillAssess",
  data() {
    return {
      hadSumTrue: 0,
      tempData: {},
      sumText: '',
      sumScore: '',
    };
  },
  computed: {
    ...mapState(['scoreAndSummaryList'])
  },
  props: ["index", "indexData"],
  mounted() {
    this.tempData = this.indexData;
  },
  watch: {
    sumText(nv) {
      let obj = this.tempData;
      obj.summary = nv;
      this.tempData = obj;
      this.$set(this.scoreAndSummaryList, this.index, obj);
    },
    sumScore(nv) {
      let obj = this.tempData;
      obj.score = nv;
      this.tempData = obj;
      this.$set(this.scoreAndSummaryList, this.index, obj);
    }
  },
  methods: {
    submitConten(index) {
      if (!this.tempData.summary) {
        Toast({
          message: "请填写您本月的工作总结",
          duration: 50000
        });
      } else if (!this.tempData.score) {
        Toast("请对该项填写您的评分");
      } else {
        this.hadSumTrue = 1;
      }
    },
    reEdit() {
      this.hadSumTrue = false;
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
