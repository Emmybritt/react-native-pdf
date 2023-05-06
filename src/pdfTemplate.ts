export type TemplateProp = {
  formattedTotalCost: number;
  formattedCost: number;
  baseJobPrice: number;
  proposalName: string;
  proposalDate: string;
  name: string;
  address: string;
};

export const template = ({
  formattedTotalCost,
  formattedCost,
  baseJobPrice,
  proposalName,
  proposalDate,
  name,
  address,
}: TemplateProp) => `
  <!DOCTYPE html>

<html lang="en">

<head>
  <!-- Tailwind Styles are set when generating the Proposal -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet"
    crossorigin="anonymous">

  <style>
    *,
    body {
      font-family: 'Rubik', sans-serif !important;
      height: 100%

      
    }

    .cursive {
      font-family: 'Marck Script', cursive !important;
    }

    :after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}
:after,
:before {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
body {
  margin: 0;
  line-height: inherit;
  background-color: white;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
li {
  height: 25px;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: initial;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button,
select {
  text-transform: none;
}
[type='button'],
[type='reset'],
[type='submit'],
button {
  -webkit-appearance: button;
  background-color: initial;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: initial;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
h2 {
    font-weight: 900;
}
fieldset {
  margin: 0;
}
fieldset,
legend {
  padding: 0;
}
menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
[role='button'],
button {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
:after,
:before {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #3b82f680;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.z-10 {
  z-index: 10;
}
.col-span-4 {
  grid-column: span 4 / span 4;
}
.col-span-1 {
  grid-column: span 1 / span 1;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.mx-10 {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}
.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mr-16 {
  margin-right: 4rem;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-10 {
  margin-left: 2.5rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-20 {
  margin-top: 5rem;
}
.mr-10 {
  margin-right: 2.5rem;
}
.ml-4 {
  margin-left: 1rem;
}
.mt-\[25px\] {
  margin-top: 25px;
}
.mt-\[5px\] {
  margin-top: 5px;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-5 {
  margin-right: 1.25rem;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.h-24 {
  height: 6rem;
}
.h-full {
  height: 100%;
}
.h-20 {
  height: 5rem;
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.w-4 {
  width: 1rem;
}
.w-\[15\%\] {
  width: 15%;
}
.w-24 {
  width: 6rem;
}
.min-w-full {
  min-width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
.table-fixed {
  table-layout: fixed;
}
.border-collapse {
  border-collapse: collapse;
}
.list-disc {
  list-style-type: disc;
}
.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-evenly {
  justify-content: space-evenly;
}
.gap-x-20 {
  -moz-column-gap: 5rem;
  column-gap: 5rem;
}
.gap-y-8 {
  row-gap: 2rem;
}
.gap-x-\[5px\] {
  -moz-column-gap: 5px;
  column-gap: 5px;
}
.gap-y-10 {
  row-gap: 2.5rem;
}
.space-x-3 > :not([hidden]):not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * (1 - var(--tw-space-x-reverse)));
}
.space-x-6 > :not([hidden]):not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * (1 - var(--tw-space-x-reverse)));
}
.space-y-2 > :not([hidden]):not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-1 > :not([hidden]):not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * (1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-x-2 > :not([hidden]):not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * (1 - var(--tw-space-x-reverse)));
}
.divide-x-4 > :not([hidden]):not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(4px * var(--tw-divide-x-reverse));
  border-left-width: calc(4px * (1 - var(--tw-divide-x-reverse)));
}
.divide-y > :not([hidden]):not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * (1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-\[\#CFCFCF\] > :not([hidden]):not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(207 207 207 / var(--tw-divide-opacity));
}
.divide-gray-200 > :not([hidden]):not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}
.whitespace-normal {
  white-space: normal;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.border {
  border-width: 1px;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-r-2 {
  border-right-width: 2px;
}
.border-t-2 {
  border-top-width: 2px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}
.border-opacity-50 {
  --tw-border-opacity: 0.5;
}
.border-opacity-100 {
  --tw-border-opacity: 1;
}
.border-opacity-80 {
  --tw-border-opacity: 0.8;
}
.bg-\[\#F5F7FB\] {
  --tw-bg-opacity: 1;
  background-color: rgb(245 247 251 / var(--tw-bg-opacity));
}
.bg-\[\#E5E5E5\] {
  --tw-bg-opacity: 1;
  background-color: rgb(229 229 229 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-\[\#9A5199\] {
  --tw-bg-opacity: 1;
  background-color: rgb(154 81 153 / var(--tw-bg-opacity));
}
.bg-\[\#DADADA\] {
  --tw-bg-opacity: 1;
  background-color: rgb(218 218 218 / var(--tw-bg-opacity));
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.line {
  border-top: 1px solid black;
  }
.pt-5 {
  padding-top: 0.75rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.px-\[20px\] {
  padding-left: 20px;
  padding-right: 20px;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-3 {
  padding-top: 0.75rem;
}
.pb-3,
.py-3 {
  padding-bottom: 0.75rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pl-5 {
  padding-left: 1.25rem;
}
.pt-0 {
  padding-top: 0;
}
.pr-5 {
  padding-right: 1.25rem;
}
.pl-10 {
  padding-left: 2.5rem;
}
.pr-10 {
  padding-right: 2.5rem;
}
.pt-24 {
  padding-top: 6rem;
}
.pt-32 {
  padding-top: 8rem;
}
.pb-\[45px\] {
  padding-bottom: 45px;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.align-baseline {
  vertical-align: initial;
}
.align-bottom {
  vertical-align: bottom;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-\[10px\] {
  font-size: 10px;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.font-thin {
  font-weight: 100;
}
.font-semibold {
  font-weight: 600;
}
.font-bold {
  font-weight: 700;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-extrabold {
  font-weight: 800;
}
.font-normal {
  font-weight: 400;
}
.uppercase {
  text-transform: uppercase;
}
.italic {
  font-style: italic;
}
.leading-tight {
  line-height: 1.25;
}
.leading-relaxed {
  line-height: 1.625;
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-\[\#7C7C7C\] {
  --tw-text-opacity: 1;
  color: rgb(124 124 124 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.underline {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}


    .page-header,
    .page-header-space {
      height: 50px;
    }

    .page-footer,
    .page-footer-space {
      height: 30px;
    }

    .page-footer {
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    .page-header {
      position: fixed;
      top: 0;
      width: 100%;
      border-bottom: 1px solid black;

    }

    .main {

    }

    .page {
      page-break-after: always;
    }

    .pageBreak {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    @page {}

    @media print {
      thead {
        display: table-header-group;
      }

      tfoot {
        display: table-footer-group;
      }

      body {
        margin: 0;
      }
    }
  </style>
</head>

<body>
  <div>
  <header class="page-header">
    <div class="flex justify-between items-center px-10 pt-5">
        <div>
            <span class="">${proposalName}</span>
        </div>
        <div>
            <span style="border-left: 1px solid black; padding-left: 10px">logo</span>
        </div>
    </div>
  </header>

  <footer class="page-footer" style="border-top: 1px solid black; padding: 10px 0">
    <div style="font-size: 13px" class="flex justify-evenly items-center">
      <div style="border-right: 1px solid black; padding-right: 5px;">Ph:(215)8245688</div> <div style="border-right: 1px solid black; padding-right: 5px;">ABC THT, STREET TWO</div> <div>ABC AL 12312</div>
    </div>
  </footer>
  <br><br><br>
  <div class="px-10" style="height: 20%">
    <span style="font-size: 15px"><b>Proposal Date: ${proposalDate}</b></span><br>
    <span style="font-size: 15px"><b>By and between:</b></span>
    <div class="mt-5 mx-auto flex justify-between" style="width: 80%">
      <div>
        <span>${name}</span><br>
        <div style="width: 70%; text-align: center; height: 70px">
        <span style="text-align:center; font-size: 12px;">${address}</span>
        </div>
        <span style="font-size: 14px">Hereinafter CONTRACTOR</span>
      </div>
      <div style="margin-right: 50px">
      And
      </div>
      <div>
        <span>${name}</span><br>
        <div style="width: 70%; text-align: center;  height: 70px">
        <span style="text-align:center; font-size: 12px;">${address}</span>
        </div>
          <span style="font-size: 14px">Hereinafter CONTRACTOR</span>
      </div>
    </div>
  </div>
  <div class="px-10" style="height: 5%; margin-top: 4px">
   <div class="flex items-center flex-row">
    <span style="font-size: 15px">Contractor to provide the following services at </span>
    <span class="ml-2 underline"><b>Philadelphia Alley, Charleston, SC 29401:</b></span>
   </div>
   <div style="padding: 0 40px; font-size: 14px;">
      <ul style="list-style-type: disc; line-height: 1.4;">
        <li>Basic details: Dimension, weight, description, fragile handling</li>
        <li>Specify location for delivery and pickup</li>
        <li>Set shipper details</li>
        <li>Shippers can cancel their project</li>
        <li>Add photosShipper selects bid to accept</li>
        <li>Bid deadline</li>
        <li>Delivery time/date</li>
        <li>Designate special features (Hazmat, etc)</li>
        <li>Pickup time/date</li>
        <li>Special loading requirements (two people, lift gate, etc)</li>
        <li>Specify type of vehicle minimally required (car, truck, van, etc)</li>
        <li>Shipper can view live updates of courier location in route</li>
        <li>Shipper is "pinged" when bids are received</li>
        <li>Shipper conrms job completed</li>
        <li>Basic details: Dimension, weight, description, fragile handling</li>
        <li>Specify location for delivery and pickup</li>
        <li>Set shipper details</li>
        <li>Shippers can cancel their project</li>
        <li>Add photosShipper selects bid to accept</li>
        <li>Bid deadline</li>
        <li>Delivery time/date</li>
        <li>Designate special features (Hazmat, etc)</li>
        <li>Pickup time/date</li>
        <li>Special loading requirements (two people, lift gate, etc)</li>
      </ul>
      </div>
  </div>
</div>
<!--Page 2 -->
 <div>
  <header class="page-header">
    <div class="flex justify-between items-center px-10 pt-5">
        <div>
            <span class="">${proposalName}</span>
        </div>
        <div>
            <span style="border-left: 1px solid black; padding-left: 10px">logo</span>
        </div>
    </div>
  </header>

  <footer class="page-footer" style="border-top: 1px solid black; padding: 10px 0">
    <div style="font-size: 13px" class="flex justify-evenly items-center">
      <div style="border-right: 1px solid black; padding-right: 5px;">Ph:(215)8245688</div> <div style="border-right: 1px solid black; padding-right: 5px;">ABC THT, STREET TWO</div> <div>ABC AL 12312</div>
    </div>
  </footer>
  <br><br><br>
 
  <div class="px-10" style="height: 5%; margin-top: 4px">
   
   <div style="padding: 0 40px; font-size: 14px;">
      <ul style="list-style-type: disc; line-height: 1.4;">
        <li>Basic details: Dimension, weight, description, fragile handling</li>
        <li>Specify location for delivery and pickup</li>
        <li>Set shipper details</li>
        <li>Shippers can cancel their project</li>
        <li>Add photosShipper selects bid to accept</li>
        <li>Bid deadline</li>
        <li>Delivery time/date</li>
        <li>Designate special features (Hazmat, etc)</li>
        <li>Pickup time/date</li>
        <li>Special loading requirements (two people, lift gate, etc)</li>
        <li>Specify type of vehicle minimally required (car, truck, van, etc)</li>
        <li>Shipper can view live updates of courier location in route</li>
        <li>Shipper is "pinged" when bids are received</li>
        <li>Shipper conrms job completed</li>
        <li>Basic details: Dimension, weight, description, fragile handling</li>
        <li>Specify location for delivery and pickup</li>
        <li>Set shipper details</li>
        <li>Shippers can cancel their project</li>
        <li>Add photosShipper selects bid to accept</li>
        <li>Bid deadline</li>
        <li>Delivery time/date</li>
        <li>Designate special features (Hazmat, etc)</li>
        <li>Pickup time/date</li>
        <li>Special loading requirements (two people, lift gate, etc)</li>
      </ul>
      </div>
  </div>
</div>

  <div>
  <header class="page-header">
    <div class="flex justify-between items-center px-10 pt-5">
        <div>
            <span class="">${proposalName}</span>
        </div>
        <div>
            <span style="border-left: 1px solid black; padding-left: 10px">logo</span>
        </div>
    </div>
  </header>

  <footer class="page-footer" style="border-top: 1px solid black; padding: 10px 0">
    <div style="font-size: 13px" class="flex justify-evenly items-center">
      <div style="border-right: 1px solid black; padding-right: 5px;">Ph:(215)8245688</div> <div style="border-right: 1px solid black; padding-right: 5px;">ABC THT, STREET TWO</div> <div>ABC AL 12312</div>
    </div>
  </footer>
  <br><br><br>
 
   <div class="px-10" style="height: 5%; margin-top: 4px">
      <div class="flex items-center justify-between">
        <div>
          <span style="font-size: 15px"><b>Total Price: $0 </b></span>
          <div class="" style="margin-top: 55px">
          <h3 style="font-size: 17px;"><b style=" border-bottom: 1px solid black">Approval by Client: </b></h3>
          </div>
          <div class="" style="margin-top: 55px">
          <div style="font-size: 17px; border-top: 1px solid black;" class="flex justify-between space-x-6 flex-row">
              <span>Authorized Representative</span>
              <span>Date</span>
          </div>
          </div>
          <div class="" style="margin-top: 55px">
          <div style="font-size: 17px; border-top: 1px solid black;" class="flex justify-between space-x-6 flex-row">
              <span>Printed Name</span>
          </div>
          </div>
        </div>

        <div>
        <div class="flex flex-row items-center">
            <div style="font-size: 15px" class="flex flex-row; position: relative">
              <span>Accept: <span style="visibility: hidden; border: 1px solid red">_________________</span></span>
            </div>
            
        </div>
         <div class="mt-5">
          <h3 style="font-size: 17px;"><b style=" border-bottom: 1px solid black">Approval by Contractor: </b></h3>
          </div>
          <div class="" style="margin-top: 55px">
          <div style="font-size: 17px; border-top: 1px solid black;" class="flex justify-between space-x-6 flex-row">
              <span>Authorized Representative</span>
              <span>Date</span>
          </div>
          </div>
          <div class="" style="margin-top: 55px">
          <div style="font-size: 17px; border-top: 1px solid black;" class="flex justify-between space-x-6 flex-row">
              <span>Printed Name</span>
          </div>
          </div>
        </div>
      </div>
    </div>


  
  
</body>

</html>
    `;
