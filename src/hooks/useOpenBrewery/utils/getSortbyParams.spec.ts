import { getSortByParams } from './getSortByParams';
import { SortDirection } from '../enums';

describe('getSortByParams', () => {
  it('should return empty string if no params are specified', () => {
    expect(getSortByParams({})).toEqual('');
  });

  it('should return concatenated string', () => {
    const params = {
      name: SortDirection.Asc,
      type: SortDirection.Asc,
    };
    expect(getSortByParams(params)).toEqual('name:asc,type:asc');
  });

  it('should not return desc direction', () => {
    const params = {
      name: SortDirection.Desc,
      type: SortDirection.Desc,
    };
    expect(getSortByParams(params)).toEqual('name,type');
  });
});
