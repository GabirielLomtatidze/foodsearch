import { useUser } from "@clerk/clerk-react";
import Islogin from "./UserPosition/Islogin";
import NotLogIn from "./UserPosition/NotLogIn";

// johac19423@nomrista.coma

function App() {

  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? <Islogin /> : <NotLogIn />}
    </>
  );
}

export default App;


