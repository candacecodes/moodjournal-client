import React from "react";

const EntryCard = (props) => {
	console.log("EntryCard");
	return (
		<div className="ui column">
			<div className="ui card" key={props.entry.id}>
				<div className="content">
					<div className="meta text-wrap">
						<small>{props.entry.date}</small>
						<small>{props.entry.title}</small>
					</div>
				</div>

				<span>
					<div className="ui center aligned segment basic">
						<button
							className="ui mini red button"
							onClick={() => props.deleteEntryFromBackend(props.entry)}
						>
							x
						</button>
					</div>
				</span>
			</div>
		</div>
	);
};

export default EntryCard;
