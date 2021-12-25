import { useToast } from "@chakra-ui/react";

function useNotification() {
  const toast = useToast({
    variant: "subtle",
    isClosable: true,
    duration: 5000,
  });
  return toast;
}

export default useNotification;
