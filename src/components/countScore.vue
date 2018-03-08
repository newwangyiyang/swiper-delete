<template>
    <div :class="['last_score', 'rubberBand', 'animated', {'notSub': notSub}]" 
          v-if="1"
          ref="remove"
          :style="deleteSlider"
          >
        <a href="javascript:;">剩{{allScore}}分</a>
    </div>
</template>

<script>
import drag from '../../static/js/drag.js';
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
      deleteSlider: ""
    };
  },
  props: ["allScore", "notSub", "lastScoreShow"],
  mounted() {
    drag(this.$refs.remove);
  },
  methods: {
    
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
