import React from "react";

export default function EntryCard({ entry }) {
	return (
		<div>
			{entry.title} {entry.date}{" "}
		</div>
	);
}
