import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Container, VStack, Grid, HStack } from "@chakra-ui/layout";
import { FaBars, FaSearch, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserWelcomeBar from "../../Users";
import useSearchInput from "./useSearchInput";

function Header() {
  const {
    showMobileSearch,
    onSearchSubmit,
    searchTerm,
    onSearchTermChange,
    onHandleSearch,
  } = useSearchInput();

  return (
    <VStack as="header">
      <Box
        w="100%"
        background="gray.300"
        display={{ base: "none", md: "initial" }}
      >
        <Container align="right" maxW="container.xl">
          <UserWelcomeBar />
        </Container>
      </Box>
      <Container maxW="container.xl">
        <Grid
          gridTemplateColumns={{
            base: "auto 1fr auto auto",
            md: "auto 1fr [search-input] repeat(3, auto)",
          }}
        >
          <Box>
            <HStack>
              <Button
                backgroundColor="white"
                display={{ base: "initial", md: "none" }}
              >
                <FaBars size="1.5em" />
              </Button>
              <Link to="/">
                <Image src="/logo.png" alt="JunkLet Ltd. :D"></Image>
              </Link>
            </HStack>
          </Box>
          <div></div>
          <Box
            display={{
              base: showMobileSearch ? "initial" : "none",
              md: "initial",
            }}
            gridColumn={{
              base: "1/5",
              md: "search-input",
            }}
            gridRow={{
              base: "2/3",
              md: "1/2",
            }}
          >
            <form onSubmit={onSearchSubmit}>
              <Input
                value={searchTerm}
                onChange={onSearchTermChange}
                borderColor="rgb(226, 232, 240)"
                borderRight={{ md: "none" }}
                borderEndRadius={{ md: "none" }}
                mt={{ base: "1em", md: "0" }}
                type="text"
              ></Input>
            </form>
          </Box>
          <Box>
            <Button
              background="none"
              border={{
                base: "none",
                md: "solid 1px rgb(226, 232, 240)",
              }}
              borderRadius={{ base: "4px", md: "0 4px 4px 0" }}
              borderLeft={{ md: "none" }}
              type="button"
              onClick={onHandleSearch}
            >
              <Icon as={FaSearch}></Icon>
            </Button>
          </Box>
          <Box>
            <Button as={Link} to="/cart" background="none">
              <FaShoppingBasket />
            </Button>
          </Box>
        </Grid>
      </Container>
    </VStack>
  );
}

export default Header;
