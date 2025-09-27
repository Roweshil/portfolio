import './App.css'
import { lazy } from 'react'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

import { Suspense } from 'react'


const lazyHomePage = lazy(() => import('./pages/HomePage.jsx'))
const lazyAboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const lazyProyectPage = lazy(() => import('./pages/ProyectPage.jsx'))
const lazyPage404 = lazy(() => import('./pages/404.jsx'))

const appRoutes = [
  
]

function App() {
  

  return (
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Router routes={appRoutes} defaultComponent={lazyPage404}>
          <Route path='/' Component={lazyHomePage} />
          <Route path='/about' Component={lazyAboutPage} />
          <Route path='/proyects' Component={lazyProyectPage} />
        </Router>
      </Suspense>
  )
}

export default App
