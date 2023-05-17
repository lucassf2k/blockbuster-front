const OPTIONS_SELECT_ADVISORY_RATING = [
  {
    value: "FREE",
    valueInPortuguese: "L",
    color: "green",
  },
  {
    value: "ABOVE_10",
    valueInPortuguese: "10",
    color: "blue",
  },
  {
    value: "ABOVE_12,",
    valueInPortuguese: "12",
    color: "yellow",
  },
  {
    value: "ABOVE_14",
    valueInPortuguese: "14",
    color: "orange",
  },
  {
    value: "ABOVE_16",
    valueInPortuguese: "16",
    color: "red",
  },
  {
    value: "ABOVE_18",
    valueInPortuguese: "18",
    color: "black",
  },
];

export function converAdvisoryRatingForPortuguese(advisoryRating) {
  const currentAdvisoryRating = OPTIONS_SELECT_ADVISORY_RATING.filter(
    (item) => item.value === advisoryRating
  );

  const [advisoryRatingForPortuguese] = currentAdvisoryRating;

  return advisoryRatingForPortuguese;
}
