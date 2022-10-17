// types
import { createSlice } from '@reduxjs/toolkit';
import { IinitialState } from '../../types/store';
import update from 'immutability-helper';

// initial state
const initialState: IinitialState = {
	searchDate: undefined, // 검색날짜
	deaths: {
		// 사망
		count: undefined,
		rate: undefined
	},
	severeSymptoms: {
		// 재원 위중증
		count: undefined,
		rate: undefined
	},
	hospitalizations: {
		// 신규 입원
		count: undefined,
		rate: undefined
	},
	confirmations: {
		count: undefined,
		rate: undefined
	},
	yesterday: {
		// 어제일자 데이터
		deaths: {
			// 사망
			count: undefined,
			rate: undefined
		},
		severeSymptoms: {
			// 재원 위중증
			count: undefined,
			rate: undefined
		},
		hospitalizations: {
			// 신규 입원
			count: undefined,
			rate: undefined
		},
		confirmations: {
			count: undefined,
			rate: undefined
		}
	},
	weekly: {
		deaths: {
			// 사망
			count: undefined,
			rate: undefined
		},
		severeSymptoms: {
			// 재원 위중증
			count: undefined,
			rate: undefined
		},
		hospitalizations: {
			// 신규 입원
			count: undefined,
			rate: undefined
		},
		confirmations: {
			count: undefined,
			rate: undefined
		}
	}
};

// ==============================|| SLICE - Dashboard ||============================== //

const dashboard = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		// 사망자 데이터 업데이트
		updateDeaths(state, action) {
			const nextState: IinitialState = update(state, {
				deaths: {
					count: { $set: Number(action.payload.deaths.count) },
					rate: { $set: Number(action.payload.deaths.rate) }
				}
			});

			return nextState;
		},

		// 위중증 환자 데이터 업데이트
		updateSevereSymptoms(state, action) {
			const nextState: IinitialState = update(state, {
				severeSymptoms: {
					count: { $set: Number(action.payload.severeSymptoms.count) },
					rate: { $set: Number(action.payload.severeSymptoms.rate) }
				}
			});

			return nextState;
		},

		// 신규 입원 데이터 업데이트
		updateHospitalizations(state, action) {
			const nextState: IinitialState = update(state, {
				hospitalizations: {
					count: { $set: Number(action.payload.hospitalizations.count) },
					rate: { $set: Number(action.payload.hospitalizations.rate) }
				}
			});

			return nextState;
		},

		// 신규 확진자 데이터 업데이트
		updateConfirmations(state, action) {
			const nextState: IinitialState = update(state, {
				confirmations: {
					count: { $set: Number(action.payload.confirmations.count) },
					rate: { $set: Number(action.payload.confirmations.rate) }
				}
			});

			return nextState;
		},

		// 검색 날짜 업데이트
		updateSearchDate(state, action) {
			const nextState: IinitialState = update(state, {
				searchDate: { $set: action.payload }
			});
			return nextState;
		},

		// 전일 데이터 업데이트
		updateYesterdayData(state, action) {
			const nextState: IinitialState = update(state, {
				yesterday: {
					$set: action.payload
				}
			});
			return nextState;
		},

		// 주간 데이터 업데이트
		updateWeeklyData(state, action) {
			const nextState: IinitialState = update(state, {
				weekly: {
					$set: action.payload
				}
			});
			return nextState;
		}
	}
});

export default dashboard.reducer;

export const {
	updateDeaths,
	updateSevereSymptoms,
	updateHospitalizations,
	updateConfirmations,
	updateSearchDate,
	updateYesterdayData,
	updateWeeklyData
} = dashboard.actions;
