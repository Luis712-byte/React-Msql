import { useTasks } from "../Context/TaskProvider";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{task.title}</h2>
            <span>{task.done == 1 ? <FaCheck /> : <ImCross />}</span>
            <p className="card-text mb-3">{task.description}</p>
            <span className="card-text mb-3">{task.createAt}</span>
            <div>
              <button
                className="btn btn-danger me-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary me-2"
                onClick={() => navigate(`/edit/${task.id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleDone(task.done)}
              >
                Toggle Task
              </button>
            </div>
          </div>
        </div>
  );
}

export default TaskCard;
