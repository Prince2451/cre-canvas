import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import RegisterImg from "../../../assets/png/register.png";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import { defaultAnimation } from "../../../utils/animation";
import { useNotification } from "../../../hooks";
import { createErrorMessage } from "../../../utils/helpers";
import { register } from "../../../services/auth";
import LocalStorage from "../../../utils/localStorageHelper";
import { refreshTokenKey, tokenKey } from "../../../utils/constants";
import { queryKeys } from "../../../services/apiUrls";
import { useQueryClient } from "react-query";

const Register: React.FC = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [styles, api] = useSpring(() => defaultAnimation);
  const navigate = useNavigate();
  const notification = useNotification();
  const queryClient = useQueryClient();

  function setFormFieldValue(e: React.ChangeEvent<HTMLInputElement>) {
    setFormFields((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }

  async function onRegisterClick() {
    setIsLoading(true);
    try {
      const { data } = await register(formFields);
      LocalStorage.setItem(tokenKey, data.token);
      LocalStorage.setItem(refreshTokenKey, data.refreshToken);
      queryClient.invalidateQueries(queryKeys.user);
      notification({
        description: "User Created",
        status: "success",
      });
    } catch (err) {
      notification({
        description: createErrorMessage(err),
        status: "error",
      });
    }
    setIsLoading(false);
  }

  function onLoginPage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    api.start({
      reverse: true,
      onRest: () => navigate("/auth/login"),
    });
  }

  return (
    <div className="flex-col md:flex-row flex w-full items-center text-primary-900 ">
      <div className="flex justify-center items-center flex-shrink w-1/2">
        <animated.div style={styles}>
          <img
            className="w-full md:max-w-xl max-w-xs object-cover"
            src={RegisterImg}
            alt="unlock"
          />
        </animated.div>
      </div>
      <div className="h-full flex-grow p-4 pt-8 border md:border-0 rounded">
        <animated.div style={styles}>
          <div>
            <h2 className="heading text-4xl text-primary-500">Register</h2>
            <span className="mt-3 h-1 w-full block bg-primary-500"></span>
          </div>
        </animated.div>
        <div className="mt-4">
          <Stack spacing={6}>
            <animated.div style={styles}>
              <FormControl>
                <FormLabel
                  fontWeight={600}
                  className="font-nunitoSans text-xs text-primary-500"
                >
                  Name
                </FormLabel>
                <InputGroup>
                  <InputRightElement
                    width="3rem"
                    children={<MdEmail className="text-primary-500" />}
                  />
                  <Input
                    className="text-primary-900"
                    name="name"
                    placeholder="Name"
                    value={formFields.name}
                    onChange={setFormFieldValue}
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
                  Username
                </FormLabel>
                <InputGroup>
                  <InputRightElement
                    width="3rem"
                    children={<MdEmail className="text-primary-500" />}
                  />
                  <Input
                    className="text-primary-900"
                    name="username"
                    placeholder="Username"
                    value={formFields.username}
                    onChange={setFormFieldValue}
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
                    value={formFields.email}
                    onChange={setFormFieldValue}
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
                    name="password"
                    placeholder="Password"
                    value={formFields.password}
                    onChange={setFormFieldValue}
                  />
                </InputGroup>
              </FormControl>
            </animated.div>
            <animated.div style={styles}>
              <Button
                onClick={onRegisterClick}
                isLoading={isLoading}
                isFullWidth
              >
                Submit
              </Button>
            </animated.div>
          </Stack>
          <animated.div style={styles}>
            <div className="text-center py-4">
              <p className="text-primary-900">
                Already have a account?
                <a
                  onClick={onLoginPage}
                  href="/auth/login"
                  className="text-primary-700 ml-1 cursor-pointer"
                >
                  Log In
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

export default Register;
