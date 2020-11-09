import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

export default class EntryAdd extends Component {
	submitForm = (event) => {
		event.preventDefault();
		console.log(event.target.date.value);
		// let data = {
		// 	date: event.target.date.value,
		// 	title: event.target.title.value,
		// 	context: event.target.context.value,
		// 	intensity_level: event.target.intensitylevel.value,
		// 	mood_id: event.target.mood.value,
		// 	user_id: event.target.userid.value,
		// };

		// fetch("http://localhost:3000/entries", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// }).then((response) => response.json());

		// redirect(event);
	};
	render() {
		return (
			<Card className="card">
				<CardTitle className="bg-light border-bottom p-3 mb-0">
					<i className="mdi mdi-comment-processing-outline mr-2"> </i>
					Create a New Entry
				</CardTitle>

				{/* Attributes: date, title, context, mood (drop down), intensity level (1-5) */}

				<CardBody className="card-body">
					<form onSubmit={(event) => this.submitForm(event)}>
						{/* <h4 className="col-form-label-lg">Date</h4> */}
						<h6 className="card-subtitle">Date</h6>
						<input type="date" name="date" value={null} onChange={null} />

						<br></br>
						<br></br>

						<h6 className="col-form-label-lg">Title</h6>
						<input
							className="form-control-lg"
							type="text"
							name="title"
							value={null}
							onChange={null}
						/>

						<br></br>
						<br></br>

						{/* <h4 className="col-form-label-lg">Provider</h4>
				  <h6 className="card-subtitle">Select your provider:</h6>
				  <input className="form-control-lg" type="text" name="provider" value={provider} onChange={(event) => setProvider(event.target.value)}/>
		
				  <br></br>
				  <br></br> */}

						{/* <h4 className="col-form-label-lg">Mood</h4> */}
						<h6 className="card-subtitle">What mood are you in?</h6>
						<input
							className="form-control-lg"
							type="text"
							name="mood"
							value={null}
							onChange={null}
						/>

						<br></br>
						<br></br>

						{/* <h4 className="col-form-label-lg">Entry</h4> */}
						<h6 className="card-subtitle">What are you feeling?</h6>
						<input
							className="form-control-lg"
							type="text"
							name="entry"
							value={null}
							onChange={null}
						/>

						<br></br>
						<br></br>

						{/* <h4 className="col-form-label-lg"></h4> */}
						<h6 className="card-subtitle">Mood Intesity Level</h6>

						<input
							className="form-control-lg"
							type="number"
							min="1"
							max="5"
							name="intensitylevel"
							value={null}
							onChange={null}
						/>

						<br></br>
						<br></br>
						<br></br>

						<input type="submit" value="Save Mood Entry" />
					</form>
				</CardBody>
			</Card>
		);
	}
}
