import {lazy, useEffect, useState} from "react"
import {getEmissionsByLocation} from "../../services.ts"
import {useFilters} from "../../components/utils.ts"
import ChartLayout from "../../components/ChartLayout.tsx"

const EmissionsByLocationChart = lazy(() => import("./EmissionsByLocationChart.tsx"))

type TData = Awaited<ReturnType<typeof getEmissionsByLocation>>

const filterData = (data: TData, filters?: string[]) =>
  data.reduce((acc, cur) => (!filters || filters.includes(cur.key) ? acc + cur.value : acc), 0)

const FuelTypes = () => {
  const [data, setData] = useState<TData>()
  const [total, setTotal] = useState<number>()

  useEffect(() => {
    getEmissionsByLocation().then(data => setData(data))
  }, [])

  const {setFilters} = useFilters(data, filterData, setTotal)

  return (
    <ChartLayout
      total={total}
      chart={<EmissionsByLocationChart data={data} setFilters={setFilters} />}
      label={"Emissions by location"}
    >
      This graph visualizes the total CO<sub>2</sub>e emissions of the company's locations and splits them into the
      three main greenhouse gases. The grand total shows the sum of CO<sub>2</sub>e emissions, which can be filtered by
      the type of greenhouse gas.
    </ChartLayout>
  )
}

export default FuelTypes
