import {useEffect, useRef, useState} from "react"

const STEPS_COUNT = 100

const Counter = ({value}: {value: number}) => {
  const [num, setNum] = useState(0)
  const prevNum = useRef(0)

  useEffect(() => {
    const speed = (prevNum.current - value).toString().length + 1
    const steps = new Array(STEPS_COUNT).fill(undefined).map((_, i) => {
      const t = i / (STEPS_COUNT - 1)
      const easedT = Math.pow(t, 1 / speed)
      return prevNum.current + (value - prevNum.current) * easedT
    })
    steps.push(value)

    prevNum.current = value

    const timeouts = steps.map((step, i) => setTimeout(() => setNum(Math.round(step)), i * (1000 / STEPS_COUNT)))

    return () => timeouts.forEach(t => clearTimeout(t))
  }, [value])

  return num
}

export default Counter
