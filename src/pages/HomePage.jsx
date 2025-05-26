import { useGoogleLogin } from "@react-oauth/google";
import React from "react";

const HomePage = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  console.log("window.location.origin", window.location.origin);

  return (
    <div>
      <div>Hi im from microsite! :D</div>
      <button onClick={() => login()}>sign in with google</button>
    </div>
  ) 
  
};

export default HomePage;
