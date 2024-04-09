
import Checkbox from '../Checkbox/Checkbox';
import ProgressBar from '../ProgressBar/ProgressBar';

const Todo = () => {
    let todos = [
        "Finish homework",
        "Go grocery shopping",
        "Call mom",
        "Workout for 30 minutes",
        "Read a chapter of a book",
      ];

  return (
    <>
    <ProgressBar title="Progress" percentage={25} color={"green"} /> 
    <article className="todo">
        <h2>My Todos:</h2>
        {todos.map((todo, index) => (
          <Checkbox key={index} title={todo} big={true} />
        ))}
      </article>
    </>
  )
}

export default Todo