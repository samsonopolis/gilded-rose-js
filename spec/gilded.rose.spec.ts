import { Item, GildedRose } from '../src/gilded.rose';

describe('GildedRose', () => {
  let subject;

  let items;

  let dexterityVest;
  let agedBrie;
  let conjuredManaCake;
  let sulfuras;
  let backstagePasses;

  beforeEach(() => {
    dexterityVest = new Item("+5 Dexterity Vest", 10, 20);
    conjuredManaCake = new Item("Conjured Mana Cake", 3, 6);
    backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15);
    agedBrie = new Item("Aged Brie", 4, 11)
    sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

    items = [
      dexterityVest,
      backstagePasses,
      sulfuras,
      agedBrie,
      conjuredManaCake
    ]

    subject = new GildedRose(items);
  })

  describe('#updateQuality', () => {
    it('does something', () => {
      //console.log('before updating quality', subject.items);

      subject.updateQuality();

      expect(dexterityVest.sellIn).toEqual(9)
      expect(dexterityVest.quality).toEqual(19)

      expect(backstagePasses.sellIn).toEqual(4);
      expect(backstagePasses.quality).toEqual(18);

      expect(sulfuras.sellIn).toEqual(0);
      expect(sulfuras.quality).toEqual(80);

      expect(agedBrie.sellIn).toEqual(3);
      expect(agedBrie.quality).toEqual(12);

      expect(conjuredManaCake.sellIn).toEqual(2);
      expect(conjuredManaCake.quality).toEqual(4);

      //console.log('');
      //console.log('after updating quality', subject.items);
    });
  })
})
