import Login from './components/LoginForm/login';
export const URL = process.env.SECRET_URL;


function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
