import React from "react";

const EntryCard = (entry) => {
	console.log("EntryCard");
	return (
		<div className="ui column">
			<div
				className="ui card"
				key={entry.id}
				// onClick={() => props.handleClick(props.bot)}
			>
				<div className="content">
					<div className="meta text-wrap">
						<small>{entry.context}</small>
					</div>
				</div>

				{/* <span>
						<div className="ui center aligned segment basic">
							<button
								className="ui mini red button"
								onClick={() => props.deleteEntry}
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
