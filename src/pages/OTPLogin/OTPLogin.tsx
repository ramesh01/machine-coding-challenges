import React, { useState } from "react";

const OTPLogin = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));
  console.log(otp);
  
	return (
		<div className="flex justify-around">
			{otp.map((el: string) => (
				<input className="peer h-full w-20 border border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
			))}
		</div>
	);
};

export default OTPLogin;
