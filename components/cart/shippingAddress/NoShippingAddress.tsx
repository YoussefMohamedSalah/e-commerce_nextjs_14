import React from 'react';

interface Props {
	content: string;
}

const NoShippingAddresses = ({ content }: Props) => {
	return (
		<div
			className="text-center border-1 border-dashd rounded-4 mb-4"
			style={{
				paddingTop: "40px",
				paddingBottom: "40px",
				borderStyle: "dashed",
				color: "rgb(136, 136, 136)"
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon mb-3" width="65px" height="65px" viewBox="0 0 512 512">
				<path fill="currentColor" d="M478.465 89.022L329.6 47.382L180.3 89.438L41.459 50.052A20 20 0 0 0 16 69.293v340.6a24.093 24.093 0 0 0 17.449 23.089l146.817 41.65l149.365-42.074l140.983 39.436A20 20 0 0 0 496 452.728V112.135a24.08 24.08 0 0 0-17.535-23.113M163 436.466L48 403.842V85.17l115 32.624Zm150.615-32.647L195 437.231V118.542L313.615 85.13ZM464 436.91L345.615 403.8V85.089L464 118.2Z"></path>
			</svg>
			<p
				className="fz24 mb24"
				style={{ color: "rgb(136, 136, 136)!important" }}
			>
				{content}
			</p>
		</div>
	);
};

export default NoShippingAddresses;