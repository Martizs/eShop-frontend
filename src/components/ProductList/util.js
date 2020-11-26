export function formProdList(data, oneRow) {
  const triplData = [];

  let prodSet = [];

  for (let i = 0; i < data.length; i++) {
    const prod = data[i];

    if (!oneRow && i !== 0 && Number.isInteger(i / 3)) {
      triplData.push(prodSet);
      prodSet = [];
    }

    prodSet.push(prod);

    if (oneRow && oneRow - 1 === i) {
      break;
    }
  }

  triplData.push(prodSet);

  return triplData;
}
