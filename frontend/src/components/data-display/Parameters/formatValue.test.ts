import { formatValue } from './formatValue';

describe('formatValue', () => {
  it('returns "—" when given null', () => {
    expect(formatValue(null)).toEqual('—');
  });

  it('returns "—" when given undefined', () => {
    expect(formatValue(undefined)).toEqual('—');
  });

  it('returns "Yes" when given true', () => {
    expect(formatValue(true)).toEqual('Yes');
  });

  it('returns "No" when given false', () => {
    expect(formatValue(false)).toEqual('No');
  });

  it('returns comma-separated values when given an array', () => {
    expect(formatValue(['Fire', 'Ice', 'Flying'])).toEqual('Fire, Ice, Flying');
  });

  it('returns the original value when given a non-null, non-undefined, non-array value', () => {
    expect(formatValue('hello')).toEqual('hello');
  });
});
