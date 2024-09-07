import {ComponentProps} from "react"
import {Column} from "@ant-design/charts"
import {aggregateForTooltip, useOnChartReady} from "../../components/utils.ts"
import {IFuelTypes, TChartProps} from "../../types.ts"

const config: ComponentProps<typeof Column> = {
  xField: "key",
  yField: "value",
  colorField: "Main fuel type",
  axis: {
    y: {title: "kg of CO2"},
  },
  tooltip: {
    title: aggregateForTooltip("Main fuel type"),
  },
}

const FuelTypesChart = ({data, setFilters}: TChartProps<IFuelTypes>) => {
  const onReady = useOnChartReady(setFilters)

  return <Column {...config} data={{type: "inline", value: data}} onReady={onReady} />
}

export default FuelTypesChart
