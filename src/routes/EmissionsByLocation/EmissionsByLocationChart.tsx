import {ComponentProps} from "react"
import {Column} from "@ant-design/charts"
import {aggregateForTooltip, useOnChartReady} from "../../components/utils.ts"
import {IEmissionsByLocation, TChartProps} from "../../types.ts"

const config: ComponentProps<typeof Column> = {
  xField: "Location",
  yField: "value",
  colorField: "key",
  stack: true,
  axis: {
    y: {title: "kg of CO2"},
  },
  tooltip: {
    title: aggregateForTooltip("Location"),
  },
}

const EmissionsByLocationChart = ({data, setFilters}: TChartProps<IEmissionsByLocation>) => {
  const onReady = useOnChartReady(setFilters)

  return <Column {...config} data={{type: "inline", value: data}} onReady={onReady} />
}

export default EmissionsByLocationChart
