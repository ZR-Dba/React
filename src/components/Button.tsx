interface ButtonProbs {
	children: string;
	color?: "primary" | "info" | "secondary" | "danger";
	onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: ButtonProbs) => {
	return (
		<button className={"btn btn-" + color} onClick={onClick}>
			{children}
		</button>
	);
};
export default Button;
