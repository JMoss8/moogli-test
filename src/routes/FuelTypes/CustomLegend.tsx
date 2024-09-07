import {TChartProps} from "../../types.ts"
import {twMerge} from "tailwind-merge"

const CustomLegend = ({
  filters,
  setFilters,
  colorMapState,
}: Pick<TChartProps<unknown>, "filters" | "setFilters"> & {colorMapState: Record<string, string>}) => {
  const handleFiltering = (key: string) =>
    setFilters(old => {
      if (!old) old = Object.keys(colorMapState)

      return old.includes(key) ? old.filter(e => e !== key) : [...old, key]
    })

  return (
    <div className={"absolute z-10 p-2 text-sm"}>
      {Object.entries(colorMapState).map(([key, color]) => (
        <button
          onClick={() => handleFiltering(key)}
          className={twMerge(
            "flex items-center gap-1.5 transition-all hover:underline",
            filters && !filters.includes(key) && "opacity-50 grayscale"
          )}
        >
          <div className={"h-[.75em] w-[.75em] rounded-full align-middle"} style={{backgroundColor: color}} />
          {key}
        </button>
      ))}
    </div>
  )
}

export default CustomLegend
