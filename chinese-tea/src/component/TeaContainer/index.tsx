import TeaCard from "../TeaCard"
import { tea } from "../../data/tea"
import type { TeaContainerProps } from "../../types/types"

const TeaContainer = ({selectedId, updateFunction}: TeaContainerProps) => {
  
  return(
    <div className="tea-grid">
      {tea.map((item, index) =>
        <TeaCard {...item} key={index} updateFunction={(increment, id) => updateFunction(increment, id)} selectedId={selectedId}/>
      )}
    </div>
  )
}

export default TeaContainer