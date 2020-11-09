import React, { Component } from "react";
import EntryAdd from "./EntryAdd";
import EntryCard from "./EntryCard";

export default class EntryComponent extends Component {
	buildEntries = () => {
		return this.props.entries.map((entry) => {
			return (
				<EntryCard
					entry={entry}
					// key={entry.id}
					// deleteEntry={this.props.deleteEntry}
				/>
			);
		});
	};

	render() {
		return (
			<div>
				<EntryAdd addEntry={this.props.addEntry} />

				{/* {this.buildEntries} */}
			</div>
		);
	}
}
