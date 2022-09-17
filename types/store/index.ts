type stateObj = {
	count: undefined | number; // 인원 수
	rate: undefined | number; // 10만명당 발생 현황
};

export interface IinitialState {
	searchDate: undefined | string | number;
	deaths: stateObj;
	severeSymptoms: stateObj;
	hospitalizations: stateObj;
	confirmations: stateObj;
}
