import { Hotel } from './hotel';

describe('Hotel', () => {
  it('should create an instance', () => {
    expect(new Hotel("","",0,0)).toBeTruthy();
  });
});
