<script>
export default {
  props: {
    ed: 0,
    index: 0,
  },
};
</script>
<script setup>
import CountUp from "vue-countup-v3";
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";
import { vElementVisibility } from "@vueuse/components";
// In view
const countRef = ref(null);
const isVisible = ref(false);
function onElementVisibility(state) {
  isVisible.value = state;
}
</script>
<template>
  <count-up
    v-element-visibility="[onElementVisibility, { scrollTarget: countRef }]"
    :start-val="0"
    :end-val="ed"
    class="text-white text-[36px] mt-[10px]"
    :autoplay="true"
  ></count-up>
</template>

<!-- <script>
import Inview from "vue-inview";
export default {
  data() {
    return {
      startVal: 1,
      endVal: 1500,
      timer: 1,
      curVal: "1",
      flag: false,
    };
  },
  methods: {
    numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(",");
    },

    countTimer() {
      if (this.startVal > 0 && this.flag === false) {
        setTimeout(() => {
          this.startVal += 1;
          if (this.startVal < this.endVal) {
            this.curVal = this.numberWithCommas(this.startVal);
            this.countTimer();
          } else this.flag = true;
        }, this.timer);
      }
    },
  },

};
</script>
<script setup>
import { ref } from "vue";
import { useElementVisibility } from '@vueuse/core'

const countRef = ref(null);
const isVisible = useElementVisibility( countRef );

</script>
<template>
  <p ref="countRef" class="text-red-500 text-[50px]">{{ curVal }}</p>
</template> -->
