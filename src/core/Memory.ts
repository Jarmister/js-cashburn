
let savedValues= new Array();
export function saveValues(values: { date: Date, value: number }[]): void {
  savedValues=values;
}

export function getValues(): { date: Date, value: number }[] {
  

  return savedValues;
}