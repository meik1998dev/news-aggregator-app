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


# Running with Docker

If you prefer to run the application using Docker, follow these steps:

## Pull the Docker Image

This command pulls the latest version of the Docker image.
```bash
docker pull meik1998/news-aggregator-app:latest
```

## Run the Docker Container

This command starts the application inside a Docker container and makes it accessible via port 8080 on your local machine.

```bash
docker run -d -p 8080:80 meik1998/news-aggregator-app:latest
```

## Access the Application

Open your web browser and navigate to `http://localhost:8080` to view the app.

Ensure Docker is installed on your machine before running these commands. For detailed instructions on installing Docker, visit [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

## Stopping the Docker Container

To stop the running Docker container:

1. Find the container ID using:

```bash
docker ps
```

2. Stop the container by replacing `<container-id>` with your container's ID:

```bash
docker stop <container-id>
```
--------------------------------

