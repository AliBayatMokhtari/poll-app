import { monthLater } from "../utils/date";
import uuid from "../utils/uuid";

/**
 *
 * @returns {Array<Domain.Poll>}
 */
const createPolls = () => {
	const num = 10;

	const title = "Create new meeting";
	const description = "Create new meeting poll description";

	/** @type {Array<Domain.Poll>} */
	let polls = [];

	for (let i = 0; i < num; ++i) {
		/** @type {Domain.Poll} */
		let poll = {
			id: uuid(),
			options: [],
			title: `${title} ${i + 1}`,
			description: `${description} ${i + 1}`,
			startsAt: new Date().toISOString(),
			expiresAt: new Date().toISOString(),
		};

		if (i > 8) {
			poll.startsAt = monthLater(new Date(poll.startsAt), 2).toISOString();
			poll.expiresAt = monthLater(new Date(poll.startsAt), 2).toISOString();
		} else if (i < 3) {
			poll.startsAt = monthLater(new Date(poll.startsAt), -3).toISOString();
			poll.expiresAt = monthLater(new Date(poll.expiresAt), -2).toISOString();
		} else {
			poll.expiresAt = monthLater(new Date(poll.startsAt), 2).toISOString();
		}

		polls = [...polls, poll];
	}

	return polls;
};
export default createPolls;
