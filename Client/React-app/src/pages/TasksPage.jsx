import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../Context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-center">Gestor de Tareas</h1>
      <div className="container-card">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
