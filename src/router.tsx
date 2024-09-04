import {createBrowserRouter} from "react-router-dom"
import Layout from "./Layout.tsx"
import paths from "./paths.ts"
import Home from "./routes"

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    index: true,
    element: <Home />,
  }, {
    path: paths.emissionsByLocation,
    element: <h1>emissionsByLocation</h1>,
  }, {
    path: paths.totalEmissions,
    element: <h1>totalEmissions</h1>,
  }, {
    path: paths.fuelTypes,
    element: <h1>fuelTypes</h1>,
  }],
}])

export default router
