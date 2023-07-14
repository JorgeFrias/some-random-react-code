import { Cart } from "../src/models/cart";
import { Product, ProductQuantity } from "../src/models/product";
import { Discount } from "../src/models/discount";
import { Currency } from "@/models/currency";

import { discounts } from "../data/discounts";

class DiscountHalfOff implements Discount {
  name: string = "50% off";
  description: string = "50% off on all products";

  discountApplies(cartState: ProductQuantity[]): boolean {
    return true;
  }

  computeDiscount(cartState: ProductQuantity[]): number {
    let totalDiscount = 0;
    for (let item of cartState) {
      totalDiscount += item.product.getPrice() * item.quantity * 0.5;
    }
    return totalDiscount;
  }
}

describe("Cart", () => {
  let cart: Cart;
  let product1: Product;
  let product2: Product;
  let product3: Product;
  let discount: Discount;

  beforeEach(() => {
    product1 = new Product(
      "Product 1",
      "p1",
      100,
      Currency.EUR,
      "/img/img.png",
      "img/img_l.png",
      "Description is some description."
    );
    product2 = new Product(
      "Product 2",
      "p2",
      200,
      Currency.EUR,
      "/img/img.png",
      "img/img_l.png",
      "Description is some description."
    );
    product3 = new Product(
      "Product 3",
      "p3",
      300,
      Currency.EUR,
      "/img/img.png",
      "img/img_l.png",
      "Description is some description."
    );

    let products = [product1, product2];

    cart = new Cart(
      products.map((product) => {
        return {
          product: product,
          quantity: 0,
        };
      }),
      [new DiscountHalfOff()]
    );
  });

  describe("addItem", () => {
    it("should not increase the quantity of an existing item", () => {
      cart.addItem(product1, 0);
      expect(cart.getItems()[0].quantity).toBe(0);
    });

    it("should increase the quantity of an existing item", () => {
      cart.addItem(product1, 5);
      expect(cart.getItems()[0].quantity).toBe(5);
    });
  });

  describe("removeItem", () => {
    it("should decrease the quantity", () => {
      cart.getItems()[0].quantity = 3;
      cart.removeItem(product1, 1);
      expect(cart.getItems()[0].quantity).toBe(2);
    });

    it("should not allow negative values", () => {
      cart.removeItem(product1);
      expect(cart.getItems()[0].quantity).toBe(0);
    });

    it("should decrease the quantity of an existing item", () => {
      cart.getItems()[0].quantity = 5;
      cart.removeItem(product1, 3);
      expect(cart.getItems()[0].quantity).toBe(2);
    });

    it("should not decrease the quantity of an existing item below 0", () => {
      cart.removeItem(product1, 40);
      expect(cart.getItems()[0].quantity).toBe(0);
    });
  });

  describe("updateItemQuantity", () => {
    it("should update the quantity of an existing item", () => {
      cart.updateItemQuantity(product1, 3);
      expect(cart.getItems()[0].quantity).toBe(3);
    });

    it("should not allow negative quantities", () => {
      cart.updateItemQuantity(product1, -1);
      expect(cart.getItems()[0].quantity).toBe(0);
    });
  });

  describe("should numberOfItems", () => {
    it("total number of items in the cart", () => {
      expect(cart.numberOfItems).toBe(0);
    });

    it("total number of items in the cart", () => {
      cart.addItem(product1, 5);
      cart.addItem(product2, 5);
      expect(cart.numberOfItems).toBe(10);
    });
  });

  describe("currency", () => {
    it("should return the currency of the cart", () => {
      expect(cart.currency).toBe(Currency.EUR);
    });

    it("should return the default currency if the cart is empty", () => {
      cart = new Cart([], []);
      expect(cart.currency).toBe(Currency.EUR);
    });
  });

  describe("total", () => {
    it("should return the total price of the cart", () => {
      expect(cart.total).toBe(0);
    });

    it("should return the total price of the cart", () => {
      cart.addItem(product1, 5);
      cart.addItem(product2, 5);
      expect(cart.total).toBe(1500);
    });
  });

  describe("cumulativeDiscount", () => {
    it("should return the total discount applied to the cart", () => {
      expect(cart.cumulativeDiscount).toBe(0);
    });

    it("should return the total discount applied to the cart", () => {
      cart.addItem(product1, 5);
      cart.addItem(product2, 5);
      expect(cart.cumulativeDiscount).toBe(750);
    });
  });

  describe("totalWithDiscount", () => {
    it("should return the total price of the cart with discounts applied", () => {
      expect(cart.totalWithDiscount).toBe(0);
    });

    it("should return the total price of the cart with discounts applied", () => {
        cart.addItem(product1, 5);
        expect(cart.totalWithDiscount).toBe(250);
      });
  });
});
