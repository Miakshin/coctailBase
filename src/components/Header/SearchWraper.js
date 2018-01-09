import React from 'react';

const SearchWraper = (props) => (
<div className={props.className ? props.className : "searchWraper-hiden"}>
  <ul>{(props.findedCoctails.length > 0) ? props.findedCoctails :
       (props.findedCoctails.length === 0  && props.loading) ? <li> loading ...</li> :
       (props.findedCoctails.length === 0 && !props.loading) ? <li>Sorry, coctail didn`t find, try another one!</li>:
       props.findedCoctails

}</ul>
</div>)

export default SearchWraper
