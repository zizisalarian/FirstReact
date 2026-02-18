import "./Todo.css";

function Task({id, title, desc, isCompleted, isImportant , toDoHandler , remove}) {
  return (
    <div className="space-y-0.5" >
      <article className="task-card">
        <div className="task-content">
          <div>
            <h3>{title}</h3>
            <p className="task-desc">{desc}</p>
          </div>
        </div>

        <div className="moderate">
          <div className="flex items-center **:min-w-max gap-2">
            {isCompleted && (
              <span className="status-label completed"> تکمیل شده </span>
            )}
            {isImportant && <span className="priority code-1"> مهم </span>}
          </div>
          {!isCompleted && (
            <div className="moderate-btns">
              <button className="complete-task" onClick={()=>toDoHandler(id)}>
                <i className="fa-solid fa-circle-check"></i>
              </button>
              <button className="undone-btn" onClick={()=>remove(id)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default Task;
