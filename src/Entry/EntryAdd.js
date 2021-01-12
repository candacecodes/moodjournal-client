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
	// 	fetch(`${API_ROOT}/moods`)
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
			<Card className="form card">
				<div className="add-form">
					<CardTitle className="bg-light border-bottom p-3 mb-0">
						<i className="mdi mdi-comment-processing-outline mr-2"> </i>
						<h2 className="form-title">New Entry</h2>
					</CardTitle>

					{/* Attributes: date, title, context, mood (drop down), intensity level (1-5) */}

					<CardBody className="form card-body">
						<form onSubmit={(event) => this.handleSubmit(event)}>
							{/* <h4 className="col-form-label-lg">Date</h4> */}
							<h6 className="card-subtitle">Date </h6>
							<br />
							<input
								type="date"
								name="date"
								value={this.state.date}
								onChange={this.handleChange}
							/>
							<hr />

							<h6 className="card-subtitle">Title</h6>
							<br />
							<input
								className="entry-title"
								type="text"
								name="title"
								value={this.state.title}
								onChange={this.handleChange}
							/>

						<hr />

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
							<br />
								<select
									name="mood"
									// value={this.state.mood}
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

							<hr />

							{/* <h4 className="col-form-label-lg">Entry</h4> */}
							<h6 className="card-subtitle">Describe how you feel today.</h6>
							<br />
							<textarea
								className="form-control-lg"
								name="context"
								rows="3"
								cols="40"
								value={this.state.value}
								onChange={this.handleChange}
							/>

							<hr />

							{/* <h4 className="col-form-label-lg"></h4> */}
							<h6 className="card-subtitle">Mood Intesity Level</h6>
							<br />
							<input
								className="form-control-lg"
								type="number"
								min="1"
								max="5"
								name="intensity_level"
								value={this.state.intensity_level}
								onChange={this.handleChange}
							/>

														
							<hr />
							<br></br>

							<button type="submit" value="Save Mood Entry">
								Save Mood Entry
							</button>
						</form>
					</CardBody>
				</div>
				<br />
				<button className="entry-add" onClick={this.props.closeAddEntry}>View All Entries</button>
			</Card>
		);
	}
}
