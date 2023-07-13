import { Product } from '../src/models/product';
import { Currency } from '../src/models/currency';

export const products: Product[] = [
    new Product("T-Shirt", "TSHIRT", 2000, Currency.EUR, "/img/shirt.png"),
    new Product("Coffee Mug", "MUG", 750, Currency.EUR, "/img/cup.png"),
    new Product("Cap", "CAP", 500, Currency.EUR, "/img/hat.png")
];