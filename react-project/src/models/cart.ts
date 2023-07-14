import { Product, ProductQuantity } from "./product";
import { Discount } from "./discount";
import { Currency } from "./currency";

/**
 * Represents a cart with its items and discounts.
 */
export class Cart {
  /** Items in the cart. */
  items: ProductQuantity[];
  /** Discounts that are potentially applicable to this user. */
  applicableDiscounts: Discount[];

  constructor(products: ProductQuantity[], applicableDiscounts: Discount[]) {
    this.items = products;
    this.applicableDiscounts = applicableDiscounts;
  }

  getItems(): ProductQuantity[] {
    return this.items;
  }

  getDiscounts(): Discount[] {
    return this.applicableDiscounts;
  }

  // MARK: - About the cart
  /**
   * Number of items in the cart, including multiple items of the same product.
   */
  get numberOfItems(): number {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  // MARK: - Price Computation
  /**
   * Currency of the cart.
   *
   * If the cart is empty, returns the default currency (EUR).
   */
  get currency(): Currency {
    if (this.items.length === 0) {
      return Currency.EUR;
    }
    return this.items[0].product.getCurrency();
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

  // MARK: - Cart Operations
  /**
   * Adds a product to the cart.
   *
   * If the product is already in the cart, increases the quantity.
   * @param product The product to add.
   * @param quantity The quantity to add. Defaults to 1.
   */
  addItem(product: Product, quantity: number = 1): Cart {
    const item = this.items.find((item) => item.product === product);
    if (item) {
      item.quantity += quantity;
    }

    return this;
  }
  /**
   * Removes a product from the cart.
   *
   * If the product is already in the cart, decreases the quantity.
   * @param product The product to remove.
   * @param quantity The quantity to remove. Defaults to 1.
   */
  removeItem(product: Product, quantity: number = 1): Cart {
    const item = this.items.find((item) => item.product === product);
    if (item) {
      // Guard against negative quantities
      if (item.quantity - quantity < 0) {
        item.quantity = 0;
      } else {
        item.quantity -= quantity;
      }
    }

    return this;
  }

  /**
   * Updates the quantity of a product in the cart.
   *
   * @param product The product to update.
   * @param quantity The new quantity.
   */
  updateItemQuantity(product: Product, quantity: number): Cart {
    const item = this.items.find((item) => item.product === product);
    if (item) {
      // Guard against negative quantities
      if (quantity < 0) {
        item.quantity = 0;
      } else {
        item.quantity = quantity;
      }
    }

    return this;
  }
}
