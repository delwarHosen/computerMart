import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './utils/router'

function App() {

  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
