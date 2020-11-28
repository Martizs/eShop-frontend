import find from "lodash/find";

export function formProdList(data, oneRow) {
  const triplData = [];

  let prodSet = [];

  for (let i = 0; i < data.length; i++) {
    const prod = data[i];

    if (!oneRow && i !== 0 && Number.isInteger(i / 3)) {
      triplData.push(prodSet);
      prodSet = [];
    }

    const adjProd = {
      id: prod._id,
      title: prod.title,
      price: prod.price,
      primaryPic: find(prod.imgData, "primary")?.imgUrl,
      secondaryPic: find(prod.imgData, "secondary")?.imgUrl,
    };

    prodSet.push(adjProd);

    if (oneRow && oneRow - 1 === i) {
      break;
    }
  }

  triplData.push(prodSet);

  return triplData;
}