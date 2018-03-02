<template>
  <div class="static_wrap">
      <ul class="static_son">
          <li>
              <p>市场服务:</p>
              <p>积极主动为市场一线提供支持服务、无拖延与推诿现象;</p>
              <p>无客户投诉得10分；每出现一次客户服务投诉扣2分，出现紧急情况不及时上报处理、隐瞒实情扣10分。</p>
              <div>
                  <span>自评分</span>
                  <input type="tel">
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "staticFourth",
  data() {
    return {};
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
      >p {
        line-height: 50px;
        border-bottom: 1px solid #39b2ff;
        font-size: 28px; 
        &:first-of-type {
            font-size: 30px;
        }
        &:nth-of-type(2) {
            text-indent: 2em;
        }
        &:last-of-type {
            color: #666;
            font-size: 26px;
            display: flex;
            flex-direction: column;
            padding-left: 50px;
            >span {
                font-size: 28px;
            }
        }
      }
      >div {
          display: flex;
          justify-content: flex-end;
          height: 80px;
          align-items: center;
          >span {
              font-size: 28px;
              padding-right: 10px;
          }
          >input {
              background-color: #f0f0f0;
              height: 60px;
              width: 100px;
              text-align: center;
              border-radius: 10px; 
          }
      }
    }
  }
}
</style>
