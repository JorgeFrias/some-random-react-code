import { ProductQuantity } from "./product";

/**
 * Represents a discount to be applied to a product.
 * 
 * Implementations of this interface should be able to compute the total discount for a given product and quantity.
 * The meaning of products and quantity depends on the implementation.
 */
interface Discount {
    /** User friendly name of the discount. E.g.: "3x2" */
    name: string;
    /** User friendly description of the discount. E.g.: "Buy 3 products and pay 2" */
    description: string;
    
    /**
     * Checks if the discount applies to the given cart state.
     */
    discountApplies(cartState:ProductQuantity[]): boolean;

    /**
     * Computes the total discount for a given cart state.
     *
     * E.g.:
     * Discount 3x2 => 1 free product
     * 20€ * 3 => Discount = 20€
     * 
     * @param cartState The current state of the cart.
     * @returns 0 if the discount is not applicable, or the total discount if it is.
     */
    computeDiscount(cartState:ProductQuantity[]): number;
  }
  
export type { Discount }