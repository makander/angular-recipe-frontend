export interface Recipe {
  criteria: Criteria;
  matches?: (MatchesEntity)[] | null;
  facetCounts: FacetCounts;
  totalMatchCount: number;
  attribution: Attribution;
}
export interface Criteria {
  q: string;
  allowedIngredient?: null;
  excludedIngredient?: null;
}
export interface MatchesEntity {
  imageUrlsBySize: ImageUrlsBySize;
  sourceDisplayName: string;
  ingredients?: (string)[] | null;
  id: string;
  smallImageUrls?: (string)[] | null;
  recipeName: string;
  totalTimeInSeconds: number;
  attributes: Attributes;
  flavors?: Flavors | null;
  rating: number;
}
export interface ImageUrlsBySize {
  90: string;
}
export interface Attributes {
  course?: (string)[] | null;
  cuisine?: (string)[] | null;
  holiday?: (string)[] | null;
}
export interface Flavors {
  piquant: number;
  meaty: number;
  bitter: number;
  sweet: number;
  sour: number;
  salty: number;
}
export interface FacetCounts {}
export interface Attribution {
  html: string;
  url: string;
  text: string;
  logo: string;
}
