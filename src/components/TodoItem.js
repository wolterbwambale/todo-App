const TodoItem = ({ itemProp, handleChange }) => {
    return (
      <ul>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          delTodo={delTodo}
        />
        <button>Delete</button>
        {itemProp.title}
      </ul>
    );
  };
  export default TodoItem;
  
  