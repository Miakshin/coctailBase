import React from 'react';

function Line(props){
  return (<div className={"line-" + props.id}>
    <label>Компонент</label><input type="text"
    placeholder="введите компонент"
    />
    <label>Количество</label>
    <input type="number"
    min="1" max="500"/>
    <select>
      <option>Мл</option>
      <option>Г</option>
      <option>Шт.</option>
    </select>
  </div>
  )
}
;

export default Line;
