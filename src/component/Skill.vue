<template>
  <div class="rounded-[50px]">
    <span class="text-white">{{ `${title}%` }}:</span>
    <span class="float-right text-white"> {{ `${this.startVal}%` }} </span>
    <div class="w-100% p-0 bg-white m-0">
      <div :style="fillerStyles" class="h-[16px] m-[1px]"></div>
    </div>
  </div>
</template>

<script>

import { reactive, ref } from "vue";
import { onMounted, getCurrentInstance } from "vue";
import { computed } from "vue";
export default {
  name: "ProgressBar",
  props: {
    bgcolor: String,

    title: String,
    target: Number,
  },
  mounted() {
    setInterval(() => {

       if(this.startVal < this.target)
            {
                this.startVal += 5;
            }
    }, 100);
  },
  data(){
    return{
        startVal : 0,
    }
  },
  methods(){
    function progressStep(){
        if(this.startVal < props.target)
            this.startVal += 5;
        return this.startVal;
    }
  },
  setup(props) {
    const fillerStyles = computed(() => {

      return {

          width: `${getCurrentInstance().data.startVal}%`,
        backgroundColor: props.bgcolor,
        transition: "width 1s ease-in-out",
        borderRadius: "inherit",
        //   textAlign: "right",
      };
    });

    return { fillerStyles };
  },
};
</script>
