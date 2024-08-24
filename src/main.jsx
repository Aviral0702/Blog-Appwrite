import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { AuthLayout, Login, SignUp } from './Component/index.js'
import AllPost from './Pages/AllPost.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp/>
          </AuthLayout>
        )
      },
      {
        path: '/all-post',
        element : (
          <AuthLayout authentication={false}>
            {" "}
            <AllPost/>
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication={true}>
            {" "}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element:(
          <AuthLayout authentication={true}>
            {" "}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post/>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
