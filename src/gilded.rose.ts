export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = []) {
    this.items = items;
  }

  // consolidate duplicated code
  // start with innermost code and work your way out for duplication
  // flip != signs
  // keep tests passing as much as possible the entire time
  // commit often after refactoring and tests are still green
  // get rid of order dependent code
  // get rid of if statements with || or &&

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  decreaseQuality(item) {
    if (item.quality > 0) {
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.quality -= 1;
      }
    }  
  }

  updateQuality() {
    for (let item of this.items) {
      if (item.name == 'Aged Brie') {
        this.increaseQuality(item);

        if (item.sellIn <= 0) {
          this.increaseQuality(item);
        }
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(item);
        
        if (item.sellIn < 11) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 6) {
          this.increaseQuality(item);
        }
        if (item.sellIn <= 0) {
          item.quality = 0;
        }
      } else {
        this.decreaseQuality(item);

        if (item.sellIn <= 0) {
          this.decreaseQuality(item);   
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
    }

    return this.items;
  }
}
