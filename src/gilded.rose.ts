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
            case "Sulfuras, hand of Ragnaros":
                return new Sasafrass(item);
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


class AgedBrie extends Product {
    updateQuality() {
        this.increaseQuality();
    }

}

class BackStagePasses extends Product {
    updateQuality() {
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

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            if (item.name != "Aged Brie" && item.name != "Backstage passes to a TAFKAL80ETC concert") {
                if (item.quality > 0) {
                    if (item.name != "Sulfuras, Hand of Ragnaros") {
                        if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
                            this.decreaseQuality(item);
                        } else {
                            this.decreaseQuality(item);
                        }
                    }
                }
            } else {
                if (item.quality < 50) {
                    this.increaseQuality(item);
                    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                this.increaseQuality(item);
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                this.increaseQuality(item);
                            }
                        }
                    }
                }
            }
            if (item.name != "Sulfuras, Hand of Ragnaros") {

                item.sellIn = item.sellIn - 1;
            }
            if (item.sellIn < 0) {
                if (item.name != "Aged Brie") {
                    if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
                        if (item.quality > 0) {
                            if (item.name != "Sulfuras, Hand of Ragnaros") {
                                this.decreaseQuality(item);
                            }
                        }
                    } else {
                        item.quality = item.quality - item.quality;
                    }
                } else {
                    if (item.quality < 50) {
                        this.increaseQuality(item);
                    }
                }
            }
        }

        return this.items;
    }

    increaseQuality(item) {
        item.quality = item.quality + 1;
    }

    decreaseQuality(item) {
        item.quality = item.quality - 1;
    }
}
