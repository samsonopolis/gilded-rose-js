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

export class ItemFactory {
    static build(item) {
        switch (item.name) {
            case "Aged Brie":
                return new AgedBrie(item);
            case "Backstage passes to a TAFKAL80ETC concert":
                return new BackStagePasses(item);
            case "Sulfuras, Hand of Ragnaros":
                return new Sasafrass(item);
            case "Conjured Mana Cake":
                return new ConjuredItem(item);
            case "Conjured Lava Cake":
                return new ConjuredItem(item);
            default:
                return new Product(item);
        }
    }
}

class Product {
    constructor(public item) { }

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

    updateSellIn() {
        this.item.sellIn = this.item.sellIn - 1;
    }

    decreaseQuality() {
        if (this.item.quality > 0) {
            this.item.quality = this.item.quality - 1;
        }
    }

    increaseQuality() {
        if (this.item.quality < 50) {
            this.item.quality = this.item.quality + 1;
        }
    }

}

class ConjuredItem extends Product {
    updateQuality() {
        if (this.item.sellIn >= 1) {
            this.decreaseQuality();
        }
        if (this.item.sellIn <= 0) {
            this.decreaseQuality();
            this.decreaseQuality();
        }
    }

    decreaseQuality() {
        if (this.item.quality >= 2) {
            this.item.quality = this.item.quality - 2;
        } else {
            this.item.quality = 0;
        }
    }
}

class AgedBrie extends Product {
    updateQuality() {
        this.increaseQuality();
        if (this.item.sellIn <= 0) {
            this.increaseQuality();
        }
    }

}

class BackStagePasses extends Product {
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

class Sasafrass extends Product {
    update() { }
}