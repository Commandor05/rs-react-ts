# rs-react-ts

## React. Components

### What should be done:

1. Create a separate branch for this task.
2. You have to use Typescript! We recommend using [Vite](https://vitejs.dev/guide/) with the template [_react-ts_](https://vite.new/react-ts). Alternatively you can use CRA with the template _--typescript_ (please, take a look at [this comment](https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741) from Dan Abramov).
3. Set up eslint and prettier so that the project would not build if there are errors. Use [configs](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md). Add command to you package.json file to run linting command.
4. Add React-Router version 6. Add header which shows the current page. Also add pages “About Us”, “404”. If user will input unknown route into url – application should redirect to “404”.
5. Draw the following on the main page:

- Search Bar.\
  examples:\
  https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png \
  https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg \
  Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it.
- Cards. The more details are on the card – the better.\
  examples: \
  https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg \
  https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg \
  https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg \
  **Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

6. Setup test runner if necessary. You can use either [Jest](https://jestjs.io/docs/getting-started) or [Vitest](https://vitest.dev/guide/)
   Add tests for components. Add test for one card, as well as tests for the list of all cards. You can use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Some time ago [Enzyme](https://enzymejs.github.io/enzyme/) was an alternative, but it is not compatible with the latest version of React.
   When ran, tests should show the coverage (you will be gradually increasing test coverage during next modules)
   Add command to your package.json file to run tests.
   Snapshot testing is forbidden in all modules (you can check [the documentation of what is snapshot testing with Jest](https://jestjs.io/docs/snapshot-testing))

All logical parts should be set into separate components.
