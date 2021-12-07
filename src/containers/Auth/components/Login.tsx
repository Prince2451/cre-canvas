import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import UnlockImg from "../../../assets/png/unlock.png";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";
import { defaultAnimation } from "../../../utils/animation";

const Login = () => {
  const navigate = useNavigate();
  const [styles, api] = useSpring(() => defaultAnimation);

  function onCreateAccPage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    api.start({
      reverse: true,
      onRest: () => navigate("/auth/register"),
    });
  }

  useEffect(() => {
    api.start();
  }, []);

  return (
    <div className="flex-col md:flex-row flex w-full items-center text-primary-900">
      <div className="flex justify-center items-center flex-shrink w-1/2">
        <animated.div style={styles}>
          <img
            className="w-full md:max-w-xl max-w-xs object-cover"
            src={UnlockImg}
            alt="unlock"
          />
        </animated.div>
      </div>
      <div className="h-full flex-grow p-4 pt-8 border md:border-0 rounded">
        <animated.div style={styles}>
          <div>
            <h2 className="heading text-4xl text-primary-500">Login</h2>
            <span className="mt-3 h-1 w-full block bg-primary-500"></span>
          </div>
        </animated.div>
        <div className="mt-32">
          <Stack spacing={6}>
            <animated.div style={styles}>
              <FormControl>
                <FormLabel
                  fontWeight={600}
                  className="font-nunitoSans text-xs text-primary-500"
                >
                  Email
                </FormLabel>
                <InputGroup>
                  <InputRightElement
                    width="3rem"
                    children={<MdEmail className="text-primary-500" />}
                  />
                  <Input
                    className="text-primary-900"
                    name="email"
                    placeholder="Email"
                  />
                </InputGroup>
              </FormControl>
            </animated.div>
            <animated.div style={styles}>
              <FormControl>
                <FormLabel
                  fontWeight={600}
                  className="font-nunitoSans text-xs text-primary-500"
                >
                  Password
                </FormLabel>
                <InputGroup>
                  <InputRightElement
                    children={<MdEmail className="text-primary-500" />}
                  />
                  <Input
                    className="text-primary-900"
                    id="password"
                    placeholder="Password"
                  />
                </InputGroup>
              </FormControl>
            </animated.div>
            <animated.div style={styles}>
              <Button isFullWidth>Submit</Button>
            </animated.div>
          </Stack>
          <animated.div style={styles}>
            <div className="text-center py-4">
              <p className="text-primary-900">
                Don't have a account?
                <a
                  href="/auth/register"
                  onClick={onCreateAccPage}
                  className="text-primary-700 ml-1 cursor-pointer"
                >
                  Create account
                </a>
              </p>
              <span className="text-gray-500 my-2">or</span>
              <div className="flex text-3xl justify-center">
                <FcGoogle className="mr-2" />
                <BsFacebook />
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
