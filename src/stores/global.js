import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
export const useGlobalStore = defineStore("global", () => {
   const modalActive = ref(null);
   return {
      modalActive,
   };
});
