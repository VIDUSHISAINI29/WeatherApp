<script setup>
defineEmits(["close-modal"]);

defineProps({
   modalActive: {
      type: Boolean,
      default: false,
   },
});
</script>
<template>
   <Transition name="modal-outer">
      <div
         v-show="modalActive"
         class="tw-absolute tw-left-0 tw-top-52 tw-z-10 tw-flex tw-h-screen tw-w-full tw-justify-center tw-bg-opacity-30 tw-px-8">
         <Transition name="modal-inner">
            <div
               v-if="modalActive"
               class="tw-w-[250px] tw-max-w-screen-md tw-self-start tw-rounded-md tw-bg-weather-secondary tw-p-4 sm:tw-w-[500px] md:tw-w-[700px]">
               <slot />
               <!-- <button
            @click="$emit['close-modal']"
            class="tw-bg-weather-primary tw-p-1 tw-px-3 tw-text-white hover:tw-bg-[#05b3ec]">
            Close
         </button> -->
            </div>
         </Transition>
      </div>
   </Transition>
</template>
<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
   transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
   opacity: 0;
}

.modal-inner-enter-active,
.modal-inner-leave-active {
   transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
   opacity: 0;
   transform: scale(0.8);
}
.modal-inner-leave-to {
   transform: scale(0.8);
}
</style>
