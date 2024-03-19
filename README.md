# News Aggregator App

This React, TypeScript, and Vite app aggregates news from multiple sources, providing a unified interface for users to browse, search, and filter news items based on various criteria like source, category, and date.

## Features

### Dynamic News Fetching

- Aggregates news from multiple sources including The Guardian, The New York Times, and others through a unified API.
- Utilizes a custom hook (`useFetchAllNews`) to fetch and manage news items state across the application.

### Infinite Scrolling

- Implements infinite scrolling for seamless browsing experience.
- Utilizes a custom hook (`useObserver`) to detect when the user has scrolled to the bottom of the page, triggering the next batch of news items to load.

### Context-based State Management

- Manages application-wide state using React Context and custom providers for filters, news items, sources, and categories.
- Allows for efficient filtering and state updates across different components of the application.

### Advanced Filtering

- Offers multiple filters for news items including keyword search, source selection, category selection, and date range filtering.
- Utilizes custom components like `SearchInput`, `CategoriesCombobox`, `SorucesCombobox`, and `DatePicker` for user inputs.

### Responsive Design

- Ensures a responsive layout that adapts to various screen sizes and devices.
- Incorporates a mobile-friendly filter interface (`MobileFilter`) for convenient access on smaller screens.

## How to Build and Run

1. **Clone the repository**
   git clone <repository-url>

2. **Navigate to the project directory**
   cd <project-name>

3. **Install dependencies**
   npm install

4. **Run the project in development mode**
   npm run dev

This command will start the Vite dev server, and you can view the app in your browser by navigating to `http://localhost:5173`.

5. **Build the project for production**
   npm run build

This command will generate a `dist` folder with all the static files needed for deployment.

6. **Preview the production build**
   npm run preview

This allows you to locally preview the production build of your app.

Ensure you have Node.js and npm installed on your machine before running these commands.
