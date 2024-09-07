import {lazy, useEffect, useState} from "react"
import ChartLayout from "../../components/ChartLayout.tsx"
import {getFuelTypes} from "../../services.ts"
import {useFilters} from "../../components/utils.ts"

const FuelTypesChart = lazy(() => import("./FuelTypesChart.tsx"))

type TData = Awaited<ReturnType<typeof getFuelTypes>>

const filterData = (data: TData, filters?: string[]) =>
  data.reduce((acc, cur) => (!filters || filters.includes(cur["Main fuel type"]) ? acc + cur.value : acc), 0)

const FuelTypes = () => {
  const [data, setData] = useState<TData>()
  const [total, setTotal] = useState<number>()

  useEffect(() => {
    getFuelTypes().then(data => setData(data))
  }, [])

  const setFilters = useFilters(data, filterData, setTotal)

  return (
    <ChartLayout total={total} chart={<FuelTypesChart data={data} setFilters={setFilters} />} label={"Fuel types"}>
      This graph shows the main fuel types used and in detail what specific types of fuel how much emissions produce.
      You can filter by main fuel types. The grand total shows all the emissions produced across selected fuel types.
    </ChartLayout>
  )
}

export default FuelTypes
