import React from 'react';


const SchoolContext = React.createContext({
  name: '南师附中',
  location: '南京'
});

const StudentContext = React.createContext({
  name: 'chengzhu',
  age: 17
});

export { SchoolContext, StudentContext };
