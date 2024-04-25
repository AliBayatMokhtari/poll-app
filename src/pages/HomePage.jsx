import { Container, Heading } from "@radix-ui/themes";
import withAuth from "../components/withAuth";
import pollService from "../services/api/poll.service";
import { useEffect, useState } from "react";

function HomePage() {
	const [polls, setPolls] = useState(/** @type {Array<Domain.Poll>} */ ([]));

	const getPolls = async () => {
		const _polls = await pollService.getAllPolls();
		setPolls(_polls);
	};

	useEffect(() => {
		getPolls();
	}, []);

	return (
		<Container mt="5">
			<Heading as="h2">Home Page</Heading>
			{polls.map(poll => (
				<div key={poll.id}>{poll.title}</div>
			))}
		</Container>
	);
}

const ProtectedHomePage = withAuth(HomePage);
export default ProtectedHomePage;
