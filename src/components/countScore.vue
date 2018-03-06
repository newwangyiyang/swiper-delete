<template>
    <div :class="['last_score', 'rubberBand', 'animated', {'notSub': notSub}]" v-if="lastScoreShow">
        <a href="javascript:;">剩{{score}}分</a>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  name: "countScore",
  data() {
      return {
          notSub: 0, 
          lastScoreShow: 0,
          score: 0
      }
  },
  props: ['allScore'],
  computed: {
      ...mapState(['scoreAndSummaryList', 'sixthAndFourthScore', 'fourthScore'])
  },
  methods: {
      ...mapMutations(['getHadSixthScore'])
  },
  watch: {
      scoreAndSummaryList() {
          this.getHadSixthScore(this.allScore);
      },
      sixthAndFourthScore(nv) {
          this.notSub = nv < 0 ? 1 : 0;
          this.lastScoreShow = 1;
          this.score = this.sixthAndFourthScore;
      },
      fourthScore(nv) {
          this.notSub = nv < 0 ? 1 : 0;
          this.lastScoreShow = 1;
          this.score = this.fourthScore;
      }
  },
};
</script>

<style lang="less" scoped>
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
</style>
