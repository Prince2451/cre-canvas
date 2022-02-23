import { animated, useSpring } from "@react-spring/web";
import { AnimationDetails } from "../App/types";

const Login: React.FC<AnimationDetails> = ({ initials, animate }) => {
  const styles = useSpring(animate);

  return (
    <animated.div
      className="bg-primary-500 fixed z-50 rounded-full overflow-hidden"
      style={{
        top: initials.y - initials.height! / 2,
        left: initials.x - initials.width! / 2,
        width: initials.width,
        height: initials.height,
        ...styles,
      }}
    ></animated.div>
  );
};

export default Login;
