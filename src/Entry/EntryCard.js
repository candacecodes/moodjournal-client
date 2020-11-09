import React from "react";

const EntryCard = (entry) => {
	console.log("EntryCard");
	return (
		<div className="ui column">
			<div className="ui card" key={entry.id}>
				<div className="content">
					<div className="meta text-wrap">
						<small>{entry.date}</small>
						<small>{entry.title}</small>
					</div>
				</div>

				{/* <span>
						<div className="ui center aligned segment basic">
							<button
								className="ui mini red button"
								onClick={() => props.deleteEntryFromBackend(entry)}
							>
								x
							</button>
						</div>
					</span> */}
			</div>
		</div>
	);
};

export default EntryCard;
