import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import Todo from "./Components/Todo/Todo";
import NoTodo from "./Components/NoTodo/NoTodo";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (title, description, isImportant) => {
    if ((title, description)) {
      const newTodo = {
        id: crypto.randomUUID(),
        title,
        description,
        isImportant,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setIsModalOpen(false);
    } else {
      alert("لطفا عنوان و توضیحات را وارد کنید");
    }
  };

  const doTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };
const filteredTodo = () =>{
  if(filter === "all") return todos;
  if(filter === "isCompleted") return todos.filter(todo=>todo.isCompleted)
  if(filter === "notCompleted") return todos.filter(todo=>!todo.isCompleted )
}
 
  return (
    <>
      <Header />

      <main className="container pb-25">
        <div id="headline" className="space-y-3">
          <h1 className="title">
            <img src="/images/hourglass.png" className="size-8" />
            <span> مدیریت و برنامه ریزی </span>
          </h1>
          <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
            سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
            پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
            پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
          </p>
        </div>

        <div className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between">
          <div></div>
          <div className="flex items-center gap-2">
            <div className="dropdown">
              <input id="dd-toggle" type="checkbox" hidden />

              <label className="dd-btn" htmlFor="dd-toggle">
                <span>

                   نمایش{" "}
                    {filter === "all"
                      ? "همه"
                      : filter === "isCompleted"
                        ? "تکمیل شده ها"
                        : "در انتظار انجام "}
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </label>

              <div className="dropdown_menu" role="menu">
                <div className="dropdown-label">
                  <p className="text-start text-xs opacity-60">
                    نمایش{" "}
                    {filter === "all"
                      ? "همه"
                      : filter === "isCompleted"
                        ? "تکمیل شده ها"
                        : "در انتظار انجام "}
                  </p>
                </div>
                <div className="py-1">
                  <label htmlFor="dd-toggle" className="menu-item" onClick={()=>setFilter("all")}>
                    همه
                  </label>
                  <label htmlFor="dd-toggle" className="menu-item" onClick={()=>setFilter("isCompleted")}>
                    تکمیل شده ها
                  </label>
                  <label htmlFor="dd-toggle" className="menu-item" onClick={()=>setFilter("notCompleted")}>
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>

            <button id="open-dialog" onClick={() => setIsModalOpen(true)}>
              <span> ایجاد جدید </span>
              <div className="btn-divider"></div>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>
        <section id="tasks" className="space-y-30 mt-5">
          {filteredTodo().length !== 0 ? (
            <>
              <div className="space-y-5">
                <p className="text-sm">تسک های موجود:</p>
                {filteredTodo().map((todo) => (
                  <Todo
                    {...todo}
                    key={todo.id}
                    toDoHandler={doTodo}
                    remove={removeTodo}
                  />
                ))}
              </div>
              <div className="space-y-5">
                <p className="text-sm">تسک‌های تکمیل‌شده</p>

                {todos.filter((todo) => todo.isCompleted === true).length ? (
                  todos
                    .filter((todo) => todo.isCompleted === true)
                    .map((todo) => (
                      <Todo
                        {...todo}
                        key={todo.id}
                        toDoHandler={doTodo}
                        remove={removeTodo}
                      />
                    ))
                ) : (
                  <NoTodo />
                )}
              </div>
            </>
          ) : (
            <NoTodo />
          )}
        </section>
      </main>
      <Footer />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} addTodoHandler={addTodo} />
      )}
    </>
  );
}

export default App;
