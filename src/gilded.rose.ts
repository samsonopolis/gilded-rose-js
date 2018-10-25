import { ItemFactory, Item } from './classes';

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            const product = ItemFactory.build(item);
            product.update();
        }
        return this.items;
    }
}
