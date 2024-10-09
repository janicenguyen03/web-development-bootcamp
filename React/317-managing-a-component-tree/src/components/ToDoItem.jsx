import React from "react";

function ToDoItem(props) {
  // const [isClicked, setClick] = useState(false);

  // function handleClick() {
  //     setClick(prevValue => {!prevValue});
  // }
  // return (
  //     <li onClick={handleClick}
  //         style={{textDecoration : isClicked ? "line-through" : "none"}}
  //     >{props.text}</li>
  //   )

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
