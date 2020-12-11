import find from "lodash/find";

export function formProdList(data, oneRow, itSep = 3) {
  const triplData = [];

  const adjOneRow = oneRow && itSep !== 2;

  if (data) {
    let prodSet = [];
    for (let i = 0; i < data.length; i++) {
      const prod = data[i];

      if (!adjOneRow && i !== 0 && Number.isInteger(i / itSep)) {
        triplData.push(prodSet);
        prodSet = [];
      }

      let itemsAvailable = false;

      for (let j = 0; j < prod.sizes.length; j++) {
        const size = prod.sizes[j];

        if (parseInt(size.amount, 10) > 0) {
          itemsAvailable = true;
          break;
        }
      }

      const adjProd = {
        id: prod._id,
        title: prod.title,
        enTitle: prod.enTitle,
        price: prod.price,
        discPrice: prod.discPrice,
        primaryPic: find(prod.imgData, "primary")?.imgUrl,
        secondaryPic: find(prod.imgData, "secondary")?.imgUrl,
        disabled: !itemsAvailable,
      };

      prodSet.push(adjProd);

      if (adjOneRow && oneRow - 1 === i) {
        break;
      }
    }

    triplData.push(prodSet);
  }

  return triplData;
}
