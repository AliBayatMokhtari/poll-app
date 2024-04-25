import fakeApi from "../../fake-api";

/** @type {Api.Poll.GetPollsService} */
const getAllPolls = () => {
	return fakeApi.poll.getAll();
};

const getPoll = () => {};

const pollService = Object.freeze({
	getAllPolls,
});
export default pollService;
