import {PropsWithChildren, ReactNode, Suspense} from "react"
import Counter from "./Counter.tsx"
import Spinner from "./Spinner.tsx"

type TChartLayoutProps = {
  chart: ReactNode
  label: ReactNode
  total: number | undefined
}

const ChartLayout = ({chart, label, total, children}: PropsWithChildren<TChartLayoutProps>) => (
  <div className={"flex h-full flex-col px-12 py-8"}>
    <div className={"mb-6 flex justify-between gap-4"}>
      <div>
        <h1 className={"text-3xl font-bold text-gray-900"}>{label}</h1>
        <h2 className={"text-base font-semibold tracking-tight text-indigo-600"}>Data visualization</h2>

        <p className={"mt-2 text-lg leading-8 text-gray-600"}>{children}</p>
      </div>

      <div className={"relative mt-auto text-right"}>
        <h3 className={"text-xl font-semibold"}>Grand total</h3>
        <div className={"font-mono text-6xl font-black text-indigo-600 drop-shadow-lg"}>
          {total == undefined ? <Spinner /> : <Counter value={total} />}
        </div>
        {total != undefined && (
          <span className={"absolute bottom-[-.625rem] right-0 text-sm font-normal text-gray-400"}>
            (kg of CO<sub>2</sub>)
          </span>
        )}
      </div>
    </div>

    <div className={"grow rounded-3xl bg-white px-2 py-1 shadow-2xl"}>
      <div className={"h-full"}>
        <Suspense fallback={<Spinner className={"h-full content-center text-center text-7xl"} />}>{chart}</Suspense>
      </div>
    </div>
  </div>
)

export default ChartLayout
