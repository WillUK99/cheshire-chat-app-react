#LIVE SITE https://cheshire-chat.netlify.app/

A chat application I've created in order for teams to stay in contact with each other, users can be added by the chat room owner. This web application uses React, Firebase and the chat-engine API.

## Technologies 

-HTML -CSS -JS/JSX -React (inc useState and context API) -React-router-dom -Axios -Firebase -Chat-Engine API -Ant-Icons

## About 

Creating this app was an excellent learning experience and has dramatically enhanced my React knowledge. This web application consumes the chat-engine api as well as makes FireBase calls in order to render the chat bubbles and UI. Users can log in with either Google or Facebook sign in and both are extremely intuitive to implement. Once a user has logged in they are redirected thanks to React-router-dom to the chats page. From this page a user can become the mod of a chat and add people from there (see below images). Messages sent from a user in a chat will have a read-receipt to let all chat members see read messages aswell as who has read them. Furthermore a user can attach images to the chat in order for quick file transfers.
 


## Walkthrough 

LOGIN PAGE
![image](https://user-images.githubusercontent.com/76099444/120207907-e0240400-c224-11eb-9cd1-11e9cc035805.png)

CHAT PAGE
![image](https://user-images.githubusercontent.com/76099444/120207770-bc60be00-c224-11eb-85f8-7f41f3f2f79c.png)


In App.js I am importing `{ BrowserRouter as Router, Switch, Route } from "react-router-dom"` to allow for the routing of the pages. Below I am importing my context in order to transfer data between all components wrapped in the `AuthProvider` tags in the render function, I am then importing both the chats and login page for rendering. 

The render function is rendering a div which contains the Browser router, context provider tags and then the switch tag for routing between both pages on the site.

![image](https://user-images.githubusercontent.com/76099444/120208808-d058ef80-c225-11eb-9e10-49c2da96a557.png)


### Auth Context 

Inside of this file I am creating the context needed for the chat app, first storing `React.createContext()` inside `const AuthContext`, then creating a useAuth function which can be used later in order to grab context (this function is being exported). 

Inside of the `AuthProvider` function I am passing children in as props in order for rednering between the  `AuthProvider` tags in App.JS, inside of this function there is a useEffect hook which getting the data from the firebase auth function being imported from `../firebase` this user data is then used to set a user and siwtch the loading state to false in order to redirect to `/chats`. 

![image](https://user-images.githubusercontent.com/76099444/120209839-0ba7ee00-c227-11eb-8378-1734cfa2772d.png)


### Login component

Inside this functional component I'm importing some icons from `@ant-icons` aswell as the auth component inside of my firebase filder in order to make calls to the firebase API to log people in and out with both Google and Facebook.

The render div is simply rendering a card with a title and 2 buttons which onClick will either;
![image](https://user-images.githubusercontent.com/76099444/120211301-af45ce00-c228-11eb-8fd0-61b9a5a77ad6.png)
or
![image](https://user-images.githubusercontent.com/76099444/120211321-b66cdc00-c228-11eb-8ea8-3a007957f509.png)











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
