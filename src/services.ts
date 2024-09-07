import {IEmissionsByLocation, IFuelTypes, ITotalEmissions} from "./types.ts"

export const getEmissionsByLocation = () => load<IEmissionsByLocation[]>("/data1.json")
export const getTotalEmissions = () => load<ITotalEmissions[]>("/data2.json")
export const getFuelTypes = () => load<IFuelTypes[]>("/data3.json")

const load = <T>(url: string): Promise<T> => {
  return fetch(url).then(e => e.json()) // TODO error handling
}
