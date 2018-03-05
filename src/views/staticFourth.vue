<template>
  <div class="static_wrap">
      <div :class="['last_score', 'rubberBand', 'animated', {'notSub': lastScoreObj.notSub}]" v-if="lastScoreObj.lastScoreShow">
          <a href="javascript:;">剩{{lastScoreObj.lastScore}}分</a>
      </div>
      <ul class="static_son">
          <li>
              <p>市场服务(10分):</p>
              <p>积极主动为市场一线提供支持服务、无拖延与推诿现象;</p>
              <p class="end_pra">无客户投诉得10分；每出现一次客户服务投诉扣2分，出现紧急情况不及时上报处理、隐瞒实情扣10分。</p>
              <div>
                  <span>自评分</span>
                  <input type="tel" v-model.number="scoreOne">
              </div>
          </li>
          <li class="middle_box">
            <p>态度能力(20分): 每项5分</p>
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
              <p>学习与成长(10分):</p>
              <p>加强个人学习，不断提升业务技能和综合能力，并运用于工作中，积极主动改进工作，提高工作效率。</p>
              <p class="end_pra">出色：9--10分；基本满意：8--8.9分；一般：6--7.9分；有问题：4--5.9分；危险：2～3.9分。</p>
              <div>
                  <span>自评分</span>
                  <input type="tel" v-model.number="scoreTwo">
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
export default {
  name: "staticFourth",
  data() {
    return {
      scoreOne: "",
      scoreTwo: "",
      swiperOptionNav: {
        slidesPerView: 4
      },
      swiperOption: {},
      navData: ["执行力", "业务技能", "工作责任心", "纪律性"],
      itemData: [
        {
          p1: "积极主动、无条件的按时高质量的完成各项工作任务。 ",
          p2:
            "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
          score: ""
        },
        {
          p1:
            "掌握并熟练应用岗位所需专业知识和技能,以顺利开展工作、解决问题,并不断提升个人业务技能。",
          p2:
            "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
          score: ""
        },
        {
          p1: "勇于承担责任，踏实工作，一丝不苟，坚持原则。",
          p2:
            "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
          score: ""
        },
        {
          p1: "理解并遵守公司的各项规章制度以及领导的指示、命令。",
          p2:
            "评分标准：出色，无可挑剔(超群级)：4.6--5分；满意, 达标(优秀级)：4--4.5分；一般，有待改进（较好级)：3--3.9分；有问题,需加注意(较差级)：2--2.9分；危险,不合格(很差级)：0～1.9分。",
          score: ""
        }
      ],
      activeMyIndex: 0,
      allScore: 0,
      lastScoreObj: {
        lastScoreShow: 0,
        lastScore: 40,
        notSub: 0
      }
    };
  },
  computed: {
    swiper1() {
      return this.$refs.mySwiperNav.swiper;
    },
    swiper2() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  updated() {
    let midleS = 0;
    this.itemData.forEach((v, i) => {
      midleS += +v.score;
    });
    this.allScore = +this.scoreOne + +this.scoreTwo + +midleS;
    this.lastScoreObj.lastScoreShow = 1;
    this.lastScoreObj.lastScore = 40 - this.allScore;
    this.lastScoreObj.notSub = this.allScore >= 40 ? 1 : 0;
  },
  methods: {
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
      if (!this.scoreOne) {
        Toast("您还未对服务市场板块进行打分");
      } else if (!flag) {
        Toast("您还未对态度能力板块进行打分");
      } else if (!this.scoreTwo) {
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
  font-size: 26px;
  .last_score {
    position: fixed;
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
