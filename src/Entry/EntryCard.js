import React from "react";

// const EntryCard = (props) => {

class EntryCard extends React.Component {

	state = {
		editable: false
	}

// 	handleChange = e => {
// 		const name = e.target.name
// 		this.setState({[name]: e.target.value})

// 	}

	handleEdit = () => {
		if(this.state.editable){
			let date = this.date.value
			let title = this.title.value
			let context = this.context.value
			let id = this.props.entry.id
			let entry = {date, id, title, context}
			this.props.handleUpdate(entry)
		}

		this.setState({
			editable: !this.state.editable
		})
	}

	render() {
		const { entry, deleteEntryFromBackend } = this.props

		let date = this.state.editable ? 
		<div> 
			Date:
			<input type='date' ref={input => this.date = input} onChange={this.handleChange} defaultValue={entry.date} /> 
		</div> 
		:  
		<h4>{entry.date}</h4>

		let title = this.state.editable ? 
		<div>
			Title:
			<input type='text' ref={input => this.title = input} onChange={this.handleChange} defaultValue={entry.title} /> 
		</div>
		: 
		<h5>{entry.title}</h5>

		let context = this.state.editable ? 
		<div>
			Describe how you feel.
			<textarea ref={input => this.context = input} onChange={this.handleChange} defaultValue={entry.context} /> 
		</div>
		: 
		<p>{entry.context}</p>

		let intensity_level = this.state.editable ? 
		<div>
			<input type="number" ref={input => this.intensity_level = input} onChange={this.handleChange} defaultValue={entry.intensity_level} /> 
		</div>
		: 
		<small>{entry.intensity_level}</small>

		return (
			<div className="entry card ui grid">
				<div className="ui card" key={entry.id}>
					<div className="content">
						<div className="meta text-wrap">
							{date}
							<br />
							{title}
							<br />
							{context}
							<br />
							mood level: {intensity_level}
						</div>
					</div>

					<span>
						<div className="ui center aligned segment basic">
							<button className="entry-edit" onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit': 'Edit'}</button>
							<br />
							<button className="entry-delete" onClick={() => deleteEntryFromBackend(entry)}>
								Delete Entry
							</button>
						</div>
					</span>
				</div>
			</div>
		);
	}
};

export default EntryCard;
