type stateObj = {
	count: undefined | number; // 인원 수
	rate: undefined | number; // 10만명당 발생 현황
};

type TCategory = {
	deaths: stateObj;
	severeSymptoms: stateObj;
	hospitalizations: stateObj;
	confirmations: stateObj;
};

export interface IinitialState {
	searchDate: undefined | string | number;
	deaths: stateObj;
	severeSymptoms: stateObj;
	hospitalizations: stateObj;
	confirmations: stateObj;
	yesterday: TCategory;
	weekly: TCategory;
	loading: boolean;
}
