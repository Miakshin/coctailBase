import React from 'react';

const Line = () => (
  <div className="line">
    <label>Компонент</label><input tepe="text"
    placeholder="введите название компонента"/>
    <label>Количество</label>
    <input type="number"
    min="1" max="500"/>
    <select>
      <option>Мл</option>
      <option>Г</option>
      <option>Шт.</option>
    </select>
  </div>
);

export default Line;
