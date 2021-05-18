import { Code, Container, Heading } from "@chakra-ui/layout";

function HomePage() {
  return (
    <Container maxW="container.xl">
      <Heading as="h1">Hi (TL-28)</Heading>
      <div>
        <Code>{`<Komponent Banner (TL-16) />`}</Code>
      </div>
      <div>
        <Code>{`<Bestsellers >`}</Code>
      </div>
    </Container>
  );
}

export default HomePage;
