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

class MyItem {
  constructor(public item) {}

  update() {
    this.updateQuality();
    this.updateSellIn();
  }

  updateQuality() {
    this.decreaseQuality();

    if (this.item.sellIn <= 0) {
      this.decreaseQuality();   
    }
  }

  increaseQuality() {
    if (this.item.quality < 50) {
      this.item.quality += 1;
    }
  }

  decreaseQuality() {
    if (this.item.quality > 0) {
      this.item.quality -= 1;
    }  
  }

  updateSellIn() {
    this.item.sellIn = this.item.sellIn - 1;
  }
}

export class AgedBrie extends MyItem {
  updateQuality() {
    this.increaseQuality();

    if (this.item.sellIn <= 0) {
      this.increaseQuality();
    }
  }
}

class BackstagePasses extends MyItem {
  updateQuality() {
    this.increaseQuality();
        
    if (this.item.sellIn < 11) {
      this.increaseQuality();
    }
    if (this.item.sellIn < 6) {
      this.increaseQuality();
    }
    if (this.item.sellIn <= 0) {
      this.item.quality = 0;
    }
  }
}

class Sulfuras extends MyItem {
  update() {}
}

// Single Responsibility Pattern
// tell dont ask
// Factory pattern
// Polymorphism
// Inheritance

class ItemFactory {
  static build(item) {
    if (item.name == 'Aged Brie') {
      return new AgedBrie(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      return new BackstagePasses(item);
    } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return new Sulfuras(item);
    } else {
      return new MyItem(item);
    }
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

  updateQuality() {
    for (let item of this.items) {
      const myItem = ItemFactory.build(item);
      myItem.update();
    }

    return this.items;
  }
}
