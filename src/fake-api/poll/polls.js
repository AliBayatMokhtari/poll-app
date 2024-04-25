import POLLS from "../db/polls";
import delay from "../utils/delay";

/** @type {Api.Poll.GetPollsService} */
const getAll = async () => {
	await delay(1000);
	return POLLS;
};
export default getAll;
