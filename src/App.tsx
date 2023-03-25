import React, { FC, Suspense } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { Loading } from './components/Loading/Loading'

import { MainLayout } from './layouts/MainLayout'
// import Episodes from './pages/Episodes/Episodes'
import Home from './pages/Home/Home'
import SingleCharacter from './pages/SingleCharacter/SingleCharacter'

import './scss/app.scss'

const Characters = React.lazy(
  () =>
    import(/*webpackChunkName: "Characters"*/ './pages/Characters/Characters')
)

const Episodes = React.lazy(
  () => import(/*webpackChunkName: "Episode"*/ './pages/Episodes/Episodes')
)
const Locations = React.lazy(
  () => import(/*webpackChunkName: "Locations"*/ './pages/Locations/Locations')
)

export const App: FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path='/characters'
          element={<Characters />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/characters/:id/:name'
          element={<SingleCharacter />}
          errorElement={<p>Error loading package location!</p>}
        />
        <Route
          path='/episodes'
          element={<Episodes />}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/locations'
          element={<Locations />}
          errorElement={<ErrorPage />}
        />
      </Route>
    )
  )
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
