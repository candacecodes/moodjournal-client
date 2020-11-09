import React, { Component } from "react";

export default class Quotes extends Component {
	render() {
		fetch(
			"https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium",
			{
				method: "GET",
				headers: {
					"x-rapidapi-key":
						"dd160aebb6msh8564ece76aff9bbp10e534jsnf42b1b169f5f",
					"x-rapidapi-host": "healthruwords.p.rapidapi.com",
				},
			}
		).then((response) => {
			console.log(response["url"]);
		});

		return <div>Quotes Component</div>;
	}
}
