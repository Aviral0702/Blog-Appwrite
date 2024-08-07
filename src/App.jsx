import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch } from 'react-redux';
import authService from './Appwrite/auth.js'
import './App.css'
import envs from './conf/conf'
import { login } from './store/authSlice';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
function App() {
  console.log(envs.appwriteUrl)
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch(login({userData}))
      } else {
        //if data not found then we can update the logic to give logout so that state is always updated
        dispatch(logout)
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        {/* <Outlet/>  */}
        <Footer/>
      </div>
    </div>
  ) : null
}


export default App
