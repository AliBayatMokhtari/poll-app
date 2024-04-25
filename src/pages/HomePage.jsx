import { Box, Container, Grid, Heading } from "@radix-ui/themes";
import withAuth from "../components/withAuth";
import pollService from "../services/api/poll.service";
import { useEffect, useState } from "react";
import Shimmer from "../components/shimmer-loading/Shimmer";

function HomePage() {
	const [polls, setPolls] = useState(/** @type {Array<Domain.Poll>} */ ([]));
	const [loading, setLoading] = useState(false);

	const getPolls = async () => {
		setLoading(true);
		try {
			const _polls = await pollService.getAllPolls();
			setPolls(_polls);
		} catch (err) {
			console.log({ err });
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPolls();
	}, []);

	return (
		<Container mt="5">
			<Heading as="h2">Home Page</Heading>
			<Box mt="4">
				{loading ? (
					<PollsLoadingShimmer />
				) : polls.length ? (
					polls.map(poll => <div key={poll.id}>{poll.id}</div>)
				) : (
					<EmptyView />
				)}
			</Box>
		</Container>
	);
}

const ProtectedHomePage = withAuth(HomePage);
export default ProtectedHomePage;

const PollsLoadingShimmer = () => {
	const polls = Array(9).fill(undefined);
	return (
		<Grid columns="3" gapX="1" gapY="1">
			{polls.map((_, idx) => (
				<Shimmer key={idx}>
					<Box height="200px" />
				</Shimmer>
			))}
		</Grid>
	);
};

const EmptyView = () => {
	return <Box>List Empty</Box>;
};
