import {lazy, useEffect, useState} from "react"
import ChartLayout from "../../components/ChartLayout.tsx"
import {getTotalEmissions} from "../../services.ts"
import {useFilters} from "../../components/utils.ts"

const TotalEmissionsChart = lazy(() => import("./TotalEmissionsChart.tsx"))

type TData = Awaited<ReturnType<typeof getTotalEmissions>>

const filterData = (data: TData, filters?: string[]) =>
  data.reduce((acc, cur) => (!filters || filters.includes(cur.Scope) ? acc + cur.value : acc), 0)

const TotalEmissions = () => {
  const [data, setData] = useState<TData>()
  const [total, setTotal] = useState<number>()

  useEffect(() => {
    getTotalEmissions().then(data => setData(data))
  }, [])

  const {setFilters} = useFilters(data, filterData, setTotal)

  return (
    <ChartLayout
      total={total}
      chart={<TotalEmissionsChart setFilters={setFilters} data={data} />}
      label={"Total emissions"}
    >
      This graph shows the quantity of CO<sub>2</sub> emissions (in kg) divided by scopes that your company has produced
      over the past several years. The grand total displays the sum of all emissions produced for selected scopes.
    </ChartLayout>
  )
}

export default TotalEmissions
