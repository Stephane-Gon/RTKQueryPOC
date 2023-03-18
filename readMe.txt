RTK QUERY POC

1º SETTING UP SPOTIFY APP (spotify api guide link bellow):
  - Create a spotify app at Spotifys developer dashboard (spotify api dashboard link bellow);

  - After setting up your spotify app, create a .env file and add VITE_CLIENT_ID="Insert your client id here...";

  - Add your REDIRECT_URI(adress to redirect after auth), to your spotify dashboard;


2º Run the development server:
  npm run dev
  # or
  yarn dev


WHAT IS RTK QUERY ???

    RTK Query is a data fetching library for Redux that simplifies and standardizes 
  the process of making API calls. 
    It provides a powerful and flexible API for defining API endpoints, handling caching and deduplication, 
  and managing request lifecycles.

  Some of the key features of RTK Query include:

    - Automatic caching and deduplication of API requests
    - Support for pagination, filtering, and sorting
    - Standardized error handling and request lifecycle events
    - Configurable and extensible middleware system
    - Integration with Redux Toolkit and React hooks
    - TypeScript support out of the box

  Overall, RTK Query aims to simplify the development of complex applications that rely heavily on remote data fetching. 
  It's a powerful tool that can help you improve the performance and reliability of your code while reducing boilerplate and improving readability.


LINKS:
  - RTK QUERY DOCUMENTATION: https://redux-toolkit.js.org/rtk-query/overview
  - SPOTIFY API GUIDE: https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn
  - SPOTIFY API DASHBOARD: https://developer.spotify.com/dashboard/login




