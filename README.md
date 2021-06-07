# frontend-template

This is a basic setup for projects using React and TypeScript.  
I keep it on GitHub for easy access, feel free to use it for anything you want.

## Frameworks

* React 17
* Tailwind 2
* TypeScript 4

## Tooling

* Webpack 5
* Jest (with `ts-jest`)
* ESLint with recommended rules
* Prettier

# Usage

Main entry is `src/js/main.tsx`, update it and remove the following;
* `src/component.tsx`
* `src/component.test.tsx`
* `test/component.test.tsx`

# Tests

You can place tests in `src/*.test.ts(x)` or in `tests/*.test.ts(x)`,
Jest runs with `ts-jest` so your tests needs to be correctly typed.

React Testing Library is included with the additional `@testing-library/jest-dom`
library to support more browser aligned tests.

`msw` is used to mock the network layer.
