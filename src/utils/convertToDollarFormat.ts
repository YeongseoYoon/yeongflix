export default function convertToDollarFormat(amount: number) {
  return `$${amount.toLocaleString()}`;
}
