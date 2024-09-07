import {createBrowserRouter} from "react-router-dom"
import Layout from "./Layout.tsx"
import paths from "./paths.ts"
import Home from "./routes"
import EmissionsByLocation from "./routes/EmissionsByLocation"
import FuelTypes from "./routes/FuelTypes"
import TotalEmissions from "./routes/TotalEmissions"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: paths.emissionsByLocation,
        element: <EmissionsByLocation />,
      },
      {
        path: paths.totalEmissions,
        element: <TotalEmissions />,
      },
      {
        path: paths.fuelTypes,
        element: <FuelTypes />,
      },
    ],
  },
])

export default router
