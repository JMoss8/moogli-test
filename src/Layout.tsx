import {Link, Outlet, useLocation} from "react-router-dom"
import {twMerge} from "tailwind-merge"
import {HomeIcon} from "@heroicons/react/24/outline"
import paths from "./paths.ts"

const links = [{
  to: paths.emissionsByLocation,
  label: "Emissions by location",
}, {
  to: paths.fuelTypes,
  label: "Fuel types",
}, {
  to: paths.totalEmissions,
  label: "Total emissions",
}]

const Layout = () => {
  const {pathname} = useLocation()
  return (
    <>
      <aside className={"w-72 flex flex-col grow h-full fixed bg-gray-900 "}>
        <nav className={"flex flex-col gap-2 p-4"}>
          <Link
            to={"/"}
            title={"Company logo"}
            className={"hover:text-white text-gray-300 p-2 hover:bg-gray-800 w-16 m-auto rounded-xl transition-colors"}
          >
            <HomeIcon />
          </Link>

          {links.map(link => {
            const isCurrent = pathname === "/" + link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={twMerge(
                  "text-gray-300 hover:bg-gray-800 hover:text-white flex gap-x-6 rounded-lg px-3 py-1.5 font-semibold leading-6 transition-colors",
                  isCurrent && "text-gray-400 pointer-events-none bg-gray-950",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <footer className={"mt-auto"}>
          <p className={"text-gray-400 text-center my-4 text-sm font-semibold"}>Ján Mach 2024</p>
        </footer>
      </aside>

      <section className={"pl-72"}>
        <Outlet />
      </section>
    </>
  )
}


export default Layout
