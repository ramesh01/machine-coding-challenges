import { useEffect, useState } from "react";

const SurveyTable = () => {
	const [surveyData, setSurveyData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [textInput, setTextInput] = useState<string>("");

	useEffect(() => {
		getSurgeyApiData();
	}, []);

	const getSurgeyApiData = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
			);
			const data = await response.json();
			setSurveyData(data.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setSurveyData([]);
		}
	};

	const handleDeleteRow = (item: any) => {
		const updatedSurveyData = surveyData.filter((data: any) => {
			if (data["ID Year"] !== item["ID Year"]) {
				return data;
			}
		});
		setSurveyData(updatedSurveyData);
	};

	const surveyTableUi = () => {
		return (
			<>
				<input
					className="float-right appearance-none border-2 border-gray-200 rounded w-[200px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
					type="text"
					value={textInput}
					placeholder="Search data"
					onChange={(e: any) => {
						setTextInput(e.target.value);
					}}
				/>
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-4 py-3">
								Year
							</th>
							<th scope="col" className="px-4 py-3">
								Population
							</th>
							<th scope="col" className="px-4 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{surveyData.map((data: any) => (
							<>
								<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
									<th className="px-4 py-4">{data.Year}</th>
									<td className="px-4 py-4">{data.Population}</td>
									<td className="px-4 py-4">
										<button
											className="bg-red-500 text-white py-2 px-4 rounded"
											title="Delete row"
											onClick={() => handleDeleteRow(data)}
										>
											Delete
										</button>
									</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</>
		);
	};

	return (
		<>
			<h1 className="block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 py-3">
				Survey Table
			</h1>
			{loading && <p>Loading...</p>}
			{surveyData && surveyData.length > 0 && surveyTableUi()}
		</>
	);
};

export default SurveyTable;
