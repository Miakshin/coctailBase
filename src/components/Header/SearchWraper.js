import React from 'react';

const SearchWraper = (props) => (
<div className={props.className ? props.className : "searchWraper-hiden"}>
  {(props.findedCoctails.length > 0) ? props.findedCoctails :
       (props.findedCoctails.length === 0  && props.loading) ? <div> loading ...</div> :
       (props.findedCoctails.length === 0 && !props.loading) ? <div>Sorry, coctail didn`t find, try another one!</div>:
       props.findedCoctails

}
</div>)

export default SearchWraper
