import {PropsWithChildren, useRef} from "react"
import {Link} from "react-router-dom"
import paths from "../paths.ts"
import bgUrl from "../assets/dandelion-1737324_1920.jpg"

const Title = ({children}: PropsWithChildren) => <h3 className={"text-lg font-semibold tracking-tight"}>{children}</h3>

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

      <div ref={docsRef} className={"relative z-10 flex h-full items-center justify-center bg-gray-100 p-8"}>
        <div className={"max-w-[100rem]"}>
          <h2 className={"text-4xl font-bold tracking-tight"}>Project report</h2>
          <h4 className={"mb-6 font-semibold tracking-tight text-indigo-600"}>Graph visualizations for Moogli</h4>

          <p>
            I decided to go with "pure" React without Next, as I never worked with Next professionally, only on some
            tiny projects long time ago. Since I'm leaving on vacation in few days and I wanted to send it to you before
            it, I did not want to rush learning Next and rather used only what I am familiar with - pure React.
          </p>
          <br />
          <div>
            <Title>How to run locally</Title>
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
            <a href={"https://github.com/JMoss8/moogli-test/"} className={"hover:underline"} target={"_blank"}>
              <code>https://github.com/JMoss8/moogli-test/</code>
            </a>
          </div>
          <div className={"my-4 grid grid-cols-2 gap-8"}>
            <div className={"rounded-lg border border-green-200 bg-green-50 bg-opacity-35 px-4 py-2"}>
              <Title>Wins</Title>
              <ul>
                <li>
                  In the <code>datasets</code> folder you can find your data as <code>.csv</code>. I wrote a parser to
                  get it as JSON. Feel free to change the values in the <code>datasets</code> and run{" "}
                  <code>yarn dev</code>, you'll see your new values in the app locally.
                </li>
                <li>
                  The data are served from the <code>/public</code> folder. I am fetching them from there, which is
                  supposed to mimic back-end - a REST API with GET requests.
                </li>
                <li>For deployment, I used GitHub pages with an YAML pipeline.</li>
              </ul>
            </div>
            <div className={"rounded-lg border border-red-200 bg-red-50 bg-opacity-35 px-4 py-2"}>
              <Title>Problems</Title>
              <ul>
                <li>
                  I did not use any graph library in a long time so I had to choose one. I had a great experience with
                  Ant.design few years ago and wanted to try out their graph library but did not have a chance, until
                  now. It worked fine, just the documentation was a big issue, since it was not very clear and part of
                  it was only in Chinese, which I do not speak and Google Translate is still far from perfect.
                </li>
                <li>
                  The Sunburst chart doesn't support Legend component for filtering, so I had to create a custom one
                </li>
              </ul>
            </div>
          </div>
          <Title>TODOs</Title>
          <ul>
            <li>Responsive design (right now the app supports only PC with "normal" size screens)</li>
            <li>Automated tests</li>
            <li>Improve styling of this page and the design overall</li>
          </ul>
          <br />
          <div>
            Overall, I treated this more like as a fun side project, not as a production ready app. By that I mean I
            used a less known graph library (and did not care of its' longevity) and did not spend time on implementing
            screen-size responsivity, which is in general just time consuming but not that hard to do (at least, in my
            opinion).
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
