import { Container, Heading } from "@radix-ui/themes";
import withAuth from "../components/withAuth";

function HomePage() {
	return (
		<Container mt="5">
			<Heading as="h2">Home Page</Heading>
		</Container>
	);
}

const ProtectedHomePage = withAuth(HomePage);
export default ProtectedHomePage;
