import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import KidPage from '../pages/KidPage'
import MenPage from '../pages/MenPage'
import EthenicPage from '../pages/EthenicPage'
import WesternPage from '../pages/WesternPage'
import HomeAndKitchenPage from '../pages/HomeAndKitchenPage'
import BeautyAndHealthPage from '../pages/BeautyAndHealthPage'
import App from '../App'
import ErrorPage from '../pages/ErrorPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/home', element: <Homepage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/kid', element: <KidPage /> },
    { path: '/men', element: <MenPage /> },
    { path: '/ethnic', element: <EthenicPage /> },
    { path: '/western', element: <WesternPage /> },
    { path: '/homeandkitchen', element: <HomeAndKitchenPage /> },
    { path: '/beautyandhealth', element: <BeautyAndHealthPage /> },

    { path: '/cart', element: <CartPage /> },

    { path: '/product/:productId', element: <ProductPage /> },

    { path: '*', element: <ErrorPage /> },
])

export { router }