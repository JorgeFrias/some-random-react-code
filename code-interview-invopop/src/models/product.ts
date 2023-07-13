import { Currency } from "./currency";

/**
 * Defines a product.
 *
 * A product is immutable, so it can only be created with a constructor.
 */
class Product {
  private name: string;
  private code: string;
  private price: number;
  private currency: Currency;
  private imagePath: string;         // This should be a URL in a real project.

  /**
   * @param name Product name, e.g. "Black T-Shirt".
   * @param code Product identifier code, e.g. "TSHIRT-BLK".
   * @param price Product price as an integer, e.g. 2000. this means 20.00€.
   * @param currency Currency of the product price.
   * @param imageURL Image URL of the product.
   */
  constructor(
    name: string,
    code: string,
    price: number,
    currency: Currency,
    imagePath: string
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.currency = currency;
    this.imagePath = imagePath;
  }

  // MARK: Getters
  /**
   * Product name, e.g. "Black T-Shirt".
   */
  getName(): string {
    return this.name;
  }
  /**
   * Product identifier code, e.g. "TSHIRT-BLK".
   */
  getCode(): string {
    return this.code;
  }
  /**
   * Product price as an integer, e.g. 2000. this means 20.00€.
   */
  getPrice(): number {
    return this.price;
  }
  /**
   * Currency of the product price.
   */
  getCurrency(): Currency {
    return this.currency;
  }
  /**
   * Image URL of the product.
   */
  getImageURL(): string {
    return this.imagePath;
  }

  // Setters are not needed, as the product is immutable.

  // Computed properties
  productURL(): string {
    return `/product/${this.code}`;
  }
}

export { Product };