<template>
    <div :class="['last_score', 'rubberBand', 'animated', {'notSub': notSub}]" 
          v-if="lastScoreShow"
          @touchstart.prevent.capture="touchStart"
          @touchmove.prevent.capture="touchMove"
          @touchend.prevent.capture="touchEnd"
          ref="remove"
          :style="deleteSlider"
          >
        <a href="javascript:;">剩{{allScore}}分</a>
    </div>
</template>

<script>
export default {
  name: "countScore",
  data() {
    return {
      startX: 0,
      startY: 0,
      moveX: 0,
      moveY: 0,
      disX: 0,
      disY: 0,
      deleteSlider: ''
    };
  },
  props: ["allScore", "notSub", "lastScoreShow"],
  methods: {
    touchStart(ev) {
      ev = ev || event;
      //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      if (ev.touches.length == 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX;
        this.startY = ev.touches[0].clientY;
      }
    },
    touchMove(ev) {
      ev = ev || event;
      //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.remove.offsetWidth;
      let ht = this.$refs.remove.offsetHeight;
      if (ev.touches.length == 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].pageX;
        this.moveY = ev.touches[0].pageY;
        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.moveX - wd / 2;
        this.disY = this.moveY - ht / 2;
        if(this.disX >= 320 && this.disY <= 20) {
          this.disX = 300;
          this.disY = 20;
        }else if(this.disY <= 20 && this.disX <= 20) {
          this.disY = 20;
          this.disX = 20;
        }else if(this.disX <= 20 && this.disY >= 400) {
          this.disX = 20;
          this.disY = 400;
        }else if(this.disX >=320 && this.disY >= 400) {
          this.disY = 20;
          this.disX = 400;
        }
        this.deleteSlider = `left: ${this.disX}px; top: ${this.disY}px;`;
      }
    },
    touchEnd(ev) {      
        if(this.disX >= 320 || this.disY <= 20) {
          this.disX = 300;
          this.disY = 20;
        }else if(this.disY <= 20 || this.disX <= 20) {
          this.disY = 20;
          this.disX = 20;
        }else if(this.disX <= 20 || this.disY >= 400) {
          this.disX = 20;
          this.disY = 400;
        }else if(this.disX >=320 || this.disY >= 400) {
          this.disY = 20;
          this.disX = 400;
        }
        this.deleteSlider = `left: ${this.disX}px; top: ${this.disY}px;`;
    }
  }
};
</script>

<style lang="less" scoped>
.last_score {
  position: fixed;
  z-index: 99999;
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
