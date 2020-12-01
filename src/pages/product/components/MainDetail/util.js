export function prodValidation(title, price, noSize, sizes, imgData) {
  if (!title || !title.length) {
    return "Product requires a title";
  }

  if (!price || !price.length) {
    return "Product requires a price";
  }

  if (
    noSize &&
    (sizes[0].amount === null ||
      sizes[0].amount === undefined ||
      !sizes[0].amount.length)
  ) {
    return "Amount of items required";
  }

  if (!sizes.length) {
    return "Product requires a size or if there's no size, an amount";
  }

  if (!noSize) {
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i];
      if (!size.name || !size.name.length) {
        return "A size needs a name";
      }

      if (
        size.amount === null ||
        size.amount === undefined ||
        !size.amount.length
      ) {
        return "A size needs an amount";
      }
    }
  }

  if (imgData.length < 2) {
    return "Product requires at least 2 images";
  }

  let primaryFound = false;
  let secondaryFound = false;
  for (let i = 0; i < imgData.length; i++) {
    const img = imgData[i];

    if (!primaryFound && img.primary) {
      primaryFound = true;
    }

    if (!secondaryFound && img.secondary) {
      secondaryFound = true;
    }

    if (primaryFound && secondaryFound) {
      break;
    }
  }

  if (!primaryFound) {
    return "You need to select a primary image";
  }

  if (!secondaryFound) {
    return "You need to select a secondary image";
  }

  return 1;
}

export function baskValidation(selectedSize, selectedAmount, noSize, sizes) {
  if (!selectedSize) {
    return "Pasirinkite prekės dydį";
  }

  const selAmount = parseInt(selectedAmount, 10);
  if (!selAmount) {
    return "Pasirinkite prekių kiekį";
  }

  let notAvailable = true;

  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];

    if (parseInt(size.amount, 10)) {
      notAvailable = false;
      break;
    }
  }

  if (notAvailable) {
    return "Šios prekės nebėra";
  }

  const sizeAmount = parseInt(selectedSize.amount, 10);
  if (selAmount > sizeAmount) {
    if (noSize) {
      return `Deja, šios prekės liko tik ${sizeAmount}, pasirinkite nedaugiau kaip ${sizeAmount} vienetus`;
    } else {
      return `Pasirinkto dydžio prekių liko tik ${sizeAmount}, pasirinkite nedaugiau kaip ${sizeAmount} vienetus`;
    }
  }

  return 1;
}
