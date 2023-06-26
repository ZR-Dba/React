import { useState } from "react";


interface ListGroupProps {
	data: string[];
	headingTitle: string;
	color?: string;
	onSelectItem?: (item: string) => void;
}




function ListGroup({
	data,
	headingTitle,
	color = "black",
	onSelectItem = () => {
		{
		}
	},
}: ListGroupProps) {


	const liStyle: React.CSSProperties = {
		fontWeight: "bold",
		color: color,
	};

	
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{headingTitle}</h1>
			{data.length === 0 && <p>No Item Found</p>}
			<ul className="list-group">
				{data.map((country: any, index: number) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						style={liStyle}
						key={country.id}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(country);
						}}
					>
						{country.name}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
