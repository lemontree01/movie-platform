import {Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfiguration } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>sdaas</div>}>
    <Routes>
      {routeConfiguration.map(({props: {path, element}}) => <Route key={path} {...{ path, element }}/>)}
    </Routes>
    </Suspense>
  )
}
