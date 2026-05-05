import TeaCard from "../TeaCard";
import { tea } from "../../data/tea";
import type { TeaContainerProps } from "../../types/types";

const FavoriteTeas = ({ selectedId, updateFunction }: TeaContainerProps) => {
  const selectedList = tea.filter((item) => selectedId.includes(item.id));
  return (
   
      <div className="tea-grid">
        {selectedList && selectedList.length > 0 ? (
          selectedList.map((item, index) => (
            <TeaCard
              key={index}
              {...item}
              updateFunction={(increment, id) => updateFunction(increment, id)}
              selectedId={selectedId}
            />
          ))
        ) : (
          <h1 className="text-3xl font-fascinate">You don't save anything!!</h1>
        )}
    </div>
  );
};

export default FavoriteTeas;
