export const printWon = (price: number): string => {
  return price.toLocaleString('en-US') + " 원";
}

export const printQuantity = (quantity: number): string => {
  return `수량: ${quantity} 개`;
}