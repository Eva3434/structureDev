import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id
  });
  const style = {
    backgroundColor: isOver ? "rgba(0, 255, 0, 0.3)" : undefined
  };

  return (
    <div ref={setNodeRef} className="droppable-container" >
      {children}
    </div>
  );
};
export default Droppable