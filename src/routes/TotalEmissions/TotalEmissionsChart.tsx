import {ComponentProps} from "react"
import {Area} from "@ant-design/charts"
import {aggregateForTooltip, useOnChartReady} from "../../components/utils.ts"
import {ITotalEmissions, TChartProps} from "../../types.ts"

const config: ComponentProps<typeof Area> = {
  xField: "key",
  yField: "value",
  colorField: "Scope",
  shapeField: "smooth",
  stack: true,
  axis: {
    y: {title: "kg of CO2"},
  },
  tooltip: {
    title: aggregateForTooltip("key"),
  },
}

const TotalEmissionsChart = ({setFilters, data}: TChartProps<ITotalEmissions>) => {
  const onReady = useOnChartReady(setFilters)

  return <Area {...config} data={{type: "inline", value: data}} onReady={onReady} />
}

export default TotalEmissionsChart
