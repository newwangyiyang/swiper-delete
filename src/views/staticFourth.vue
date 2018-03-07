<template>
  <div class="static_wrap">
      <countScore :allScore="fourthScore" :notSub="notSub" :lastScoreShow="lastScoreShow" />
      <ul class="static_son">
          <li>
              <p>市场服务(权重10分):</p>
              <p>积极主动为市场一线提供支持服务、无拖延与推诿现象;</p>
              <p class="end_pra">无客户投诉得10分；每出现一次客户服务投诉扣2分，出现紧急情况不及时上报处理、隐瞒实情扣10分。</p>
              <div>
                  <span>自评分</span>
                  <input type="tel" v-model.number="oneSObj.score">
              </div>
          </li>
          <li class="middle_box">
            <p>态度能力(20分): 每项权重5分</p>
            <swiper :options="swiperOptionNav" ref="mySwiperNav" class="nav_box">
                <!-- slides -->
                <swiper-slide @click.native="goNav(index)" :class="{'active': index === activeMyIndex}" v-for="(item, index) in navData" :key="index">{{item}}</swiper-slide>
            </swiper>
            <swiper :options="swiperOption" ref="mySwiper" class="item_box" @slideChangeTransitionEnd="goItem()">
                <swiper-slide v-for="(item ,index) in itemData" :key="index">
                    <p>{{item.p1}}</p>
                    <p class="end_pra">{{item.p2}}</p>
                    <div class="fill_box">
                        <span>自评分</span>
                        <input type="tel" v-model.number="item.score">
                    </div>
                </swiper-slide>
            </swiper>
          </li>
          <li>
              <p>学习与成长(权重10分):</p>
              <p>加强个人学习，不断提升业务技能和综合能力，并运用于工作中，积极主动改进工作，提高工作效率。</p>
              <p class="end_pra">出色：9--10分；基本满意：8--8.9分；一般：6--7.9分；有问题：4--5.9分；危险：2～3.9分。</p>
              <div>
                  <span>自评分</span>
                  <input type="tel" v-model.number="threeSObj.score">
              </div>
          </li>
      </ul>
      <div class="submit_all_btn">
          <a href="javascript:;" @click="submitAll">提交全部</a>
          <p>*提示: 该项目总分不能超过40分</p>
      </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { Toast } from "mint-ui";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import countScore from '../components/countScore';
import {mapState, mapMutations} from 'vuex';
export default {
  name: "staticFourth",
  data() {
    return {
      swiperOptionNav: {
        slidesPerView: 4
      },
      swiperOption: {},
      activeMyIndex: 0,

      notSub: 0,
      lastScoreShow: 0
    };
  },
  computed: {
    swiper1() {
      return this.$refs.mySwiperNav.swiper;
    },
    swiper2() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState(['oneSObj', 'threeSObj', 'navData', 'itemData', 'fourthScore'])
  },
  components: {
    swiper,
    swiperSlide,
    countScore
  },
  updated() {
    this.getHadFourthScore(40);
  },
  watch: {
    fourthScore(nv) {
      this.notSub = nv < 0 ? 1 : 0;
      this.lastScoreShow = 1;
    }
  },
  methods: {
    ...mapMutations(['getHadFourthScore']),
    goNav(index) {
      this.activeMyIndex = index;
      this.swiper2.slideTo(index);
    },
    goItem() {
      this.activeMyIndex = this.swiper2.activeIndex;
    },
    submitAll() {
      let flag = 1;
      this.itemData.forEach((v, i) => {
        flag = !v.score ? 0 : 1;
      });
      if (!this.scoreOneOwn) {
        Toast("您还未对服务市场板块进行打分");
      } else if (!flag) {
        Toast("您还未对态度能力板块进行打分");
      } else if (!this.scoreTwoOwn) {
        Toast("您还未对学习与成长板块进行打分");
      } else {
        console.log(this.allScore);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.static_wrap {
  min-height: 100vh;
  background-color: #f0f0f0;
  .static_son {
    li {
      padding: 25px;
      background-color: #fff;
      margin-top: 20px;
      &.middle_box {
        > .nav_box {
          height: 90px;
          line-height: 90px;
          font-size: 30px;
          text-align: center;
          display: flex;
          .active {
            background-color: #39b2ff;
            color: #fff;
          }
        }
        > .item_box {
          height: auto;
          p {
            text-indent: 2em;
            font-size: 28px;
            border-bottom: 1px solid #39b2ff;
            line-height: 50px;
            &.end_pra {
              color: #666;
              text-indent: 0;
              font-size: 26px;
              display: flex;
              flex-direction: column;
              padding-left: 60px;
            }
          }
          .fill_box {
            display: flex;
            justify-content: flex-end;
            height: 80px;
            align-items: center;
            > span {
              font-size: 28px;
              padding-right: 10px;
            }
            > input {
              background-color: #f0f0f0;
              height: 60px;
              width: 100px;
              text-align: center;
              border-radius: 10px;
              font-size: 28px;
            }
          }
        }
      }
      > p {
        line-height: 50px;
        border-bottom: 1px solid #39b2ff;
        font-size: 28px;
        &:first-of-type {
          font-size: 30px;
        }
        &:nth-of-type(2) {
          text-indent: 2em;
        }
        &.end_pra {
          color: #666;
          font-size: 26px;
          display: flex;
          flex-direction: column;
          padding-left: 60px;
          > span {
            font-size: 28px;
          }
        }
      }
      > div {
        display: flex;
        justify-content: flex-end;
        height: 80px;
        align-items: center;
        > span {
          font-size: 28px;
          padding-right: 10px;
        }
        > input {
          background-color: #f0f0f0;
          height: 60px;
          width: 100px;
          text-align: center;
          border-radius: 10px;
          font-size: 26px;
        }
      }
    }
  }
  .submit_all_btn {
    padding: 60px 0;
    text-align: center;
    line-height: 90px;
    position: relative;
    > a {
      color: #fff;
      font-size: 30px;
      width: 80vw;
      height: 90px;
      background-color: #39b2ff;
      display: block;
      margin: 0 auto;
      border-radius: 20px;
    }
    > p {
      position: absolute;
      right: 90px;
      top: 10px;
      line-height: 40px;
      font-size: 26px;
      text-align: right;
      color: #de5246;
    }
  }
}
</style>
