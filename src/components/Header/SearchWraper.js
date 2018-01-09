import React from 'react';

const SearchWraper = (props) => (
<div className={props.className ? props.className : "searchWraper-hiden"}>
  <ul>{props.findedCoctails.length > 0 ?  props.findedCoctails :
  <li>Sorry, coctail didn`t find, try another one!</li>
}</ul>
</div>)

export default SearchWraper
