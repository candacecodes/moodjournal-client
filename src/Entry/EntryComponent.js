import React, { Component } from "react";
import EntryAdd from "./EntryAdd";
import EntriesDisplay from "./EntriesDisplay";
import EntryCard from "./EntryCard";

export default class EntryComponent extends Component {
	buildEntries = () => {
		return this.props.entries.map((entry) => {
			return (
				<EntryCard
					entry={entry}
					// key={entry.id}
					// handleClick={this.props.addBotToMyBots}
					// deleteBotForever={this.props.deleteBotForever}
				/>
			);
		});
	};

	render() {
		return (
			<div>
				<EntryAdd />
				<EntriesDisplay entries={this.props.entries} />
			</div>
		);
	}
}
