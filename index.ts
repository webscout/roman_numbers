type symbolType = 'one' | 'five';

let symbolsByExponent: { [key in symbolType]?: string }[] = [
  {one: 'I', five: 'V'},
  {one: 'X', five: 'L'},
  {one: 'C', five: 'D'},
  {one: 'M'}
];

export const getSymbol = (exponent: number, symbolType = 'one') => {
  const symbol = symbolsByExponent[exponent]?.[symbolType];

  if (!symbol) {
    throw new Error('Symbol is not representable in roman system')
  }

  return symbol;
}

export const getRomanNumerical = (number: number): string => {
  if (number <= 0 || number > 3999) {
    throw new Error('Number is not representable in roman system');
  }

  const numString = String(number);

  let romanString = '';

  for (let i = 0; i < numString.length; i++) {
    const exponent = numString.length - 1 - i;
    let digit = Number(numString[i]);

    if (digit === 9) {
      romanString += `${getSymbol(exponent)}${getSymbol(exponent + 1)}`;
      continue;
    }

    if (digit >= 4) {
      if (digit === 4) {
        romanString += getSymbol(exponent);
      }

      romanString += getSymbol(exponent, 'five');

      if (digit > 5) {
        romanString += getSymbol(exponent).repeat(digit - 5);
      }

      continue;
    }

    romanString += getSymbol(exponent).repeat(digit);
  }

  return romanString;
}