import React from 'react';
import { Location } from 'history';
import queryString from 'query-string';

interface Iprops {
  location: Location;
}
function CatchToken({ location } :Iprops) {
  const { code } = queryString.parse(location.search);
  return (
    <>
      <h2>{code}</h2>
      <h2>asdfsdf</h2>
    </>
  )
}

export default CatchToken