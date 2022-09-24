type TWeeklyDataObj = {
	[key: string]: string;
};

/**
 *
 * @param todayValue 오늘일자 데이터
 * @param yesterdayValue 어제일자 데이터
 * @returns 전일대비 증감률 (%)
 */
export const calcRateOfDayToDay = (
	todayValue: number,
	yesterdayValue: number
) =>
	Number((((todayValue - yesterdayValue) / yesterdayValue) * 100).toFixed(1));

/**
 *
 * @param dataObj 주간 현황 데이터 Obj
 * @param searchDate 검색 날짜
 * @returns
 */
export const getChartData = (
	dataObj: TWeeklyDataObj
	// searchDate: string | number
) => {
	const sortDataList = (prevList: Array<string>) =>
		prevList.sort(
			(a: string, b: string) => Number(a.slice(-1)) - Number(b.slice(-1))
		);

	let result = [];
	const cntArray =
		dataObj &&
		Object.keys(dataObj).filter(
			(item) => item.includes('cnt') && !item.includes('8')
		); // 인원 수 key 배열
	const rateArray =
		dataObj &&
		Object.keys(dataObj).filter(
			(item) => item.includes('rate') && !item.includes('8')
		); // 비율 현황 key 배열
	const dateArray =
		dataObj &&
		Object.keys(dataObj).filter(
			(item) =>
				item.includes('mmdd') && !item.includes('8') && item !== 'mmddhh'
		); //  날짜 key 배열

	const sorted = {
		cntArray: sortDataList(cntArray),
		rateArray: sortDataList(rateArray),
		dateArray: sortDataList(dateArray)
	};

	result =
		sorted?.cntArray &&
		sorted?.cntArray.map((key: string, index: any) => ({
			datetime: dataObj[`mmdd${index + 1}`],
			value: Number(dataObj[key])
		}));

	return result;
};
