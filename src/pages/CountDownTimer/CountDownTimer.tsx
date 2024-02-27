const CountDownTimer = () => {
	return (
    <>
		<div className="countdown-container">
			<div className="countdown-item">
				<input placeholder="HH" maxLength={2} />
			</div>
			<div className="colon">:</div>
			<div className="countdown-item">
				<input placeholder="MM" maxLength={2} />
			</div>
			<div className="colon">:</div>
			<div className="countdown-item">
				<input placeholder="SS" maxLength={2} />
			</div>
		</div>
    <div>
      <button type="button">Start</button>
    </div>
    </>
	);
};

export default CountDownTimer;
