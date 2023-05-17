ACTION,
  COMEDY,
  DRAMA,
  FANTASY,
  HORROR,
  MYSTERY,
  ROMANCE,
  THRILLER,
  WESTERN,
  SCI_FI;
const OPTIONS_SELECT_INPUT_GENDER = [
  {
    value: "ACTION",
    valueInPortuguese: "Ação",
  },
  {
    value: "COMEDY",
    valueInPortuguese: "Comédia",
  },
  {
    value: "DRAMA",
    valueInPortuguese: "Drama",
  },
  {
    value: "FANTASY",
    valueInPortuguese: "Fantasia",
  },
  {
    value: "HORROR",
    valueInPortuguese: "Terror",
  },
  {
    value: "MYSTERY",
    valueInPortuguese: "Mistério",
  },
  {
    value: "ROMANCE",
    valueInPortuguese: "Romance",
  },
  {
    value: "THRILLER",
    valueInPortuguese: "Suspense",
  },
  {
    value: "WESTERN",
    valueInPortuguese: "Faroeste",
  },
  {
    value: "SCI_FI",
    valueInPortuguese: "Ficção Científica",
  },
];

export function converGenderForPortuguese(gender) {
  const currentGender = OPTIONS_SELECT_INPUT_GENDER.filter(
    (item) => item.value === gender
  );

  const [genderInPortuguese] = currentGender;

  return genderInPortuguese.valueInPortuguese;
}
