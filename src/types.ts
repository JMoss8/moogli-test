import {Dispatch, SetStateAction} from "react"

export type TChartProps<D> = {
  data: D[] | undefined
  setFilters: Dispatch<SetStateAction<string[] | undefined>>
}

interface IDataBase {
  key: string
  value: number
}

export interface IEmissionsByLocation extends IDataBase {
  Location: string
}

export interface ITotalEmissions extends IDataBase {
  Scope: string
}

export interface IFuelTypes extends IDataBase {
  "Main fuel type": string
}
