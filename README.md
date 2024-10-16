# Game Hub React App

- A `React` application wrote in `TypeScript`
- This application is a final project for practised my `React` and `TypeScript` skills

## App Features

- Showing game data like name, platforms for these games, rating, critic score and so on
- Filtering games by Genres
- Filtering games by Platform
- Searching in games
- Sorting games by sever elements
- Dark and Light mode
- Simple animations
- Infinite scrolling
- View details of the game like screenshots, description, trailer and game attributes

## Server

- `Vite` was used as deveplopment server for run my app
- Data were obtained by `API` provided by [rawg.io](https://rawg.io) -> here I created an account and I got a `API key` for authorization
- My app showing data about games, platforms and games genres to the customer

## Used Frameworks

- `Tailwind CSS` for styling
- `Vite` for development server and React template
- `Shadcn UI` for React components

## Used `npm` Packages

- `react-icons` for many icons
- `axios` axios for easy http comunication
- `dotenv` for managing enviroment variables
- `@tanstack/react-query` for fetching data
- `react-infinity-scroll-component` for infinite scrolling
- `zustand` library for Client State Managment
- `simple-zustand-devtool` for debugging data states in app
- `react-router-dom@6.10.0` foo navigation throught the project

## Practised Terms

- Connection to the backend
- Fetching data from server and canceling a fetch request
- Working with `React-query` library for fetching data
- Creating React Components
- Learning `Tailwind CSS` and `Shadcn UI` in detail
- Rendering data dynamically
- Handling events for user responses
- Detailed familiarization with `useState`, `useEffect` and `useRef hooks`
- Sharing state between components
- Using State Managing Devtool `Zustand` (`gameQuery` object)
- Inspecting result by `Chrome React Developer Tools`
- Correct display of icons and images
- Implementation responive design
- `Separation of Concerns`
- Use navigation between pages in a project via `React Router` library
- Showing loading elements like skeletons and loading spinner
- Creating a generic classes and custom fetching hook for server data managing
- Store and show some data as a static data
- Build application and prepare app to production

## Useful Commads

- `npm run dev` for running an app by development server
- `npm run build` for building an app
- `vercel` for app deployment

## Projekt Structure - src Folder

- **src**
  - **assets**
    - Static files like images, logos and placeholders
  - **components**
    - All React components used by application
  - **data**
    - Static data downloaded drom server
  - **entities**
    - Files which describe all server data representing objects
  - **hooks**
    - Definition of all `custom hooks`
  - **pages**
    - Files representing single pages of application
  - **services**
    - Files helping with diferent logic in app
  - **App.tsx**
    - Component representing whole application
  - **gameQueryStore**
    - File helping with centralization of Global State managment of object `ReactQuery`
  - **main.tsx**
    - Entry point of whole application
  - **routes.tsx**
    - Definition of `Routes` for navigation through application

## App Deployment

- I made app deployment by `Vercel` and `GitHub` -> [GitHub repository](https://github.com/BercikOndrej/React-game-hub)
- It is a cloud platform for building and deploing application
- An address, where my app is running is random generated -> **it is available only by vercel account authenticate and I get it on my vercel account**
