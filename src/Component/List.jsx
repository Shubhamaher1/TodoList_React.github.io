function List(props) {
  return (
    <div className="todo_style">
      <button
        style={{
          backgroundColor: "red",
          width: "20px",
          minHeight: "20px",
          fontSize: "10px"
        }}
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </button>
      <button
        className="edit"
        onClick={() => {
          props.Onedit(props.id);
        }}
      >
        Edit
      </button>
      <span style={{ marginLeft: "10px" }}>{props.ele}</span>
    </div>
  );
}
export default List;
