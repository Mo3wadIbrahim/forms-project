import Header from "./components/Header.jsx";
// import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <>
      <h1
        style={{
          color: "blue",
          fontSize: "2rem",
          fontFamily: "Arial",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Welcome to the React App
      </h1>
      <Header />
      <main>
        <Signup />
      </main>
    </>
  );
}

export default App;
