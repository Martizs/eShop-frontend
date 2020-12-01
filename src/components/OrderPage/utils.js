import findIndex from "lodash/findIndex";

export function getItemSum(cartItems) {
  let sum = 0;

  cartItems.forEach((cartIt) => {
    sum += parseFloat(cartIt.price, 10) * parseInt(cartIt.selectedAmount, 10);
  });

  return sum;
}

export function orderValid(cartItems, orderData) {
  // so here we have to recheck if the user again does not try to exceed
  // the amount of products available for a size
  const ordProdSizes = [];

  cartItems.forEach((cartIt) => {
    const ordSizeInd = findIndex(
      ordProdSizes,
      (ordSize) =>
        ordSize.sizeId === cartIt.selectedSize._id &&
        ordSize.prodId === cartIt.selectedSize.product
    );

    if (ordSizeInd === -1) {
      ordProdSizes.push({
        prodTitle: cartIt.title,
        sizeTitle: cartIt.selectedSize.name,
        sizeId: cartIt.selectedSize._id,
        prodId: cartIt.selectedSize.product,
        sizeAmount: parseInt(cartIt.selectedSize.amount, 10),
        selectedAmount: parseInt(cartIt.selectedAmount, 10),
      });
    } else {
      ordProdSizes[ordSizeInd].selectedAmount += parseInt(
        cartIt.selectedAmount,
        10
      );
    }
  });

  for (let i = 0; i < ordProdSizes.length; i++) {
    const ordProdSize = ordProdSizes[i];

    if (ordProdSize.selectedAmount > ordProdSize.sizeAmount) {
      if (!ordProdSize.sizeTitle) {
        return `Prekės "${ordProdSize.prodTitle}" yra like tik ${ordProdSize.sizeAmount} vienetai, pasirinkite nedaugiau kaip ${ordProdSize.sizeAmount}`;
      } else {
        return `Prekės "${ordProdSize.prodTitle}" dydžio "${ordProdSize.sizeTitle}" yra like tik ${ordProdSize.sizeAmount} vienetai, 
                pasirinkite nedaugiau kaip ${ordProdSize.sizeAmount}`;
      }
    }
  }

  const {
    sendOption,
    fullName,
    address,
    email,
    city,
    phone,
    postCode,
    country,
  } = orderData;

  if (
    sendOption.extraInfo &&
    (!sendOption.extraVal || !sendOption.extraVal.length)
  ) {
    return "Užpildykite pasirinkto siuntimo būdo lauką";
  }

  if (!fullName.length) {
    return "Įveskite vardą ir pavardę";
  }

  if (!address.length) {
    return "Įveskite adresą";
  }

  if (!email.length || email.indexOf("@") === -1) {
    return "Įveskite teisingą El. pašto adresą";
  }

  if (!city.length) {
    return "Įveskite miestą";
  }

  if (!phone.length) {
    return "Įveskite telefono numerį";
  }

  const validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+"];
  for (let i = 0; i < phone.length; i++) {
    const phoneChar = phone[i];

    if (validChars.indexOf(phoneChar) === -1) {
      return "Įveskite teisingą telefono numerį su šalies kodu. Pvz: +37061234567";
    }
  }

  if (phone.indexOf("+") === -1) {
    return "Įveskite teisingą telefono numerį su šalies kodu. Pvz: +37061234567";
  }

  if (!postCode.length) {
    return "Įveskite pašto kodą";
  }

  if (!country.length) {
    return "Įveskite šalį";
  }

  return 1;
}
