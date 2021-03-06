import React from 'react';

function Line(props){
  return (<div className={"line-" + props.id}>
    <input type="text"
    placeholder="input component name!"
    id={"coctailComponent" + props.id}
    className = "formComponent"
    pattern="[A-Za-zА-Яа-яЁё0-9_-]+${2,}"
    required
    />
    <input type="number"
    className = "formComponent"
    min="1" max="500"
    pattern="[0-9]{1,3}"
    id={"coctailComponentCount" + props.id}
    required/>
    <select id={"coctailComponentUnit" + props.id}>
      <option> ml</option>
      <option> g</option>
      <option> thing</option>
      <option> oz</option>
      <option> dash</option>
      <option> pice</option>
    </select>
  </div>
  )
}
;

export default Line;
