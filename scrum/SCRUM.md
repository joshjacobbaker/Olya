# Backlog

- [Nested Layout Grid, Responsive]("")
- [Framer-Motion]("")
- [GraphQL Client & Server?]("")
- [State Manager... Redux with Observers?]("")
- [Express Server?]("")
- [API]("")
- [ICR]("")
- [SSG]("")
- [SSR]("")
- [CMS]("")

- [Husky Linting]("https://github.com/typicode/husky")
- [Add Jest Testing to MonoRepo...?]("")
- [Tailwind & MaterialUI]("https://www.youtube.com/watch?v=QQIfuMlA6TI")
- [Neon in Tailwind & NextJs with next-theme package]("https://www.youtube.com/watch?v=04w0qmT7wKQ")

- [Next.js Layout]("https://www.youtube.com/watch?v=9g_3Zsoj17I")

- [Multi-Zones _combine two apps into one website_]("https://nextjs.org/docs/advanced-features/multi-zones")
- [Web Vitals via NEXTJS]("https://nextjs.org/docs/advanced-features/measuring-performance")
- [Nextjs + Storybook + MSW]("https://www.youtube.com/watch?v=J-HuWEPm8vA")

- [SSG and Client side fetch vs SSR]("")
- [React Component Server Side Rendered?]("")
- [NextJS env variables & advanced NextJS Framework concepts]("https://www.youtube.com/watch?v=EJVGzyWSCBE&t=76s")

**Semantic HTML**

- [Semantic HTML -- How many "main" elements can I have? How should I structure the HTML tree, A11y accessibility?]("https://www.youtube.com/watch?v=ZThq93Yuwd0")

  - [Can be more than 1 header... header>nav]("")
  - [Only 1 main element per page.... main>section>article>aside>details>summary]("https://www.youtube.com/watch?v=kGW8Al_cga4")
  - [Can be more than 1 footer... footer>nav]("")
  - [div & spans do not have any semantic meaning]("")

  **Deployment/Production**

  - [Test Network calls from Vercel for NextJS Apps--caching, SSR, SSG, Ttfb, etc.]("") -[header tag around NavBar? Or within main?]("")
  - [Remote Vercel Cache of TurboRepo]("")
    **MonoRepo Management**
  - [remove unwanted root level packages from node_modules and package.json]("")
    **UI/UX**
  - [Overlay when clicking on Menu Icon]("")

# WIP

**Dark Themes**

- [apps/portfolio createContext + next-themes]("")
- [Icon Library Sun & Moon for Dark & Light Theme]("")

**App Layout**

- [Mason Grid]("https://www.youtube.com/watch?v=kuY9MehvHh4")
- [Responsive Design, Mobile First]("")

** TailwindCSS Animations**

- [TailwindCSS Animations]("https://www.youtube.com/watch?v=y6Nw8pURu8Y&list=PLYHXTr4kGJjG0_h7lZa3jM4l9syvPbf_4&index=1")

**TailwindCSS Config**

- [Add Tailwind to Storybook App]("")
- [clsx classNames Tailwind]("https://www.npmjs.com/package/clsx")
- [TailwindCSS @layer component @apply text-size for typographies... header1, buttons, etc. on different screen sizes]("")
- [Create Shared tailwind.config.js configuration for apps/\*]("")
- [npx tailwindcss init --full ......want entire configuration with all classes]("")

# Finished

**Dark Mode from Scratch _React Context & UseContext to pass down next-themes properties down to shared UI components_**

-[UseContext]("https://www.youtube.com/watch?v=5LrDIWkK_Bc")

- [From Scratch... Theme TypeScript NextJS TailwindCSS React.Context]("https://javascript.plainenglish.io/how-to-implement-dark-light-themes-in-a-next-js-app-using-context-hook-tailwindcss-336558dd4579")
  - [Github Repo of solution]("https://github.com/joshjacobbaker/nextjs-tailwind-dark-theme?organization=joshjacobbaker&organization=joshjacobbaker")
- [Changing Themes through useContext]("https://www.youtube.com/watch?v=QBfh7D8URnc")

**Dark Mode next-themes**

- [NextJS & Tailwind CSS via next-theme package Dark MODE]("https://www.youtube.com/watch?v=z2B3gRt2nj0")
  - Establish base defaults for dark mode throughout all HTML elements within the globals.css @layer base {body {@apply dark:bg-blue-300; }}
  - [npmjs documentation]("https://www.npmjs.com/package/next-themes?activeTab=readme")
- [Dark Mode with React & TailwindCSS -- no packages, React.Context!]("https://www.youtube.com/watch?v=znU2RD0vGJY")
- [Dark Mode w/Tailwind & VanillaJS]("https://www.youtube.com/watch?v=hGHk5eS5MkA&list=PLCvPStjGyw0dkfGTHZwg9vzXJ6Rv8TwWh&index=15")

  - [Simple way to setup DarkMode with Tailwind & React]("https://www.youtube.com/watch?v=9U1UG-bY8Cw&list=PLYHXTr4kGJjG0_h7lZa3jM4l9syvPbf_4&index=10")
  - [state hook in layout that wraps \_app.tsx]("https://www.youtube.com/watch?v=2IfTD-muRF4")
  - [Context wrapped around \_app.tsx component storing toggle state?]("")
  - [className="dark" on body html tag]("")
  - [toggle button for sun/moon light/dark modes]("")

  **_ Typography _**

  - [text-overflow](""https://tailwindcss.com/docs/text-overflow)

  **_ TypeScript _**

- [Adding prop types to children within ui/components/layout]("https://www.carlrippon.com/react-children-with-typescript/")

**_ Turbo Repo _**

- [setup monorepo with turbo repo]("")

**_ NextJS _**

- [with-tailwindcss NextJS start for portfolio]("pnpm create next-app --example with-tailwindcss .")
- [with-tailwindcss NextJS start for blog]("pnpm create next-app --example with-tailwindcss .")
- [NextJS Storybook Example Starter Kit for Storybook]("https://github.com/vercel/next.js/tree/canary/examples/with-storybook-styled-jsx-scss")
- [Nested Layouts]("https://www.youtube.com/watch?v=WOeLxL2DF3E")
- [\_Document setup google analytics 404.tsx page \_Error.tsx page]("https://www.youtube.com/watch?v=kyZohU8RHgw")
- [Clean NextJS starter code out, & add UI components]("")
- [\_app.tsx <Component/> error during build, fix was to add a overides/resolution within the package.json for @types/react and @types/react-dom]("https://github.com/vercel/next.js/issues/36019")

**_ Deploying to Production _**

- [Setup github repository]("")
- [deploy to Vercel]("https://www.youtube.com/watch?v=_sB2E1XnzOY")
- [deploy blog to Vercel]("https://www.youtube.com/watch?v=_sB2E1XnzOY")
- [deploy portfolio to Vercel]("https://www.youtube.com/watch?v=_sB2E1XnzOY")
