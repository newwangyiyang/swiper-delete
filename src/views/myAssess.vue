<template>
  <div class="assess_wrap">
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
      <div class="submit_all_btn">
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
    return {};
  },
  computed: {
    ...mapState(["scoreAndSummaryList"])
  },
  methods: {
    ...mapMutations(["addNewContent"])
  },
  components: {
    fillAssess
  }
};
</script>

<style lang="less" scoped>
.assess_wrap {
  overflow: hidden;
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
