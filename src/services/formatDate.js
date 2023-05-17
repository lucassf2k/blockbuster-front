export function formatDateToBrazil(input) {
  const splitedDate = input.split("-");
  const [year] = splitedDate;

  return `${year}`;
}
