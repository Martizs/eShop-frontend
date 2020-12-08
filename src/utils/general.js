// util function for images
// to sort by primary & secondary indicators
export function imgSort(imgData) {
  const sortedData = [];

  let imgPrimary = null;
  let imgSec = null;

  imgData.forEach((img) => {
    if (img.primary) {
      imgPrimary = img;
    } else if (img.secondary) {
      imgSec = img;
    } else {
      sortedData.push(img);
    }
  });

  if (imgSec) {
    sortedData.unshift(imgSec);
  }

  if (imgPrimary) {
    sortedData.unshift(imgPrimary);
  }

  return sortedData;
}

export function floatNumAdj(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}
