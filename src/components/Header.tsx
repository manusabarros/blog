import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <header>
      <Flex alignItems="center" justifyContent="space-between" w="100%" h={50} p="0 20px" pos="fixed" bg="#fffcf2" boxShadow="0px 2px 7px 0px rgba(185,178,164,0.75)">
        <Heading as="h1" size="md">
          <NextLink href="sobre-mi" passHref>
            <Link _hover={{ textDecor: "none" }}>&lt;ManuSabarros /&gt;</Link>
          </NextLink>
        </Heading>
        <nav>
          <HStack spacing="3" fontSize="sm">
            <NextLink href="sobre-mi" passHref>
              <Link _hover={{ textDecor: "none", color: "#eb5e28" }}>SOBRE MI</Link>
            </NextLink>
            <NextLink href="contacto" passHref>
              <Link _hover={{ textDecor: "none", color: "#eb5e28" }}>CONTACTO</Link>
            </NextLink>
          </HStack>
        </nav>
      </Flex>
    </header>
  );
};

export default Header;
