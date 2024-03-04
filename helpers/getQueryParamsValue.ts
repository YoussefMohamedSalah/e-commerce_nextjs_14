export const getQueryParamsValue = (
	queryParams: any,
	key: string,
	value: string
) => {
	const hasValueInParam = queryParams.has(key);
	if (value && hasValueInParam) {
		queryParams.set(key, value);
	} else if (value) {
		queryParams.append(key, value);
	} else if (hasValueInParam) {
		queryParams.delete(key);
	}
	return queryParams;
};
