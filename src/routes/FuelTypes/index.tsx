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

  const {filters, setFilters} = useFilters(data, filterData, setTotal)

  return (
    <ChartLayout
      total={total}
      chart={<FuelTypesChart data={data} filters={filters} setFilters={setFilters} />}
      label={"Fuel types"}
    >
      This graph shows the main fuel types used and provides details on how much emissions each specific type of fuel
      produced. You can filter by the main fuel types. The grand total displays all the emissions produced across the
      selected fuel types.
    </ChartLayout>
  )
}

export default FuelTypes
