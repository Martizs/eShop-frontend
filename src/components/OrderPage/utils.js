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

    if (
      !ordProdSize.selectedAmount ||
      !(ordProdSize.selectedAmount + "").length
    ) {
      return `Turite pasirinkti prekių kiekį`;
    }

    if (ordProdSize.selectedAmount > ordProdSize.sizeAmount) {
      if (!ordProdSize.sizeTitle) {
        return `Prekės "${ordProdSize.prodTitle}" yra like tik ${ordProdSize.sizeAmount} vienetai, pasirinkite nedaugiau kaip ${ordProdSize.sizeAmount}`;
      } else {
        return `Prekės "${ordProdSize.prodTitle}" dydžio "${ordProdSize.sizeTitle}" yra like tik ${ordProdSize.sizeAmount} vienetai, 
                pasirinkite nedaugiau kaip ${ordProdSize.sizeAmount}`;
      }
    }
  }

  const { sendOption } = orderData;

  if (sendOption.extraInfo) {
    if (!sendOption.extraVal || !sendOption.extraVal.length) {
      return "Užpildykite pasirinkto siuntimo būdo lauką";
    }

    if (sendOption.extraVal.length > 86) {
      return "Siuntimo būdo laukelis negali viršyti 86 raidžių";
    }
  }

  return 1;
}
