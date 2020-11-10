import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

export default class EntryAdd extends Component {
	state = { date: "", title: "", context: "", intensityLevel: "", mood: "" };

	handleChange = (e) => {};

	// handleSubmit = (event) => {
	// 	// event.preventDefault();
	// 	// console.log(event.target.date.value);
	// 	let data = {
	// 		user_id: 1,
	// 		date: event.target.date.value,
	// 		title: event.target.title.value,
	// 		context: event.target.context.value,
	// 		intensity_level: event.target.intensitylevel.value,
	// 		mood_id: 1,
	// 	};
	// 	this.props.addEntry(data);
	// };
	render() {
		return (
			<Card className="card">
				<CardTitle className="bg-light border-bottom p-3 mb-0">
					<i className="mdi mdi-comment-processing-outline mr-2"> </i>
					<h2>Create a New Entry</h2>
				</CardTitle>

				{/* Attributes: date, title, context, mood (drop down), intensity level (1-5) */}

				<CardBody className="card-body">
					<form onSubmit={(event) => this.handleSubmit(event)}>
						{/* <h4 className="col-form-label-lg">Date</h4> */}
						<h6 className="card-subtitle">Date</h6>
						<input
							type="date"
							name="date"
							value={this.state.date}
							onChange={this.handleChange}
						/>

						<br></br>
						<br></br>

						<h6 className="col-form-label-lg">Title</h6>
						<input
							className="form-control-lg"
							type="text"
							name="title"
							value={this.state.title}
							// onChange={null}
						/>

						<br></br>
						<br></br>

						{/* <h4 className="col-form-label-lg">Provider</h4>
				  <h6 className="card-subtitle">Select your provider:</h6>
				  <input className="form-control-lg" type="text" name="provider" value={provider} onChange={(event) => setProvider(event.target.value)}/>
		
				  <br></br>
				  <br></br> */}

						{/* <h4 className="col-form-label-lg">Mood</h4> */}
						<h6 className="card-subtitle">What's your mood</h6>
						{/* <input
							className="form-control-lg"
							type="text"
							name="mood"
							value={null}
							onChange={null}
						/> */}

						<select name="mood" id="mood">
							<option value="this.state.mood">Joy</option>
							<option value="this.state.mood">Fear</option>
							<option value="this.state.mood">Sadness</option>
							<option value="this.state.mood">Disgust</option>
							<option value="this.state.mood">Anger</option>
							<option value="this.state.mood">Surprise</option>
						</select>

						<br></br>
						<br></br>

						{/* <h4 className="col-form-label-lg">Entry</h4> */}
						<h6 className="card-subtitle">What are you feeling?</h6>
						<input
							className="form-control-lg"
							type="text"
							name="context"
							value={this.state.value}
							// onChange={null}
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
							name="intensityLevel"
							value={this.state.intensityLevel}
							// onChange={null}
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
