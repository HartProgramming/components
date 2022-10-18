import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import { useState } from 'react';
import UserList from './components/Users/UserList';

function App() {

  const [dataState, setDataState] = useState([]);

  const saveDataHandler = data => {
    console.log(data.user)
    setDataState(prevData =>{
      return [data, ...prevData]
    }
    )
  }


  return (
    <div className="App">
      <AddUser saveData={saveDataHandler}/>
      <UserList items={dataState} />
    </div>
  );
}

export default App;
