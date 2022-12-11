import { AuthContextProvider } from "./src/context/AuthContext";
import Main from "./src/Main";

export default function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}
