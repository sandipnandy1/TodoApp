import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div>
      <Home user={user} />
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
}

export default App;
