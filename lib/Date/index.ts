import dayjs, { ManipulateType, UnitType } from 'dayjs';

// 오늘 날짜 -----------------

/**
 * @desc 오늘 날짜를 특정 형식으로 변환하여 return
 * @param format return 형식
 */
export const getToday = (format: string) => dayjs().format(format);

/**
 * @desc 오늘 날짜에서 특정 단위의 날짜 데이터 return
 * @param dateType
 * @param format
 * @returns
 */
export const getDateOfToday = (dateType: UnitType, format: string) =>
	dateType === 'month' ? dayjs().get(dateType) + 1 : dayjs().get(dateType);

// 이전 날짜 -----------------
/**
 * @desc 지난 날짜 범위에서 특정 날짜를 return
 * @param count 이전 날짜까지의 일/월/년 수
 * @param dateType 기준 날짜 단위 (day/month/year)
 * @param format return 형식
 * @returns
 */
export const getBeforeDate = (
	count: number,
	dateType: ManipulateType,
	format: string
) => dayjs().subtract(count, dateType).format(format);
