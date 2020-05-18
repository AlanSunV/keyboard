<template>
  <div style="height: 100%;">
    <div class="big_box">
      <div class="wrapper">
        <span class="amount_icon">¥</span>
        <div class="input_money" @click="isShowKeyBord = true">
          {{amount}}
          <span class="blink"></span>
        </div>
        <img class="input_clean" @touchend.stop="onTap_clearNum" src="@/assets/img/clean.png" />
      </div>

      <div class="money_box">
        <div :class="['pay_money',amount>0?'show_pay_money':'']">
          <div class="label">实际付款：</div>
          <div class="amount_box">
            <div class="amount_icon">¥</div>
            <div class="pay_amount">{{actualAmount}}</div>
          </div>
        </div>

        <div class="pay_btn btn_disable" v-show="amount<=0">
          <span>支付</span>
        </div>

        <div class="pay_btn btn_unDisable" v-show="amount>0" @click="onClick_pay">
          <span>支付</span>
        </div>
      </div>
    </div>

    <key-bord @input="onInput_keyBord" @enter="onEnter_keyBord" :clearNum="clearNum"></key-bord>
  </div>
</template>
<script type="text/ecmascript-6">
import { Indicator, Toast } from "mint-ui";
import KeyBord from "@/components/keyBord.vue";
export default {
  created() {},
  data() {
    return {
      amount: "",
      actualAmount: "",
      clearNum: false
    };
  },

  components: {
    KeyBord
  },
  mounted() {},
  methods: {
    onInput_keyBord($obj) {
      this.amount = $obj.amount;
      this.actualAmount = $obj.actualAmount;
    },
    onEnter_keyBord($obj) {
      this.amount = $obj.amount;
      this.actualAmount = $obj.actualAmount;
    },
    closeLoding() {
      setTimeout(() => {
        Indicator.close();
      }, 500);
    },
    showToast($text) {
      setTimeout(() => {
        Toast($text);
      }, 700);
    },
    onTap_clearNum() {
      this.clearNum = !this.clearNum;
    },
    onClick_pay() {
      Indicator.open({
        text: "支付中"
      });
      this.isShowKeyBord = false;
      if (this.isSubmit) {
        this.isSubmit = false;
        console.log("去支付");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/payIndex.scss";

.function {
  i:last-child {
    background: #1ecf69 !important;
  }
}
</style>

