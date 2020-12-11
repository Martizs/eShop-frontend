export const enLang = {
  key: "en",
  chanTxt: "CHANNEL",
  abTxt: "ABOUT US",
  shopTxt: "SHOP",
  cartTxt: "CART",
  contactsTxt: "CONTACTS",
  fbTxt: "FACEBOOK",
  instaTxt: "INSTAGRAM",
  infoTxt: "INFO",
  policyTxt: "PRIVACY POLICY",
  catDDData: [
    {
      title: "ALL",
      key: "all",
    },
    {
      title: "ACCESSORIES",
      key: "aks",
    },
    {
      title: "CLOTHES",
      key: "drab",
    },
    {
      title: "OTHER",
      key: "other",
    },
  ],
  otherProdTxt: "OTHER PRODUCTS",
  sizeTxt: "SIZE",
  toCartTxt: "ADD TO CART",
  sendTxt: "SEND OPTIONS",
  totTxt: "TOTAL",
  emptCartTxt: "CART IS EMPTY",
  contTxt: "CONTINUE",
  extraSendInfo:
    "Deliveries might be delayed during holiday or pandemic periods*",
  prodTxt: "PRODUCT",
  vntTxt: "UNIT PRICE",
  amountTxt: "AMOUNT",
  remTxt: "REMOVE",
  sumTxt: "SUM",
  errTxt: "An error occurred, try refreshing the page",
  errSizeTxt: "Choose the items size",
  errAmountTxt: "Choose an amount of items",
  errNotAvTxt: "This item is not available anymore",
  errTooMuchSingleSTxt: (sizeAmount) =>
    `There's only ${sizeAmount} items left, please select only up to ${sizeAmount} units`,
  errTooMuchSingleMTxt: (sizeAmount) =>
    `There's only ${sizeAmount} items left for the selected size, please select only up to ${sizeAmount} units`,

  errSpecTooMuchSingleSTxt: (prodTitle, sizeAmount) =>
    `There's only ${sizeAmount} "${prodTitle}" items left, please select only up to ${sizeAmount} units`,
  errSpecTooMuchSingleMTxt: (prodTitle, sizeTitle, sizeAmount) =>
    `There's only ${sizeAmount} "${prodTitle}" items of size "${sizeTitle}" left, please select only up to ${sizeAmount} units`,
  sendEmptTxt: "Please fill out the input field for the selected send option",
  sendExceeTxt: "Send option input field cannot exceed 86 characters",
  outOfStockTxt: "Out of stock",
  orderedTitle: "Your order has been accepted!",
  orderedTexts: [
    "The parcel should reach you within 1-3 business days if you have selected LP EXPRESS ATM",
    "4-5 b.d. - if you have selected a registered parcel by LIETUVOS PAŠTAS within Lithuania",
    "5-15 b.d. - sending abroad",
    "Delivery times may take longer when ordering during the Holiday or due to COVID-19 pandemic",
    "Thank you for supporting DZHIUNGLES!",
  ],
  notFoundTxt: "Page not found",
};

export const ltLang = {
  key: "lt",
  chanTxt: "KANALAS",
  abTxt: "APIE MUS",
  shopTxt: "PARDUOTUVĖ",
  cartTxt: "KREPŠELIS",
  contactsTxt: "KONTAKTAI",
  fbTxt: "FACEBOOK'AS",
  instaTxt: "INSTAGRAMAS",
  infoTxt: "INFORMACIJA",
  policyTxt: "PRIVATUMO POLITIKA",
  catDDData: [
    {
      title: "VISI",
      key: "all",
    },
    {
      title: "AKSESUARAI",
      key: "aks",
    },
    {
      title: "DRABUŽIAI",
      key: "drab",
    },
    {
      title: "KITA",
      key: "other",
    },
  ],
  otherProdTxt: "KITI GAMINIAI",
  sizeTxt: "DYDIS",
  toCartTxt: "Į KREPŠELĮ",
  sendTxt: "SIUNTIMO BŪDAS",
  totTxt: "VISO",
  emptCartTxt: "KREPŠELIS TUŠČIAS",
  contTxt: "TĘSTI",
  extraSendInfo:
    "Užsisakant siuntas šventiniu arba pandemijos laikotarpiu, siuntos gali vėluoti*",
  prodTxt: "PRODUKTAS",
  vntTxt: "VIENETO KAINA",
  amountTxt: "KIEKIS",
  remTxt: "PAŠALINTI",
  sumTxt: "SUMA",
  errTxt: "Įvyko klaida, pabandykite perkrauti puslapį",
  errSizeTxt: "Pasirinkite prekės dydį",
  errAmountTxt: "Pasirinkite prekių kiekį",
  errNotAvTxt: "Šios prekės nebėra",
  errTooMuchSingleSTxt: (sizeAmount) =>
    `Deja, šios prekės liko tik ${sizeAmount}, pasirinkite nedaugiau kaip ${sizeAmount} vienetus`,
  errTooMuchSingleMTxt: (sizeAmount) =>
    `Pasirinkto dydžio prekių liko tik ${sizeAmount}, pasirinkite nedaugiau kaip ${sizeAmount} vienetus`,

  errSpecTooMuchSingleSTxt: (prodTitle, sizeAmount) =>
    `Prekės "${prodTitle}" yra like tik ${sizeAmount} vienetai, pasirinkite nedaugiau kaip ${sizeAmount}`,
  errSpecTooMuchSingleMTxt: (prodTitle, sizeTitle, sizeAmount) =>
    `Prekės "${prodTitle}" dydžio "${sizeTitle}" yra like tik ${sizeAmount} vienetai, pasirinkite nedaugiau kaip ${sizeAmount}`,
  sendEmptTxt: "Užpildykite pasirinkto siuntimo būdo lauką",
  sendExceeTxt: "Siuntimo būdo laukelis negali viršyti 86 raidžių",
  outOfStockTxt: "Išparduota",
  orderedTitle: "Jūsų užsakymas priimtas!",
  orderedTexts: [
    "Siunta jus turėtų pasiekti per 1-3 d.d. jeigu pasirinkote LP EXPRESS paštomatą",
    "4-5 d.d. - registruotą LIETUVOS PAŠTO siuntą Lietuvoje",
    "5-15 d.d. - siuntimą į užsienį.",
    "Užsisakius Šventiniu arba pandemijos laikotarpiu, siuntų pristatymo laikas gali kisti.",
    "Ačiū, kad remiate DZHIUNGLES!",
  ],
  notFoundTxt: "Puslapis nerastas",
};
