import {View, Button} from 'react-native';
import React, {FC} from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

type JOBCREATORUSERPROP = {
  phone: number | string;
  street: string;
  state: string;
  zipCode: string;
};

interface PDFPROP {
  formattedTotalCost: number;
  formattedCost: number;
  name: string;
  baseJobPrice: number;
  proposalName: string;
  jobCreatorUser: JOBCREATORUSERPROP;
}

const GeneratePdf: FC<PDFPROP> = ({
  formattedTotalCost,
  formattedCost,
  name,
  baseJobPrice,
  proposalName,
  jobCreatorUser,
}) => {
  const template = `
  <!DOCTYPE html>

<html lang="en">

<head>
  <!-- Tailwind Styles are set when generating the Proposal -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet"
    crossorigin="anonymous">


  <style>
  
  :after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}
:after,
:before {
  --tw-content: '';
}
.page-header,
    .page-header-space {
      height: 60px;
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
*,body {
  margin: 0;
  line-height: inherit;
  font-family: 'Rubik', sans-serif !important;
  
}
.cursive {
      font-family: 'Marck Script', cursive !important;
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

  </style>
</head>

<body>


  <header class="page-header">
    <div class="grid grid-cols-5 container border-gray-700 border-opacity-50 border-b-2 top-0 mx-auto my-auto">
      <h1 class="col-span-4 font-thin py-3 leading-tight border-gray-700 border-opacity-50 border-r-2 ml-8 mr-16 text-2xl">
        ${proposalName}
      </h1>
      <!-- Beginning of Company Logo -->
      </div>
      <!-- End of Company Logo -->
    </div>
  </header>



  <footer class="page-footer">
    <div
      class="flex justify-evenly border-gray-700 border-opacity-50 border-t-2 text-xs mb-5 z-10 w-full mx-auto align-bottom align-baseline">
      <div class="flex flex-grow font-semibold text-gray-500 border-gray-700 border-opacity-50 border-r-2 mt-1 px-2">
        <span class="mx-auto">
          Ph: ${jobCreatorUser.phone}
        </span>
      </div>
      <div class="flex flex-grow font-semibold text-gray-500 border-gray-700 border-opacity-50 border-r-2 mt-1 px-2">
        <span class="mx-auto">
          ${jobCreatorUser.street}
        </span>
      </div>
      <div class="flex flex-grow font-semibold text-gray-500 border-gray-700 border-opacity-50 border-r-2 mt-1 px-2">
        <span class="mx-auto">
          ${jobCreatorUser.state}
        </span>
      </div>
      <div class="flex flex-grow font-semibold text-gray-500 mt-1 px-2">
        <span class="mx-auto">
          ${jobCreatorUser.zipCode}
        </span>
      </div>
    </div>

  </footer>



  <div class="flex justify-between mb-3">
    <span></span>
    <span class="flex flex-row space-x-3">
      <span class="flex">Accept
        <span class="border-b-2 border-gray-100 border-opacity-100 px-8 ml-2">
          Sign info here
        </span></span>
      <span class="flex">Decline
        <span class="border-b-2 border-gray-100 border-opacity-100 px-8 ml-2">          
        </span></span>
    </span>
  </div>
  <!-- END OF DISPLAY ACCEPT/DECLINE SECTION FOR ALTERNATES  -->





  <!-- BEGIN OF DISPLAY ALTERNATES WITH LINE ITEMS-->
  <div class="my-3 border-gray-200 border-opacity-80 border-b mx-2 pb-1 w-full pageBreak">

    <div class="flex justify-between w-full">
      <h4 class="font-bold">${name}</h4>
      <span class="font-bold">
        <span class="font-bold mx-6">
      
          ${formattedTotalCost}</span>
      </span>
    </div>

    <div class="ml-10">
    
    </div>




  </div>
  <!--  END OF DISPLAY ALTERNATES WITH LINE ITEMS -->


  <!-- BEGIN OF DISABLED LUMP SUM AND ENABLED GROUP NAME  -->
  <div class="my-2 border-gray-200 border-opacity-80 border-b mx-2 pb-1 pageBreak">
    <h4 class="font-bold">${name}</h4>
    <div class="ml-10">
     
    </div>
    <div class="flex justify-between">
      <span></span>
      <span class="font-bold">${name} Total: ${formattedTotalCost}</span>
    </div>
  </div>
  <!-- END OF DISABLED LUMP SUM AND ENABLED GROUP NAME  -->


  <!-- BEGIN OF ENABLED LUMP SUM AND ENABLED GROUP NAME  -->
  <div class="my-2 mx-2 pb-1 pageBreak">
    <h4 class="font-bold">${name}</h4>
    <div class="ml-10">
     
    </div>
  </div>
  <!-- END OF ENABLED LUMP SUM AND ENABLED GROUP NAME  -->

</body>

</html>
    `;

  const options = {
    html: template,
    fileName: 'MyPDFDocument',
    base64: true,
    directory: 'Documents',
  };

  const generatePdf = async () => {
    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
  };

  const previewPdf = async () => {
    const results = await RNHTMLtoPDF.convert({
      html: template,
      fileName: 'test',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath, isLandscape: true});
  };

  return (
    <View style={{marginTop: 40}}>
      <Button onPress={generatePdf} title="Generate Pdf" />
      <Button onPress={previewPdf} title="Preview Pdf" />
    </View>
  );
};

export default GeneratePdf;
