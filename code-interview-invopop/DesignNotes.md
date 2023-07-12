# About the design and implementation notes

## General Notes
- I'm using `rem` units for the font sizes, so the design better adapts to different screen sizes (good practice). So I converted most `px` values to `rem` values assuming a base font size of 16px (1rem = 16px).

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