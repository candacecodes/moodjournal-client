import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

export default class EntryAdd extends Component {
	render() {
		return (
			<Card className="card">
				<CardTitle className="bg-light border-bottom p-3 mb-0">
					<i className="mdi mdi-comment-processing-outline mr-2"> </i>
					Create a New Entry
				</CardTitle>

				{/* Attributes: date, title, context, mood (drop down), intensity level (1-5) */}

				<CardBody className="card-body">
					<form onSubmit={null}>
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
							name="moodIntensity"
							value={null}
							onChange={null}
						/>

						<br></br>
						<br></br>
						<br></br>

						<input
							className="btn btn btn-primary btn-lg"
							type="submit"
							value="Save Mood Entry"
						/>
					</form>
				</CardBody>
			</Card>
		);
	}
}
