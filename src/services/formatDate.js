export function formatDateToBrazil(input) {
  const splitedDate = input.split("-");
  const [year, month, day] = splitedDate;

  return { year, fullDate: `${day}/${month}/${year}` };
}
