//context Hooks
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useContext, useState } from 'react';

// Plain empty context
const RoomContext = React.createContext();
// A component whose sole job is to manage
// the state of the Room
function RoomStore({ children }) {
  const [isLit, setLit] = useState(false);
  const toggleLight = () => {
    setLit(!isLit);
  };
  // Pass down the state and the onToggleLight action
  return (
    <RoomContext.Provider
      value={{
        isLit,
        onToggleLight: toggleLight
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
// Receive the state of the light, and the function to
// toggle the light, from RoomContext
const Room = () => {
  const { isLight, onToggleLight } = useContext(RoomContext);
  return (
    <div className={`room ${isLight ? 'ligth' : 'dark'
      }`}>
      The room is {isLight ? 'ligth' : 'dark'}.
      <br />
      <button onClick={onToggleLight}>
        Flip
      </button>
    </div>
  );
};
const App = () => (
  <div className="app">
    <Room />
  </div>
);

ReactDOM.render(<RoomStore><App /></RoomStore>,document.querySelector('#root'));

