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
	}
};

// ==============================|| SLICE - Dashboard ||============================== //

const dashboard = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		updateDeaths(state, action) {
			console.log('action:', action);
			const nextState = update(state, {
				deaths: {
					count: { $set: Number(action.payload.deaths.count) },
					rate: { $set: Number(action.payload.deaths.count) }
				}
			});

			return nextState;
		},

		updateSevereSymptoms(state, action) {
			const nextState = update(state, {
				severeSymptoms: {
					count: { $set: Number(action.payload.severeSymptoms.count) },
					rate: { $set: Number(action.payload.severeSymptoms.count) }
				}
			});

			return nextState;
		},

		updateHospitalizations(state, action) {
			const nextState = update(state, {
				hospitalizations: {
					count: { $set: Number(action.payload.hospitalizations.count) },
					rate: { $set: Number(action.payload.hospitalizations.count) }
				}
			});

			return nextState;
		},

		updateConfirmations(state, action) {
			const nextState = update(state, {
				confirmations: {
					count: { $set: Number(action.payload.confirmations.count) },
					rate: { $set: Number(action.payload.confirmations.count) }
				}
			});

			return nextState;
		},
		updateSearchDate(state, action) {
			const nextState = update(state, {
				searchDate: { $set: action.payload }
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
	updateSearchDate
} = dashboard.actions;
