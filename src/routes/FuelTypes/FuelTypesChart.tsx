import {ComponentProps, useMemo, useRef, useState} from "react"
import {Sunburst} from "@ant-design/charts"
import {useOnChartReady} from "../../components/utils.ts"
import {IFuelTypes, TChartProps} from "../../types.ts"
import CustomLegend from "./CustomLegend.tsx"

const colors = ["red", "orange", "blue", "green"]

const baseConfig: ComponentProps<typeof Sunburst> = {
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
  },
  interaction: false,
}

type TDataType = IFuelTypes & {name: string}

const FuelTypesChart = ({data, filters, setFilters}: TChartProps<IFuelTypes>) => {
  const [count, setCount] = useState(0)
  const colorMap = useRef<Record<string, string>>({})

  const onReady = useOnChartReady(setFilters)

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

  const config = useMemo(
    () => ({
      ...baseConfig,
      style: {
        ...baseConfig.style,
        fill: (d: {"Main fuel type": string}, index: number) => {
          const type = d["Main fuel type"]
          if (!(type in colorMap.current)) {
            colorMap.current[type] = colors[index % colors.length]
            setCount(old => old + 1)
          }
          return colorMap.current[type]
        },
      },
    }),
    []
  )

  return (
    <>
      {count >= colors.length && <CustomLegend filters={filters} setFilters={setFilters} colorMap={colorMap.current} />}
      <Sunburst {...config} data={{type: "inline", value: dataProcessed}} onReady={onReady} />
    </>
  )
}

export default FuelTypesChart
