import "./styles/index.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const someStaff = {
  ...elvenShieldRecipe,
  newField: 67,
};

console.log(elvenShieldRecipe, someStaff);
