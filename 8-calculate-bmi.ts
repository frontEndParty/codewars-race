export function bmi(weight: number, height: number): string {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25.0) return "Normal";
  if (bmi <= 30.0) return "Overweight";
  if (bmi > 30) return "Obese";
  throw new Error("Fuck you Typescript... and Colin");
}
