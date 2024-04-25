/**
 *
 * @param {Date} start
 * @param {number} ml
 * @returns {Date}
 */
export const monthLater = (start, ml) => {
	const _start = new Date(start);
	const _end = new Date(_start.setMonth(_start.getMonth() + ml));
	return _end;
};
