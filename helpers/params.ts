const serialize = (obj: any, prefix: string | null = null): string => {
	const str = [];
	let p;
	for (p in obj) {
		if (obj.hasOwnProperty(p)) {
			const k = prefix ? prefix + "[" + p + "]" : p;
			const v = obj[p];
			str.push(
				v !== null && typeof v === "object"
					? serialize(v, k)
					: encodeURIComponent(k) + "=" + encodeURIComponent(v)
			);
		}
	}
	return str.join("&");
};

export const setParams = (params: any) => {
	params.selections = params.selections.join('%2C'); // Join selections with URL-encoded comma
	delete params.page;
	delete params.per_page;
	return serialize(params);
};

export const getParams = () => {
	const searchParams = new URLSearchParams(window.location.href.split("?")[1]).entries();
	let result: any = {};

	if (searchParams) {
		for (let entry of Array.from(searchParams)) {
			if (entry[0] === 'selections') {
				if (entry[1] !== '') result[entry[0]] = entry[1].split(",");
			} else {
				result[entry[0]] = entry[1];
			}
		}
	}

	return result;
};
