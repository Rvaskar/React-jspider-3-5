import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";


function App() {
  return (
    <div className="App">
     <UserContextProvider>
      <h3>Context Api</h3>
      <Login/>
      <Profile/>
     </UserContextProvider>
    </div>
  );
}

export default App;
