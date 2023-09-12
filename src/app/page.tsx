import { Container, Group, Stack, Text, Title } from "@mantine/core";
import TopTabs from "./TopTabs";

const Home = () => {
  return (
    <main>
      <Container>
        <Stack my="xs" gap="xs">
          <Group align="end">
            <Title>Saborippo</Title>
            <Text>Divide and Merge text and time in an SRT(SubRip) file</Text>
          </Group>
          <TopTabs />
        </Stack>
      </Container>
    </main>
  );
};

export default Home;
