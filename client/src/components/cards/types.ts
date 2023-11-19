export interface CardsProps {
  str0: string;
  str1?: string;
  str2?: string;
  str3: string;
  str4: string;
  str5: string;
  value: number;
}

export interface CardPrototype {
  id: string;
  shape: "Circle" | "Triangle" | "Whot" | "Square" | "Star" | "Cross";
  value: number;
  className?: string;
}
