import { Product, ProductQuantity } from "./product";
import { Discount } from "./discount";

/**
 * Represents a cart with its items and discounts.
 */
export class Cart {
  /** Items in the cart */
  items: ProductQuantity[] = [];
  /** Discounts that are potentially applicable to this user */
  applicableDiscounts: Discount[] = [];

  constructor(items: ProductQuantity[]) {
    this.items = items;
  }

  /**
   * Total price of the cart as an integer without decimals.
   * 20.50€ => 2050
   */
  get total(): number {
    return this.items.reduce((acc, item) => {
      return acc + item.product.getPrice() * item.quantity;
    }, 0);
  }

  /** Total price of the cart as an integer without decimals, with discounts applied. */
  get cumulativeDiscount(): number {
    let totalDiscount = 0;
    for (let discount of this.applicableDiscounts) {
      totalDiscount += discount.computeDiscount(this.items);
    }
    return totalDiscount;
  }

  /** Total price of the cart as an integer without decimals, with discounts applied. */
  get totalWithDiscount(): number {
    return this.total - this.cumulativeDiscount;
  }
}
