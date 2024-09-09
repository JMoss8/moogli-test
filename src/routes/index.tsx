import {PropsWithChildren, useRef} from "react"
import {Link} from "react-router-dom"
import paths from "../paths.ts"
import bgUrl from "../assets/dandelion-1737324_1920.jpg"

const Title = ({children}: PropsWithChildren) => (
  <h3 className={"mb-2 text-lg font-semibold tracking-tight"}>{children}</h3>
)

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
            className="absolute inset-y-0 right-0 block h-full w-80 translate-x-1/2 transform fill-white drop-shadow-extreme"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative flex h-full items-center bg-white">
            <div className={"pl-16"}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hello&nbsp;Moogli!</h1>
              <p className="mt-6 whitespace-nowrap text-lg leading-8 text-gray-600">
                I've completed the web app project from the assignment you sent me.
                <br />
                You can read about my experience building it and review the report below,
                <br />
                or go directly to see the first chart.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  onClick={() => docsRef.current?.scrollIntoView({behavior: "smooth"})}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

      <div ref={docsRef} className={"relative z-10 flex h-full items-center justify-center bg-gray-100 p-8"}>
        <div className={"max-w-[100rem]"}>
          <h2 className={"text-4xl font-bold tracking-tight"}>Project Report</h2>
          <h4 className={"mb-6 font-semibold tracking-tight text-indigo-600"}>Graph Visualizations for Moogli</h4>

          <p>
            I decided to go with "pure" React without Next, as I haven't worked with Next professionally before, only on
            some tiny projects a long time ago. Since I'm leaving for vacation in a few days and wanted to send this to
            you beforehand, I chose to use what I am already familiar with - pure React - rather than rush learning
            Next.
          </p>
          <br />
          <p>
            I haven't used a graph library in a long time, so I had to choose a new one. I had a great experience with
            Ant.design a few years ago and wanted to try out their graph library but had not had the chance-until now. I
            had great experience with Tailwind, especially for prototyping and quick development. For deployment, I used
            GitHub Pages with a YAML pipeline. I think it shouldn't be needed to talk about why I used TypeScript, Vite,
            ESLint and Prettier.
          </p>
          <br />
          <div>
            <Title>How to Run Locally</Title>
            <ol>
              <li>
                <code>git clone https://github.com/JMoss8/moogli-test.git</code>
              </li>
              <li>
                <code>yarn</code>
              </li>
              <li>
                <code>yarn dev</code>
              </li>
            </ol>
            You can find the source code here:{" "}
            <a href={"https://github.com/JMoss8/moogli-test/"} className={"underline"} target={"_blank"}>
              <code>https://github.com/JMoss8/moogli-test/</code>
            </a>
          </div>
          <br />
          <div className={"my-4 grid grid-cols-2 gap-8"}>
            <div className={"rounded-lg border border-green-200 bg-green-50 bg-opacity-35 px-4 py-2"}>
              <Title>Wins</Title>
              <ul>
                <li>
                  In the <code>datasets</code> folder, you can find your data as <code>.csv</code>. I wrote a parser to
                  convert it to JSON. Feel free to change the values in the <code>datasets</code> and run{" "}
                  <code>yarn dev</code>, and you'll see the updated values reflected in the app locally.
                </li>
                <li>
                  The data is served from the <code>/public</code> folder. I am fetching it from there, which is meant
                  to mimic a back-end-like a REST API with GET requests.
                </li>
              </ul>
            </div>
            <div className={"rounded-lg border border-red-200 bg-red-50 bg-opacity-35 px-4 py-2"}>
              <Title>Problems</Title>
              <ul>
                <li>
                  Ant Design Charts work fine, but the documentation was a challenge. It isn't very clear, missing a lot
                  of info and some parts are available only in Chinese - which I don’t speak and Google Translate is
                  still far from being perfect.
                </li>
                <li>
                  The Sunburst chart doesn't support a Legend component for filtering, so I had to create a custom one.
                </li>
                <li>
                  I wanted to use the React experimental{" "}
                  <a className={"underline"} target={"_blank"} href={"https://react.dev/reference/react/use"}>
                    <code>use</code>
                  </a>{" "}
                  API but it did not work as I'd expect.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <Title>TODOs</Title>
          <ul>
            <li>Responsive design (currently, the app only supports PC screens of "normal" size)</li>
            <li>Automated tests</li>
            <li>Improve the styling of this page and the overall design</li>
          </ul>
          <br />
          <div>
            Overall, I treated this project more as a fun side project than a production-ready app. By that, I mean I
            used a less popular graph library (without concern for its longevity) and didn’t focus on implementing
            screen-size responsiveness, which is more time-consuming than difficult, at least in my opinion.
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
