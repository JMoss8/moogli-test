import {twMerge} from "tailwind-merge"

const Spinner = ({className}: {className?: string}) => (
  <div role="status" className={twMerge("h-[1em]", className)}>
    <div
      className={
        "box-border inline-block h-[1em] w-[1em] animate-spin rounded-full border-[.15625em] border-gray-300 border-l-indigo-600"
      }
    />
    <span className="sr-only">Loading...</span>
  </div>
)

export default Spinner
