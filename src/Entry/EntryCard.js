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

		let date = this.state.editable ? <input type='text' ref={input => this.date = input} onChange={this.handleChange} defaultValue={entry.date} /> : <small>{entry.date}</small>
		let title = this.state.editable ? <input type='text' ref={input => this.title = input} onChange={this.handleChange} defaultValue={entry.title} /> : <small>{entry.title}</small>
		let context = this.state.editable ? <input type='text' ref={input => this.context = input} onChange={this.handleChange} defaultValue={entry.context} /> : <small>{entry.context}</small>
		let intensity_level = this.state.editable ? <input type='text' ref={input => this.intensity_level = input} onChange={this.handleChange} defaultValue={entry.intensity_level} /> : <small>{entry.intensity_level}</small>

		return (
			<div className="ui four column grid">
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
							<button onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit': 'Edit'}</button>
							<br />
							<button onClick={() => deleteEntryFromBackend(entry)}>
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
