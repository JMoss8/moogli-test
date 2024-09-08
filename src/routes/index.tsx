import {useRef} from "react"
import {Link} from "react-router-dom"
import paths from "../paths.ts"
import bgUrl from "../assets/dandelion-1737324_1920.jpg"

const Home = () => {
  const docsRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="relative z-20 flex h-full overflow-hidden shadow-lg">
        <div className="relative z-10 h-full max-w-4xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="drop-shadow-extreme absolute inset-y-0 right-0 block h-full w-80 translate-x-1/2 transform fill-white"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative flex h-full items-center bg-white">
            <div className={"pl-16"}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hello&nbsp;Moogli!</h1>
              <p className="mt-6 whitespace-nowrap text-lg leading-8 text-gray-600">
                I've prepared the web app project from the assignment you send me.
                <br />
                You can read about my experience building it and check the docs below
                <br />
                or go directly to see the first chart.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  onClick={() => docsRef.current?.scrollIntoView({behavior: "smooth"})}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Read my report
                </button>
                <Link to={paths.emissionsByLocation} className="group text-sm font-semibold leading-6 text-gray-900">
                  Go to the first chart{" "}
                  <span aria-hidden="true" className={"transition-all group-hover:ml-1"}>
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-full w-full bg-gray-50 bg-cover bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url("${bgUrl}")`,
            backgroundPosition: "25% 75%",
          }}
        >
          <a
            href={"https://pixabay.com/photos/dandelion-seeds-moss-dew-dewdrops-1737324/"}
            target={"_blank"}
            className={
              "absolute bottom-2 right-3 text-sm text-gray-300 transition-colors hover:text-white hover:underline"
            }
          >
            Image by Virvoreanu-Laurentiu from Pixabay
          </a>
        </div>
      </div>

      <div ref={docsRef} className={"relative z-10 h-full bg-gray-100 p-8"}>
        <h3>Wins</h3>
        <ul>
          <li>
            In the <code>datasets</code> folder you can find your data as <code>.csv</code>. I wrote a parser to get it
            as JSON. Feel free to change the values "in the <code>datasets</code>" and run <code>yarn dev</code>, you'll
            see your new values in the app.
          </li>
        </ul>
        <h3>Problems</h3>
        <ul>
          <li></li>
          <li>The Sunburst chart doesn't support Legend component for filtering, so I had to create a custom one</li>
        </ul>
        <h3>TODOs</h3>
        <ul>
          <li>Responsiveness (right now the app supports only PC with "normal" size screens)</li>
          <li>Automated tests</li>
        </ul>
      </div>
    </>
  )
}

export default Home
