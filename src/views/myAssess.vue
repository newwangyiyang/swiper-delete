<template>
  <div class="assess_wrap">
      <div class="fill_tit">
          <span>填写您的工作总结</span>
          <span @click="addNewContent">再添加一条</span>
      </div>
      <fillAssess v-for="(item, index) in scoreAndSummaryList" v-if="item" :key="item._id" :index="index" :indexData.sync="item"/>
      <div class="submit_all_btn">
          <a href="javascript:;">提交全部</a>
      </div>
  </div>
</template>

<script>
import fillAssess from "../components/fillAssess";
import { Toast } from "mint-ui";
import {mapState, mapMutations} from 'vuex';
export default {
  name: "myAssess",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(['scoreAndSummaryList'])
  },
  methods: {
    ...mapMutations(['addNewContent'])
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
}
</style>
