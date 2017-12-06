<template>
  <div id="prompt" v-transfer-dom :data-transfer="true" v-show='visiable'>
    <div class="module-dialog-layer" style="display: block;"></div>
    <div class="clear module-dialog module-dialog-confirm module-dialog-show" style="display: block; opacity: 1;">
      <div class="dialog-panel">
        <div class="topbar">
          <div class="dialog-tit clear">
            <h4 class="js-dialog-title">提示</h4>
          </div>
          <span class="dialog-close png" @click="close"></span>
        </div>
        <div class="dialog-con js-dialog-container">
         <slot></slot>
        </div>
        <div class="dialog-btn-wrap clear">
          <div class="buttons">
            <button class="button-cancel ccc" v-if="cancelShow" @click="cancel"> 取消 </button>
            <button class="button-cancel blue-color" v-if="okShow" @click="ok" > 确定 </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TransferDom from '@/directives/transfer-dom'
export default {
  directives: { TransferDom },
  props: {
    value: {
        type: Boolean,
        default: false
    },
    cancelShow:{
        type: Boolean,
        default: true
    },
    okShow:{
        type: Boolean,
        default: true
    },
  },
  data () {
    return {
      visiable: this.value
    }
  },
  watch : {
    value (val) {
        this.visiable = val;
    }
  },
  methods: {
    ok () {
      this.visiable = false;
      this.$emit('input', false);
      this.$emit('ok');
    },
    close () {
      this.visiable = false;
      this.$emit('input', false);
      this.$emit('close');
    },
    cancel () {
      this.visiable = false;
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
}
</script>
<style src="@/assets/css/prompt.css">

</style>
<style>
.button-cancel {
    background-image: linear-gradient(#fff,#fcfcfc);
    color: #8c8c8c;
    width: 215px;
    height: 44px;
    border-radius: 6px;
    background: inherit;
    font-size: 14px;
    outline: none;
    border: none;
    margin: 0 10px 0;
    position: relative;
    cursor: pointer;
    padding: 0;
}
.blue-color {
  background: linear-gradient(#739fe1,#5f7ed7);
  box-shadow: inset 0 1px 3px #92b6ec, inset 0 0 2px #627dca, inset 0 -2px 3px #4c69b8;
  text-shadow: #4f70b3 0 -1px 0;
  cursor: pointer;
  color: #fff;
}
.buttons{
    width: 100%;
    text-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    display: inline-block;
    font-size: 0;
    display: -webkit-box;
    display: flex;
}
.ccc {
  background-image: linear-gradient(#fff,#fcfcfc);
  color: #8c8c8c;
}
</style>


