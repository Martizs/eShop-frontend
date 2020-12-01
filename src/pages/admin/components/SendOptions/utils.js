export function validateOpts(options) {
  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    if (!option.name || !option.name.length) {
      return "An option needs a name";
    }

    if (!option.price || !option.price.length) {
      return "An option needs a price";
    }

    if (
      option.extraInfo !== null &&
      option.extraInfo !== undefined &&
      !option.extraInfo.length
    ) {
      return "Need to enter a place holder for the extra info field for the option";
    }
  }

  return 1;
}
