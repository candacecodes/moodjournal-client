import React from "react";

const EntryCard = (props) => {
	return (
		<div className="ui four column grid">
			<div className="ui card" key={props.entry.id}>
				<div className="content">
					<div className="meta text-wrap">
						<small>{props.entry.date}</small>
						<br />
						<small>{props.entry.title}</small>
						<br />
						<small>{props.entry.context}</small>
						<br />
						<small>mood level: {props.entry.intensity_level}</small>
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
