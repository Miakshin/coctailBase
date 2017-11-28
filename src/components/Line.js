import React from 'react';

function Line(props){
  return (<div className={"line-" + props.id}>
    <label>Компонент</label>
    <input type="text"
    placeholder="введите компонент"
    id={"coctailComponent" + props.id}
    />
    <label>Количество</label>
    <input type="number"
    min="1" max="500"
    id={"coctailComponentCount" + props.id}/>
    <select id={"coctailComponentUnit" + props.id}>
      <option>Мл</option>
      <option>Г</option>
      <option>Шт.</option>
    </select>
  </div>
  )
}
;

export default Line;
