import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

export default class EntryAdd extends Component {
	state = {
		moods: [],
		date: "",
		title: "",
		context: "",
		intensityLevel: "",
		mood: "",
	};

	// componentDidMount() {
	// 	fetch("http://localhost:3000/moods")
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			this.setState({
	// 				moods: json,
	// 			});
	// 		});
	// }

	handleChange = (e) => {
		let { name, value } = e.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// console.log(event.target.date.value);
		let data = {
			user_id: 1,
			date: event.target.date.value,
			title: event.target.title.value,
			context: event.target.context.value,
			intensity_level: event.target.intensity_level.value,
			mood_id: event.target.mood.value,
		};
		this.props.addEntry(data);
		alert("mood entry saved");
	};

	render() {
		return (
			<Card className="card">
				<CardTitle className="bg-light border-bottom p-3 mb-0">
					<i className="mdi mdi-comment-processing-outline mr-2"> </i>
					<h2>New Entry</h2>
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
							onChange={this.handleChange}
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

						<select
							name="mood"
							// value={this.state.mood}
							// id="mood"
							onChange={this.handleChange}
						>
							<option value="1">Joy</option>
							<option value="2">Fear</option>
							<option value="3">Sadness</option>
							<option value="4">Disgust</option>
							<option value="5">Anger</option>
							<option value="6">Surprise</option>
							{/* <option
								value={this.state.mood}
								// id="mood"
								name="joy"
								onChange={this.handleChange}
							>
								Joy
							</option>
							<option
								value={this.state.mood}
								// id="mood"
								name="fear"
								onChange={this.handleChange}
							>
								Fear
							</option> */}
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
							onChange={this.handleChange}
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
							name="intensity_level"
							value={this.state.intensity_level}
							onChange={this.handleChange}
						/>

						<br></br>
						<br></br>
						<br></br>

						<input type="submit" value="Save Mood Entry" />
					</form>
				</CardBody>
				<button onClick={this.props.closeAddEntry}>View All Entries</button>
			</Card>
		);
	}
}
