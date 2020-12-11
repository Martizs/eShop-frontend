import findIndex from "lodash/findIndex";
import store from "redux_store/store";

export function getItemSum(cartItems) {
  let sum = 0;

  cartItems.forEach((cartIt) => {
    sum += parseFloat(cartIt.price, 10) * parseInt(cartIt.selectedAmount, 10);
  });

  return Math.round((sum + Number.EPSILON) * 100) / 100;
}

export function orderValid(cartItems, orderData) {
  const state = store.getState();

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
      return state.currLang.errAmountTxt;
    }

    if (ordProdSize.selectedAmount > ordProdSize.sizeAmount) {
      if (!ordProdSize.sizeTitle) {
        return state.currLang.errSpecTooMuchSingleSTxt(
          ordProdSize.prodTitle,
          ordProdSize.sizeAmount
        );
      } else {
        return state.currLang.errSpecTooMuchSingleMTxt(
          ordProdSize.prodTitle,
          ordProdSize.sizeTitle,
          ordProdSize.sizeAmount
        );
      }
    }
  }

  const { sendOption } = orderData;

  if (sendOption.extraInfo) {
    if (!sendOption.extraVal || !sendOption.extraVal.length) {
      return state.currLang.sendEmptTxt;
    }

    if (sendOption.extraVal.length > 86) {
      return state.currLang.sendExceeTxt;
    }
  }

  return 1;
}
