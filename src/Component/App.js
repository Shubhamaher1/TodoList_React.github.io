import { useState } from "react";
import "./App.css";
import List from "./List";

export default function App() {
  const [value, setValue] = useState();
  const [itm, setItm] = useState([]);

  function deleteItm(id) {
    setItm((oldelist) => {
      return oldelist.filter((arr, index) => {
        return index != id;
      });
    });
  }
  const deleteAll = (e) => {
    e.preventDefault();
    setItm([]);
  };
  function Onedit(id) {
    setItm((oldelist) => {
      return oldelist.map((ele, index) => {
        if (id === index) {
          setValue(ele);
        } else return ele;
      });
    });
    deleteItm(id);
  }

  return (
    <div className="main-div">
      <div className="center_div">
        <br />
        <h1>To do List</h1>
        <br />
        <input
          type="text"
          placeholder="Enter the Name..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setItm((olddata) => {
              return [...olddata, value];
            });
            setValue("");
          }}
        >
          {" "}
          +
        </button>
        <ol>
          {itm.map((ele, index) => (
            <List
              key={index}
              id={index}
              ele={ele}
              onSelect={deleteItm}
              Onedit={Onedit}
            />
          ))}
        </ol>
        <button style={{ margin: "20px" }} onClick={deleteAll}>
          X{" "}
        </button>
      </div>
    </div>
  );
}
