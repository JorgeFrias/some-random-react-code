This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Notes
## About the project and me
The project is built using Next.js, Typescript, and Jest.

I think is important to say that my experience with React before this project was literally 4 hours (including IDE setup, reading docs, etc). If I keep working with React I will do better code in a couple of weeks, but I tried to follow as many good practices as my understanding of React allowed me to as providing each component with its own scss styles, and keeping them as small as possible.

Previously to these two days + 4 hours, I had no experience with React and neither with any other component-based framework, I did work with Razor Pages, but that's not the same, not even close (I think I like React more).

I tried to learn the suggested Svelte, but it seemed like having way more particularities than React, making me need more time. Probably I'm wrong this was a leap of faith, I just wanted to ship as early as possible, and took a decision.

Also my experience with TS is quite small, but is like any other O.O. language, so I think is not a big deal (I probably had butchered tons of conventions and styles particular to TS).

I did extensive use of Bootstrap 5 for the UI, but I had no time to make it responsive, if you want to see responsive UIs built with Bootstrap 5, you can check my [portfolio](https://jorgefrias.eu), as well as for example the [Pocket Pass Manager Website](https://www.pocketpassmanager.com), as well as [Reliby](https://www.reliby.com).

### About the design
About the design I tried to replicate as close as possible the Figma file, but I do think the design is not the best, not only on subjective terms as how it looks, but also on consistency terms as the color palette, font sizes, font weights, etc. I also added som touches over the design that preserved the original mockup but improved the interactivity as hover states. There is way more about this decisions, thoughts, improvements, etc. on the `DesignNotes.md` file.

### Tests
- The tests are far from complete the only class that has tests is the `Cart`, as a proof of concept.
- I tried to setup UI test but I couldn't make it even compile, clearly I need more time to learn how to do it.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Tests
To run the tests: 

```bash
npm run test
```

## Project structure
The project is structured as follows:
- `src`: Contains the source code.
  - `components`: Contains the React components and their styles. There are several folders to try classify the components.
  - `models`: Contains the types of the project that describe the data.
  - `styles`: Contains the global styles of the project, as well as scss definitions that are used across the project.
- `pages`: Contains the pages of the project, as well as the API routes. None in this case.
- `data`: Contains instances of the data models as described in the challenge README.
- `public`: Contains the public assets of the project (images)
- `app`: Contains the configuration of the app, as well as the index page `page.tsx` that is the entry point of the app.
