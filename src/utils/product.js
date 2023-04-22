export function maskingProductPrice(str) {
  str = String(str);

  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

export default { maskingProductPrice };
