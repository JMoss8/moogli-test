import {ComponentProps, useCallback, useMemo, useState} from "react"
import {Sunburst} from "@ant-design/charts"
import {useOnChartReady} from "../../components/utils.ts"
import {IFuelTypes, TChartProps} from "../../types.ts"
import CustomLegend from "./CustomLegend.tsx"

const colors = ["red", "orange", "blue", "green"]
const colorMap: Record<string, string> = {} // shared among all instances of FuelTypesChart

const config: ComponentProps<typeof Sunburst> = {
  colorField: "Main fuel type",
  innerRadius: 0.4,
  tooltip: false,
  labels: [
    {
      text: "name",
      style: {fontSize: 11, fontWeight: "bold"},
    },
    {
      text: "value",
      style: {fontSize: 14, dy: 16},
    },
  ],
  style: {
    stroke: "#fff",
    radius: 10,
    fill: (d: {"Main fuel type": string}, i: number) => {
      const key = d["Main fuel type"]
      if (!(key in colorMap)) {
        colorMap[key] = colors[i]
      }
      return colorMap[key]
    },
  },
  interaction: false,
}

type TDataType = IFuelTypes & {name: string}

const FuelTypesChart = ({data, filters, setFilters}: TChartProps<IFuelTypes>) => {
  const [colorMapState, setColorMapState] = useState<typeof colorMap>({})

  const callback = useCallback(() => setColorMapState(colorMap), [])
  const onReady = useOnChartReady(setFilters, callback)

  const dataProcessed = useMemo(
    () =>
      data?.reduce(
        (acc, cur) => {
          if (filters && !filters.includes(cur["Main fuel type"])) return acc

          const existing = acc.children.find(e => e["Main fuel type"] === cur["Main fuel type"])
          if (existing) {
            existing.children.push({...cur, name: cur.key})
          } else {
            acc.children.push({...cur, name: cur["Main fuel type"], children: [{...cur, name: cur.key}]})
          }
          return acc
        },
        {children: [] as (TDataType & {children: TDataType[]})[]}
      ),
    [data, filters]
  )

  return (
    <>
      <CustomLegend filters={filters} setFilters={setFilters} colorMapState={colorMapState} />

      <Sunburst {...config} data={{type: "inline", value: dataProcessed}} onReady={onReady} />
    </>
  )
}

export default FuelTypesChart
