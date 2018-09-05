import { GildedRose } from '../src/gilded.rose';

describe('GildedRose', () => {
  let subject;

  let items;

  beforeEach(() => {
    items = [
    ]

    subject = new GildedRose(items);
  })

  describe('#updateQuality', () => {
    it('does something', () => {
      subject.updateQuality();

      expect(true).toEqual(true);
    });
  })
})
