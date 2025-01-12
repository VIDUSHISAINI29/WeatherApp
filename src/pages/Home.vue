<script setup>
import axios from "axios";
import { stringify } from "postcss";
import { ref } from "vue";

const queryTimeout = ref(null);
const cityName = ref("London");
const apiKey = ref("b38b8fd8eb7207e137d47f65eb2d0fec");
const apiResult = ref(null);
const temperature = ref(null);
const weather = ref(null);
const searchError = ref(null);
const dataFetched = ref(false);
const weatherIcon = ref(null);
const icon = ref(null);

// Create a new Date object to get the current date and time
const now = new Date();

// Get the day, month, year, hours, and minutes
const day = String(now.getDate()).padStart(2, "0"); // Ensure two digits (e.g., 01, 02, etc.)
const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is 0-based (0 for January, 1 for February, etc.)
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, "0"); // Ensure two digits
const minutes = String(now.getMinutes()).padStart(2, "0"); // Ensure two digits

// Format the date and time
const dateString = ref(`${day}/${month}/${year}`);
const timeString = ref(`${hours}:${minutes}`);

console.log("Date: " + dateString); // Output: DD/MM/YYYY
console.log("Time: " + timeString); // Output: HH:MM

const getSearchResult = () => {
   try {
      queryTimeout.value = setTimeout(async () => {
         if (cityName.value !== "") {
            const result = await axios.get(
               `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey.value}`,
            );
            apiResult.value = result.data;
            console.log("value -", apiResult.value);

            weather.value = apiResult.value.weather[0].main;
            const icon = apiResult.value.weather[0].icon;
            weatherIcon.value = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            const temp = apiResult.value.main.temp - 273.15;
            temperature.value = temp.toFixed(2);
            console.log("value -", icon);
            dataFetched.value = true;
         }
      });
   } catch (error) {
      searchError.value = error;
      console.log("error in fetching api : ", error);
   }
};
const countries = [
   { name: "Afghanistan", code: "AF" },
   { name: "Albania", code: "AL" },
   { name: "Algeria", code: "DZ" },
   { name: "Andorra", code: "AD" },
   { name: "Angola", code: "AO" },
   { name: "Antigua and Barbuda", code: "AG" },
   { name: "Argentina", code: "AR" },
   { name: "Armenia", code: "AM" },
   { name: "Australia", code: "AU" },
   { name: "Austria", code: "AT" },
   { name: "Azerbaijan", code: "AZ" },
   { name: "Bahamas", code: "BS" },
   { name: "Bahrain", code: "BH" },
   { name: "Bangladesh", code: "BD" },
   { name: "Barbados", code: "BB" },
   { name: "Belarus", code: "BY" },
   { name: "Belgium", code: "BE" },
   { name: "Belize", code: "BZ" },
   { name: "Benin", code: "BJ" },
   { name: "Bhutan", code: "BT" },
   { name: "Bolivia", code: "BO" },
   { name: "Bosnia and Herzegovina", code: "BA" },
   { name: "Botswana", code: "BW" },
   { name: "Brazil", code: "BR" },
   { name: "Brunei Darussalam", code: "BN" },
   { name: "Bulgaria", code: "BG" },
   { name: "Burkina Faso", code: "BF" },
   { name: "Burundi", code: "BI" },
   { name: "Cabo Verde", code: "CV" },
   { name: "Cambodia", code: "KH" },
   { name: "Cameroon", code: "CM" },
   { name: "Canada", code: "CA" },
   { name: "Central African Republic", code: "CF" },
   { name: "Chad", code: "TD" },
   { name: "Chile", code: "CL" },
   { name: "China", code: "CN" },
   { name: "Colombia", code: "CO" },
   { name: "Comoros", code: "KM" },
   { name: "Congo (Congo-Brazzaville)", code: "CG" },
   { name: "Congo, Democratic Republic of the", code: "CD" },
   { name: "Costa Rica", code: "CR" },
   { name: "Croatia", code: "HR" },
   { name: "Cuba", code: "CU" },
   { name: "Cyprus", code: "CY" },
   { name: "Czechia (Czech Republic)", code: "CZ" },
   { name: "Denmark", code: "DK" },
   { name: "Djibouti", code: "DJ" },
   { name: "Dominica", code: "DM" },
   { name: "Dominican Republic", code: "DO" },
   { name: "Ecuador", code: "EC" },
   { name: "Egypt", code: "EG" },
   { name: "El Salvador", code: "SV" },
   { name: "Equatorial Guinea", code: "GQ" },
   { name: "Eritrea", code: "ER" },
   { name: "Estonia", code: "EE" },
   { name: "Eswatini (fmr. Swaziland)", code: "SZ" },
   { name: "Ethiopia", code: "ET" },
   { name: "Fiji", code: "FJ" },
   { name: "Finland", code: "FI" },
   { name: "France", code: "FR" },
   { name: "Gabon", code: "GA" },
   { name: "Gambia", code: "GM" },
   { name: "Georgia", code: "GE" },
   { name: "Germany", code: "DE" },
   { name: "Ghana", code: "GH" },
   { name: "Greece", code: "GR" },
   { name: "Grenada", code: "GD" },
   { name: "Guatemala", code: "GT" },
   { name: "Guinea", code: "GN" },
   { name: "Guinea-Bissau", code: "GW" },
   { name: "Guyana", code: "GY" },
   { name: "Haiti", code: "HT" },
   { name: "Holy See", code: "VA" },
   { name: "Honduras", code: "HN" },
   { name: "Hungary", code: "HU" },
   { name: "Iceland", code: "IS" },
   { name: "India", code: "IN" },
   { name: "Indonesia", code: "ID" },
   { name: "Iran", code: "IR" },
   { name: "Iraq", code: "IQ" },
   { name: "Ireland", code: "IE" },
   { name: "Israel", code: "IL" },
   { name: "Italy", code: "IT" },
   { name: "Jamaica", code: "JM" },
   { name: "Japan", code: "JP" },
   { name: "Jordan", code: "JO" },
   { name: "Kazakhstan", code: "KZ" },
   { name: "Kenya", code: "KE" },
   { name: "Kiribati", code: "KI" },
   { name: "Korea (North)", code: "KP" },
   { name: "Korea (South)", code: "KR" },
   { name: "Kuwait", code: "KW" },
   { name: "Kyrgyzstan", code: "KG" },
   { name: "Laos", code: "LA" },
   { name: "Latvia", code: "LV" },
   { name: "Lebanon", code: "LB" },
   { name: "Lesotho", code: "LS" },
   { name: "Liberia", code: "LR" },
   { name: "Libya", code: "LY" },
   { name: "Liechtenstein", code: "LI" },
   { name: "Lithuania", code: "LT" },
   { name: "Luxembourg", code: "LU" },
   { name: "Madagascar", code: "MG" },
   { name: "Malawi", code: "MW" },
   { name: "Malaysia", code: "MY" },
   { name: "Maldives", code: "MV" },
   { name: "Mali", code: "ML" },
   { name: "Malta", code: "MT" },
   { name: "Marshall Islands", code: "MH" },
   { name: "Mauritania", code: "MR" },
   { name: "Mauritius", code: "MU" },
   { name: "Mexico", code: "MX" },
   { name: "Micronesia", code: "FM" },
   { name: "Moldova", code: "MD" },
   { name: "Monaco", code: "MC" },
   { name: "Mongolia", code: "MN" },
   { name: "Montenegro", code: "ME" },
   { name: "Morocco", code: "MA" },
   { name: "Mozambique", code: "MZ" },
   { name: "Myanmar (formerly Burma)", code: "MM" },
   { name: "Namibia", code: "NA" },
   { name: "Nauru", code: "NR" },
   { name: "Nepal", code: "NP" },
   { name: "Netherlands", code: "NL" },
   { name: "New Zealand", code: "NZ" },
   { name: "Nicaragua", code: "NI" },
   { name: "Niger", code: "NE" },
   { name: "Nigeria", code: "NG" },
   { name: "North Macedonia", code: "MK" },
   { name: "Norway", code: "NO" },
   { name: "Oman", code: "OM" },
   { name: "Pakistan", code: "PK" },
   { name: "Palau", code: "PW" },
   { name: "Palestine", code: "PS" },
   { name: "Panama", code: "PA" },
   { name: "Papua New Guinea", code: "PG" },
   { name: "Paraguay", code: "PY" },
   { name: "Peru", code: "PE" },
   { name: "Philippines", code: "PH" },
   { name: "Poland", code: "PL" },
   { name: "Portugal", code: "PT" },
   { name: "Qatar", code: "QA" },
   { name: "Romania", code: "RO" },
   { name: "Russia", code: "RU" },
   { name: "Rwanda", code: "RW" },
   { name: "Saint Kitts and Nevis", code: "KN" },
   { name: "Saint Lucia", code: "LC" },
   { name: "Saint Vincent and the Grenadines", code: "VC" },
   { name: "Samoa", code: "WS" },
   { name: "San Marino", code: "SM" },
   { name: "Sao Tome and Principe", code: "ST" },
   { name: "Saudi Arabia", code: "SA" },
   { name: "Senegal", code: "SN" },
   { name: "Serbia", code: "RS" },
   { name: "Seychelles", code: "SC" },
   { name: "Sierra Leone", code: "SL" },
   { name: "Singapore", code: "SG" },
   { name: "Slovakia", code: "SK" },
   { name: "Slovenia", code: "SI" },
   { name: "Solomon Islands", code: "SB" },
   { name: "Somalia", code: "SO" },
   { name: "South Africa", code: "ZA" },
   { name: "South Sudan", code: "SS" },
   { name: "Spain", code: "ES" },
   { name: "Sri Lanka", code: "LK" },
   { name: "Sudan", code: "SD" },
   { name: "Suriname", code: "SR" },
   { name: "Sweden", code: "SE" },
   { name: "Switzerland", code: "CH" },
   { name: "Syria", code: "SY" },
   { name: "Taiwan", code: "TW" },
   { name: "Tajikistan", code: "TJ" },
   { name: "Tanzania", code: "TZ" },
   { name: "Thailand", code: "TH" },
   { name: "Timor-Leste", code: "TL" },
   { name: "Togo", code: "TG" },
   { name: "Tonga", code: "TO" },
   { name: "Trinidad and Tobago", code: "TT" },
   { name: "Tunisia", code: "TN" },
   { name: "Turkey", code: "TR" },
   { name: "Turkmenistan", code: "TM" },
   { name: "Tuvalu", code: "TV" },
   { name: "Uganda", code: "UG" },
   { name: "Ukraine", code: "UA" },
   { name: "Taiwan", code: "TW" },
   { name: "Tajikistan", code: "TJ" },
   { name: "Tanzania", code: "TZ" },
   { name: "Thailand", code: "TH" },
   { name: "Timor-Leste", code: "TL" },
   { name: "Togo", code: "TG" },
   { name: "Tonga", code: "TO" },
   { name: "Trinidad and Tobago", code: "TT" },
   { name: "Tunisia", code: "TN" },
   { name: "Turkey", code: "TR" },
   { name: "Turkmenistan", code: "TM" },
   { name: "Tuvalu", code: "TV" },
   { name: "Uganda", code: "UG" },
   { name: "Ukraine", code: "UA" },
   { name: "United Arab Emirates", code: "AE" },
   { name: "United Kingdom", code: "GB" },
   { name: "United States", code: "US" },
   { name: "Uruguay", code: "UY" },
   { name: "Uzbekistan", code: "UZ" },
   { name: "Vanuatu", code: "VU" },
   { name: "Vatican City", code: "VA" },
   { name: "Venezuela", code: "VE" },
   { name: "Vietnam", code: "VN" },
   { name: "Yemen", code: "YE" },
   { name: "Zambia", code: "ZM" },
   { name: "Zimbabwe", code: "ZW" },
];
</script>
<template>
   <div
      class="tw-z-10 tw-mt-28 tw-flex tw-h-screen tw-w-full tw-justify-center">
      <div
         class="tw-container tw-flex tw-w-[500px] tw-flex-col tw-gap-4 tw-p-3 tw-text-white">
         <div class="tw-relative tw-flex">
            <input
               v-model="cityName"
               type="text"
               placeholder="Search for a city or state"
               class="fouce:shadow-[0px_1px_0_0_#0d9dcd] tw-w-full tw-rounded-bl-md tw-rounded-tl-md tw-border-r-2 tw-border-weather-primary tw-bg-weather-secondary tw-px-2 tw-py-2 tw-font-bold tw-text-weather-primary focus:tw-border-weather-primary focus:tw-outline-none" />
            <button
               @click="getSearchResult"
               class="tw-cursor-pointer tw-rounded-br-md tw-rounded-tr-md tw-bg-weather-secondary tw-px-2 tw-font-semibold tw-text-weather-primary">
               Search
            </button>
         </div>
         <div v-if="searchError">
            <span>There is no information regarding your city.</span>
         </div>
         <div
            v-if="dataFetched"
            class="tw-w-full tw-p-1 tw-font-semibold tw-text-white">
            <div
               class="tw-my-5 tw-flex tw-flex-col tw-items-center tw-gap-8 tw-p-2">
               <div class="tw-flex tw-flex-col tw-items-center">
                  <span class="tw-text-4xl">{{ cityName }}</span>
                  <div class="tw-flex tw-gap-2">
                     <span class="tw-text-sm">{{ dateString }}</span>
                     <span class="tw-text-sm">{{ timeString }}</span>
                  </div>
               </div>

               <span class="tw-text-6xl">
                  {{ temperature }}
                  <sup>o</sup>
               </span>
               <div class="tw-flex tw-flex-col tw-items-center">
                  <img class="tw-h-20 tw-w-20" :src="weatherIcon" alt="" />
                  <span class="-tw-mt-3 tw-text-lg">{{ weather }}</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
