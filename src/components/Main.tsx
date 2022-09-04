import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Box minH="100vh" p="70px 20px 120px" bg="#fffcf2">
        {children}
      </Box>
    </main>
  );
};

export default Main;
