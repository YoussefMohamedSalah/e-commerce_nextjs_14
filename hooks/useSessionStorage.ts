"use client"
import { useState, useEffect } from "react";

const useSessionStorage = (name: string) => {
	const [value, setValue] = useState<string>('')

	useEffect(() => {
		if (window) {
			setValue(sessionStorage.getItem(name) || '')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return value
}

export default useSessionStorage