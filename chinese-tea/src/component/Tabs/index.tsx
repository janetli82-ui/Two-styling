import type { TabsProps } from "../../types/types"


const Tabs = ({count, updateFunction, page}:TabsProps) => {
  return(
    <div className="flex justify-center gap-3 mt-10">
      <button className={page === "video" ? "active" : ""} onClick={() => updateFunction("video")}>🎥 Introduce</button>
      <button className={page === "teas" ? "active" : ""} onClick={() => updateFunction("teas")}>🌿 All Teas</button>
      <button className={page === "favorite" ? "active" : ""} onClick={() => updateFunction("favorite")}>📚 My collection ({count})</button>
    </div>
  )
}

export default Tabs