import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import "../../style/styleToDoList.css"



const lists = ["todo", "inprogress", "done"];

const initialTasks = [
  { id: 1, name: "Learning JS", type: "todo" },
  { id: 2, name: "Learning React.js", type: "todo" },
  { id: 3, name: "Learning Express.js", type: "todo" },
  { id: 4, name: "Learning MongoDB", type: "todo" },
  { id: 5, name: "Becoming a fullstack developer", type: "todo" }
];

const Todolist = () => {
  const [tasks, setTasks] = useState([...initialTasks]);
  const onDragEnd = (event) => {
    const { over, active } = event;
    console.log({ over, active });
    setTasks(
      tasks.map((item) => {
        if (item.id === active.id) {
          return {
            ...item,
            type: over.id
          };
        }

        return item;
      })
    );
  };

  const getTasks = (type) => tasks.filter((item) => item.type === type);

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="container">
        {lists.map((item) => (
          <Droppable key={item} id={item}>
            <h1>{item}</h1>
            {getTasks(item).map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.name}
              </Draggable>
            ))}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );
};

export default Todolist