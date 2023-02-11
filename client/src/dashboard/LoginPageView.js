import mapOfWorld from "../assets/mapOfWorld.png";
import SignAndLogin from "../components/signupAndLogin/leftSide/LeftSide";
import "./main.css";
const LoginPage = () => {
  // use
  return (
    <div
      className="backgroundImage"
      style={{
        background: `url(${mapOfWorld})`,
      }}
    >
      <SignAndLogin />

    </div>
  );
};

export default LoginPage;
