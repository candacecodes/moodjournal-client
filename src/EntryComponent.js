import React, { Component } from "react";
import EntryAdd from "./EntryAdd";
import EntriesDisplay from "./EntriesDisplay";

export default class EntryComponent extends Component {
	render() {
		return (
			<div>
				<EntryAdd />
				<EntriesDisplay />
			</div>
		);
	}
}
