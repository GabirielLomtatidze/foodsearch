import { useUser } from "@clerk/clerk-react";
import Islogin from "./UserPosition/Islogin";
import NotLogIn from "./UserPosition/NotLogIn";

// cowobe4205@endelite.com

function App() {

  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? <Islogin /> : <NotLogIn />}
    </>
  );
}

export default App;


