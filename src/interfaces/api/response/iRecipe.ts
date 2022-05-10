export interface IRoot {
  recipe: IRecipe;
}

export interface IRecipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: IIngredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: ITotalNutrients;
  totalDaily: ITotalDaily;
  digest: IDigest[];
}

export interface IIngredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

export interface ITotalNutrients {
  ENERC_KCAL: IEnercKcal;
  FAT: IFat;
  FASAT: IFasat;
  FATRN: IFatrn;
  FAMS: IFams;
  FAPU: IFapu;
  CHOCDF: IChocdf;
  'CHOCDF.net': IChocdfNet;
  FIBTG: IFibtg;
  SUGAR: ISugar;
  'SUGAR.added': ISugarAdded;
  PROCNT: IProcnt;
  CHOLE: IChole;
  NA: INa;
  CA: ICa;
  MG: IMg;
  K: IK;
  FE: IFe;
  ZN: IZn;
  P: IP;
  VITA_RAE: IVitaRae;
  VITC: IVitc;
  THIA: IThia;
  RIBF: IRibf;
  NIA: INia;
  VITB6A: IVitb6A;
  FOLDFE: IFoldfe;
  FOLFD: IFolfd;
  FOLAC: IFolac;
  VITB12: IVitb12;
  VITD: IVitd;
  TOCPHA: ITocpha;
  VITK1: IVitk1;
  'Sugar.alcohol': ISugarAlcohol;
  WATER: IWater;
}

export interface IEnercKcal {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFat {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFasat {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFatrn {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFams {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFapu {
  label: string;
  quantity: number;
  unit: string;
}

export interface IChocdf {
  label: string;
  quantity: number;
  unit: string;
}

export interface IChocdfNet {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFibtg {
  label: string;
  quantity: number;
  unit: string;
}

export interface ISugar {
  label: string;
  quantity: number;
  unit: string;
}

export interface ISugarAdded {
  label: string;
  quantity: number;
  unit: string;
}

export interface IProcnt {
  label: string;
  quantity: number;
  unit: string;
}

export interface IChole {
  label: string;
  quantity: number;
  unit: string;
}

export interface INa {
  label: string;
  quantity: number;
  unit: string;
}

export interface ICa {
  label: string;
  quantity: number;
  unit: string;
}

export interface IMg {
  label: string;
  quantity: number;
  unit: string;
}

export interface IK {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFe {
  label: string;
  quantity: number;
  unit: string;
}

export interface IZn {
  label: string;
  quantity: number;
  unit: string;
}

export interface IP {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitaRae {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitc {
  label: string;
  quantity: number;
  unit: string;
}

export interface IThia {
  label: string;
  quantity: number;
  unit: string;
}

export interface IRibf {
  label: string;
  quantity: number;
  unit: string;
}

export interface INia {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitb6A {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFoldfe {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFolfd {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFolac {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitb12 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitd {
  label: string;
  quantity: number;
  unit: string;
}

export interface ITocpha {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitk1 {
  label: string;
  quantity: number;
  unit: string;
}

export interface ISugarAlcohol {
  label: string;
  quantity: number;
  unit: string;
}

export interface IWater {
  label: string;
  quantity: number;
  unit: string;
}

export interface ITotalDaily {
  ENERC_KCAL: IEnercKcal2;
  FAT: IFat2;
  FASAT: IFasat2;
  CHOCDF: IChocdf2;
  FIBTG: IFibtg2;
  PROCNT: IProcnt2;
  CHOLE: IChole2;
  NA: INa2;
  CA: ICa2;
  MG: IMg2;
  K: IK2;
  FE: IFe2;
  ZN: IZn2;
  P: IP2;
  VITA_RAE: IVitaRae2;
  VITC: IVitc2;
  THIA: IThia2;
  RIBF: IRibf2;
  NIA: INia2;
  VITB6A: IVitb6A2;
  FOLDFE: IFoldfe2;
  VITB12: IVitb122;
  VITD: IVitd2;
  TOCPHA: ITocpha2;
  VITK1: IVitk12;
}

export interface IEnercKcal2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFat2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFasat2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IChocdf2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFibtg2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IProcnt2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IChole2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface INa2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface ICa2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IMg2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IK2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFe2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IZn2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IP2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitaRae2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitc2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IThia2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IRibf2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface INia2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitb6A2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFoldfe2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitb122 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitd2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface ITocpha2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IVitk12 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IDigest {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub?: ISub[];
}

export interface ISub {
  label: string;
  tag: string;
  schemaOrgTag?: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}
