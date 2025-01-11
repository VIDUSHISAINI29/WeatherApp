<script setup>
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";
const modalActive = ref(null);
const toggleModal = () => {
   modalActive.value = !modalActive.value;
};
</script>
<template>
   <div
      class="tw-flex tw-w-full tw-flex-col tw-items-center tw-bg-weather-primary">
      <div
         class="tw-fixed tw-top-0 tw-flex tw-w-full tw-items-center tw-justify-center tw-bg-weather-secondary tw-p-1">
         <div class="tw-flex tw-w-[1000px] tw-items-center tw-justify-between">
            <div
               class="tw-group tw-flex tw-w-20 tw-cursor-pointer tw-flex-col tw-items-center">
               <i
                  class="ri-sun-fill tw-transform tw-text-3xl tw-text-weather-primary tw-duration-300 hover:tw-rotate-[30deg] group-hover:tw-text-[#05b3ec]"></i>
               <span
                  class="tw-text-[10px] tw-font-bold tw-text-weather-primary group-hover:tw-text-[#05b3ec]">
                  Weather
               </span>
            </div>
            <div class="tw-flex tw-gap-4">
               <i
                  @click="toggleModal"
                  class="ri-information-2-fill tw-cursor-pointer tw-text-3xl tw-text-weather-primary hover:tw-text-[#05b3ec]"></i>
               <i
                  class="ri-add-circle-fill tw-cursor-pointer tw-text-3xl tw-text-weather-primary hover:tw-text-[#05b3ec]"></i>
               <span
                  class="tw-cursor-pointer tw-rounded-md tw-bg-weather-primary tw-p-1 tw-px-3 tw-text-white tw-duration-300 hover:tw-bg-[#05b3ec]">
                  Signup
               </span>
            </div>
         </div>
      </div>
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
         <div class="tw-text-black">
            <h1 class="mb-1 tw-text-2xl">About:</h1>
            <span class="tw-mb-4">
               The Local Weather allows you to track the current and future
               weather of cities of your choosing.
            </span>
            <h2 class="tw-text-2xl">How it works:</h2>
            <ol class="tw-mb-4 tw-list-inside tw-list-decimal">
               <li>
                  Search for your city by entering the name into the search bar.
               </li>
               <li>
                  Select a city within the results, this will take you to the
                  current weather for your selection.
               </li>
               <li>
                  Track the city by clicking on the "+" icon in the top right.
                  This will save the city to view at a later time on the home
                  page.
               </li>
            </ol>

            <h2 class="tw-text-2xl">Removing a city :</h2>
            <span>
               If you no longer wish to track a city, simply select the city
               within the home page. At the bottom of the page, there will be am
               option to delete the city.
            </span>
         </div>
         <div class="tw-flex tw-w-full tw-justify-center">
            <button
               @click="toggleModal"
               class="tw-my-4 tw-rounded-md tw-bg-weather-primary tw-p-1 tw-px-3 tw-text-white hover:tw-bg-[#05b3ec]">
               Close
            </button>
         </div>
      </BaseModal>
   </div>
</template>
