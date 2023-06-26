import { ReactNode } from "react";

interface AlertProp {
	children: ReactNode;
	onClose: () => void;
}

function Alert({ children, onClose }: AlertProp) {
	return (
		<div>
			<div className="alert alert-primary alert-dismissible">
				{children}
				<button
					onClick={onClose}
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
				></button>
			</div>
		</div>
	);
}
export default Alert;
