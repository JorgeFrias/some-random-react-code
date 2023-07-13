// Data models
import { Product, ProductQuantity } from "../src/models/product";
import { Discount } from "../src/models/discount";

// Import data (in the real world this would be fetched from a server)
import { products } from "../data/products";

// MARK: Discounts Definitions

/**
 * Discount Implementation:
 * - 2x1 on Caps
 *
 * Original description:
 * The sales department thinks a buy 2 get 1 free promotion will work best (buy two of the same product, get one free), and would like to apply this only to CAP items
 */
class DiscountTwoForOneCaps implements Discount {
  name: string = "2x1 on Caps";
  description: string = "Buy 2 caps and pay only 1!";
  appliesToProductCode: string = "CAP";

  discountApplies(cartState: ProductQuantity[]): boolean {
    // acc - accumulator
    const capsCount = cartState.reduce((acc, item) => {
      return item.product.getCode() === this.appliesToProductCode ? acc + item.quantity : acc;
    }, 0);

    return capsCount >= 2;
  }

  computeDiscount(cartState: ProductQuantity[]): number {
    let totalDiscount = 0;
    for (let item of cartState) {
      if (item.product.getCode() === this.appliesToProductCode) {
        totalDiscount +=
          item.product.getPrice() * Math.floor(item.quantity / 2);
      }
    }
    return totalDiscount;
  }
}

/**
 * Discount Implementation:
 * - Bulk discount on T-Shirts
 *
 * Original description:
 * The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and requests that if you buy 3 or more TSHIRT items the price per unit should be reduced by 25%.
 */
class DiscountBulkTShirt implements Discount {
  name: string = "25% on bulk T-Shirts";
  description: string = "Buy 3 or more T-Shirts and get 25% off!";
  appliesToProductCode: string = "TSHIRT";

  discountApplies(cartState: ProductQuantity[]): boolean {
    // acc - accumulator
    const tshirtCount = cartState.reduce((acc, item) => {
      return item.product.getCode() === this.appliesToProductCode ? acc + item.quantity : acc;
    }, 0);

    return tshirtCount >= 3;
  }

  computeDiscount(cartState: ProductQuantity[]): number {
    let totalDiscount = 0;
    for (let item of cartState) {
      if (item.product.getCode() === this.appliesToProductCode) {
        totalDiscount += item.product.getPrice() * item.quantity * 0.25;
      }
    }
    return totalDiscount;
  }
}

// MARK: Discounts Array
export const discounts: Discount[] = [
    new DiscountTwoForOneCaps(),
    new DiscountBulkTShirt()
];

// TODO: If we can ensure that only one instance of a given productQuantity is passed on cartState, we can return early when the discount applies. This is how it the cart behaves right now, but for the future seems like it could break if we change the cart to allow multiple instances of the same product.
