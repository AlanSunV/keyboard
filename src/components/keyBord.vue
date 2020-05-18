<template>
  <div class="keyboard showKeyboard">
    <div class="number">
      <i
        v-for="item of keyNumList"
        :key="item"
        v-tap.stop="[touchstart_numItem,item]"
        :class="[item===0?'otherNumber':'']"
      >{{item}}</i>
    </div>
    <div class="function">
      <i class="del" v-tap.stop="[touchstart_numItem,'del']"></i>
      <i class="gray-btn enter" @touchend.stop="touchend_enter">确定</i>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  created() {},
  data() {
    return {
      shopName: "",
      keyNumList: [1, 2, 3, 4, 5, 6, 7, 8, 9, "·", 0],
      currTouch: "",
      amount: "",
      actualAmount: 0
    };
  },
  props: {
    clearNum: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    clearNum: function($new, $old) {
      this.amount = "";
      this.actualAmount = 0;
    },
    amount: function($new, $old) {
      let dotAfterLength = 0;
      dotAfterLength = $new.slice($new.indexOf("."), $new.length);
      if ($new.length > 5) {
        if ($new.indexOf(".") !== -1 && dotAfterLength.length <= 3) {
          this.amount = $new;
        } else {
          this.amount = $old;
        }
      } else {
        if ($new.indexOf(".") !== -1 && dotAfterLength.length > 3) {
          this.amount = $old;
        } else {
          this.amount = $new;
        }
      }

      this.actualAmount = Number(this.amount).toFixed(2);
      this.$emit("input", {
        amount: this.amount,
        actualAmount: this.actualAmount
      });
    }
  },
  components: {},
  mounted() {},
  methods: {
    touchstart_numItem($item) {
      switch ($item) {
        case 0:
          this.touch0($item);
          break;
        case "·":
          this.touchDot($item);
          break;
        case "del":
          this.touchDel($item);
          break;
        default:
          this.touchNum($item);
      }
    },

    touch0($item) {
      if (
        this.amount.slice(0, 1) === 0 &&
        this.amount !== "" &&
        this.amount.indexOf(".") === -1
      ) {
        console.log();
      } else {
        this.amount += String($item);
      }
    },
    touchDot($item) {
      if (this.amount.indexOf(".") === -1 && this.amount.length === 0) {
        this.amount += "0.";
      }

      if (this.amount.indexOf(".") === -1 && this.amount.length !== 0) {
        this.amount += ".";
      }
    },
    touchDel($item) {
      this.amount = this.amount.slice(0, -1);
    },
    touchNum($item) {
      if (this.amount.slice(0, 1) === 0 && this.amount.length === 1) {
        this.amount = String($item);
      } else {
        this.amount += String($item);
      }
    },
    touchend_enter() {
      this.$emit("enter", {
        amount: this.amount,
        actualAmount: this.actualAmount
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/keyBord.scss";
</style>

