import {getRomanNumerical} from './index';

it('From 0 to 10', () => {
  expect(getRomanNumerical(1)).toBe('I');

  expect(getRomanNumerical(3)).toBe('III');
  expect(getRomanNumerical(4)).toBe('IV');

  expect(getRomanNumerical(5)).toBe('V');
  expect(getRomanNumerical(8)).toBe('VIII');
  expect(getRomanNumerical(9)).toBe('IX');


  expect(getRomanNumerical(10)).toBe('X');
});

it('From 11 to 100', () => {
  expect(getRomanNumerical(13)).toBe('XIII');
  expect(getRomanNumerical(14)).toBe('XIV');

  expect(getRomanNumerical(19)).toBe('XIX');
  expect(getRomanNumerical(20)).toBe('XX');
  expect(getRomanNumerical(49)).toBe('XLIX');
  expect(getRomanNumerical(50)).toBe('L');
  expect(getRomanNumerical(58)).toBe('LVIII');
});

it('From 101 to Infinity', () => {
  expect(getRomanNumerical(1994)).toBe('MCMXCIV');
  expect(getRomanNumerical(1994)).toBe('MCMXCIV');
  expect(getRomanNumerical(3999)).toBe('MMMCMXCIX');
});

it('From 101 to Infinity', () => {
  expect(() => getRomanNumerical(0)).toThrow('Number is not representable in roman system');
  expect(() => getRomanNumerical(4000)).toThrow('Number is not representable in roman system');
})