/**
 *
 * @param {number} ms
 */
const delay = async (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
export default delay;
