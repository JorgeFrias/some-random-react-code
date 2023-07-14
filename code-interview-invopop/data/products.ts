import { Product } from '../src/models/product';
import { Currency } from '../src/models/currency';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.";

export const products: Product[] = [
    new Product("T-Shirt", "TSHIRT", 2000, Currency.EUR, "/img/shirt.png", loremIpsum),
    new Product("Coffee Mug", "MUG", 750, Currency.EUR, "/img/cup.png", loremIpsum),
    new Product("Cap", "CAP", 500, Currency.EUR, "/img/hat.png", loremIpsum)
];