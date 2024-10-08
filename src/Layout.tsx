import {Link, Outlet, useLocation} from "react-router-dom"
import {twMerge} from "tailwind-merge"
import {HomeIcon} from "@heroicons/react/24/outline"
import logoSrc from "./assets/logo.svg"
import paths from "./paths.ts"

const links = [
  {
    to: paths.emissionsByLocation,
    label: "Emissions by location",
  },
  {
    to: paths.totalEmissions,
    label: "Total emissions",
  },
  {
    to: paths.fuelTypes,
    label: "Fuel types",
  },
]

const Layout = () => {
  const {pathname} = useLocation()
  return (
    <>
      <aside className={"fixed flex h-full w-72 flex-col bg-gray-900"}>
        <nav className={"p-4"}>
          <Link
            to={"/"}
            title={"Navigate Home"}
            className={
              "group mx-auto mb-4 mt-2 block w-16 rounded-xl bg-gray-900 p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            }
          >
            <img alt={"Moogli logo"} className={"transition-opacity group-hover:opacity-0"} src={logoSrc} />
            <HomeIcon className={"mt-[-100%] opacity-0 transition-opacity group-hover:opacity-100"} />
          </Link>

          <div className={"flex flex-col gap-2"}>
            {links.map(link => {
              const isCurrent = pathname === "/" + link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={twMerge(
                    "flex gap-x-6 rounded-lg px-3 py-1.5 font-semibold leading-6 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white",
                    isCurrent && "pointer-events-none bg-gray-950 text-gray-400"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>

        <footer className={"mt-auto"}>
          <p className={"my-4 text-center text-sm font-semibold text-gray-400"}>Ján Mach 2024</p>
        </footer>
      </aside>

      <section className={"h-full bg-gray-100 pl-72"}>
        <Outlet />
      </section>
    </>
  )
}

export default Layout
