import {useCallback, useEffect, useState} from "react"
import type {Chart} from "@ant-design/charts"
import {TChartProps} from "../types.ts"

export const aggregateForTooltip =
  <K extends string>(key: K) =>
  (d: Record<K, string>, _: unknown, data: ({[key in K]: string} & {value: number})[]) => {
    const id = d[key]
    const sum = data?.reduce((acc, cur) => {
      if (cur[key] === id) return acc + cur.value
      return acc
    }, 0)
    return `${id} total ${sum?.toLocaleString()}`
  }

export const useOnChartReady = (setFilters: TChartProps<unknown>["setFilters"], callback?: ({chart}: Chart) => void) =>
  useCallback(
    ({chart}: Chart) => {
      callback?.(chart)
      chart.on("legend:filter", (event: {data: {values: string[]}}) => setFilters([...event.data.values]))
      chart.on("legend:reset", () => setFilters(undefined))
    },
    [callback, setFilters]
  )

export const useFilters = <T>(
  data: T | undefined,
  filterData: (data: T, filters?: string[]) => number,
  setTotal: (newTotal: number) => void
) => {
  const [filters, setFilters] = useState<string[]>()

  useEffect(() => {
    if (!data) return
    setTotal(filterData(data, filters))
  }, [filters, data, setTotal, filterData])

  return {filters, setFilters}
}
