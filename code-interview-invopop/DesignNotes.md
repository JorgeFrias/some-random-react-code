# About the design and implementation notes

## General Notes
- I'm using `rem` units for the font sizes, so the design better adapts to different screen sizes (good practice). So I converted most `px` values to `rem` values assuming a base font size of 16px (1rem = 16px).
- I decided to add Bootstrap to make the design responsive, as it's a good practice to use a framework for this purpose, and it's the one I'm most familiar with.
- The preview images I downloaded from the Figma file already show the border and corner radius, I added the border on top that's why it looks weird (thick and fuzzy border), once you place the correct images it will look as expected.

## Buttons
### Large Button Component
- The design doesn't contemplate a hover state, I added one.
- The design isn't consistent in the font weight of the buttons, I left the boldest one, as it's the most prominent (good for a call to action). This is a 800, the design also uses a 350 for a button that seems to be equal.

### Inline Button Component
- The +/- buttons are not consistent in size with the product card title (that is a button), I left the same size as the title.
- The +/- buttons should have at least a hover state that shows the target area, I added one, as the - button area is pretty small.

# General elements
- The dividers are not consistent, I choose the one that uses opacity as can work better over different backgrounds.
- Pricing. The design only considers whole numbers for the price, I added a decimal part to the price if the price provided has it, keeping exclusively the whole number for integer prices.

## TODO/Improvements
- It's missing the button on click effect.
- Buttons the - button should be disabled when the quantity is 0.
- Discount list on hover could show the discount description, nice touch.
- Feedback on the button. The modal when add to cart needs some feedback, the simplest one changing the text to "added to cart" is enough, a cool animation moving the product to the cart would be nice.

# Duhhhh things
- All discounts should be computed on the server side, as they are business logic, and the client should only display the results. As well as prices, totals, etc...