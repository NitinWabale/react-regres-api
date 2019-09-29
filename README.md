# React example working with reqres.in Api

In the project directory, you can run:

### `npm i`
   Install all dependency using this command

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
Please user https://reqres.in/ for Login Cred. 
Sample Cred: `{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}`

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#  Features:
  - Sign up (using Api)
  - Log in (using Api)
  - Get users list (from Api) and save it to redux store
  - Edit a user (sending request to Api) and save changes to redux store
  - Add a new user (sending request to Api) and save changes to redux store
  - Delete a user (sending request to Api) and delete user from redux store
  - Added Load more functionality

# TODO Feature
  - Inline Editing of User
  - Style for Icons

 #  Tech Stack Used:
  - react
  - react-redux
  - redux-saga
  - axios
  - styled-components
  - loadash



