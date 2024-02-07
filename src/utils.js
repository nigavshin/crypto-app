export function percentDifferents(partialValue, totalValue) {
  return +(
    100 *
    Math.abs((partialValue - totalValue) / ((partialValue + totalValue) / 2))
  ).toFixed(2);
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
