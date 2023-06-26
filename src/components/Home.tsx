import axios from "axios";
import { useState, useEffect } from "react";
import ListGroupMyTest from "./ListGroupMyTest";

export function Home() {
	const [countries, setCountries] = useState([]);
	console.log(countries)

	useEffect(() => {
		axios
			.get("http://45.156.186.149/basicinfo/country/getAll", {
				headers: {
					language: "fa",
				},
			})
			.then((response: any) => {
				setCountries(response.data.data);
			});
	}, []);
	
	return (
		<>
			<ListGroupMyTest data={countries}/>
		</>
	);
}
