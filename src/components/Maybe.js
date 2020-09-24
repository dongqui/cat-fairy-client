import React from 'react';

export function Maybe ({ test, children }) {
  return (
    <>{test ? children : null}</>
  );
}
