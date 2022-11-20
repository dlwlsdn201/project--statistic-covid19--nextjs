"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 8142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W$": () => (/* binding */ getChartData),
/* harmony export */   "hI": () => (/* binding */ calcRateOfDayToDay),
/* harmony export */   "mr": () => (/* binding */ getRefreshData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(939);



/**
 *
 * @param todayValue 오늘일자 데이터
 * @param yesterdayValue 어제일자 데이터
 * @returns 전일대비 증감률 (%)
 */
const calcRateOfDayToDay = (todayValue, yesterdayValue) => Number(((todayValue - yesterdayValue) / yesterdayValue * 100).toFixed(1));
/**
 *
 * @param dataObj 주간 현황 데이터 Obj
 * @param searchDate 검색 날짜
 * @returns
 */

const getChartData = dataObj => {
  const sortDataList = prevList => prevList.sort((a, b) => Number(a.slice(-1)) - Number(b.slice(-1)));

  let result = [];
  const cntArray = dataObj && Object.keys(dataObj).filter(item => item.includes('cnt') && !item.includes('8')); // 인원 수 key 배열

  const rateArray = dataObj && Object.keys(dataObj).filter(item => item.includes('rate') && !item.includes('8')); // 비율 현황 key 배열

  const dateArray = dataObj && Object.keys(dataObj).filter(item => item.includes('mmdd') && !item.includes('8') && item !== 'mmddhh'); //  날짜 key 배열

  const sorted = {
    cntArray: sortDataList(cntArray),
    rateArray: sortDataList(rateArray),
    dateArray: sortDataList(dateArray)
  };
  result = (sorted === null || sorted === void 0 ? void 0 : sorted.cntArray) && (sorted === null || sorted === void 0 ? void 0 : sorted.cntArray.map((key, index) => ({
    datetime: dataObj[`mmdd${index + 1}`],
    value: Number(dataObj[key])
  })));
  return result;
};
const getRefreshData = async () => {
  console.group('called refreshData()');
  let result = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default().all([(0,_pages_api__WEBPACK_IMPORTED_MODULE_1__.READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY)(), // 주간 국내 코로나 사망자 조회 API 호출
  (0,_pages_api__WEBPACK_IMPORTED_MODULE_1__.READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY)(), // 주간 국내 코로나 신규 확진자 조회 API 호출
  (0,_pages_api__WEBPACK_IMPORTED_MODULE_1__.READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY)(), // 주간 국내 코로나 위중증자 조회 API 호출
  (0,_pages_api__WEBPACK_IMPORTED_MODULE_1__.READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY)() // 주간 국내 코로나 신규 입원자 조회 API 호출
  ]).then(axios__WEBPACK_IMPORTED_MODULE_0___default().spread((resDeaths, resConfirmations, resSevereSymptons, resHospitalizations) => {
    var _resDeaths$data, _resDeaths$data$respo, _resConfirmations$dat, _resConfirmations$dat2, _resSevereSymptons$da, _resSevereSymptons$da2, _resHospitalizations$, _resHospitalizations$2;

    // 공공데이터포털 REST API 에 에러 이슈가 있음 _ 09.24 ~ ing (해결될 떄까지 테스트 데이터 사용)
    let PAYLOAD_DEATHS_WEEKLY; // 주간 총  사망자 수

    let PAYLOAD_CONFIRMATIONS_WEEKLY; // 주간 총  확진자 수

    let PAYLOAD_SEVERE_SYMPTOMS_WEEKLY; // 주간 위중증 발생 수

    let PAYLOAD_HOSPITALIZATIONS_WEEKLY; // 주간 신규입원 수

    if (resDeaths.status === 200 && ((_resDeaths$data = resDeaths.data) === null || _resDeaths$data === void 0 ? void 0 : (_resDeaths$data$respo = _resDeaths$data.response) === null || _resDeaths$data$respo === void 0 ? void 0 : _resDeaths$data$respo.result.length) > 0 && resConfirmations.status === 200 && ((_resConfirmations$dat = resConfirmations.data) === null || _resConfirmations$dat === void 0 ? void 0 : (_resConfirmations$dat2 = _resConfirmations$dat.response) === null || _resConfirmations$dat2 === void 0 ? void 0 : _resConfirmations$dat2.result.length) > 0 && resSevereSymptons.status === 200 && ((_resSevereSymptons$da = resSevereSymptons.data) === null || _resSevereSymptons$da === void 0 ? void 0 : (_resSevereSymptons$da2 = _resSevereSymptons$da.response) === null || _resSevereSymptons$da2 === void 0 ? void 0 : _resSevereSymptons$da2.result.length) > 0 && resHospitalizations.status === 200 && ((_resHospitalizations$ = resHospitalizations.data) === null || _resHospitalizations$ === void 0 ? void 0 : (_resHospitalizations$2 = _resHospitalizations$.response) === null || _resHospitalizations$2 === void 0 ? void 0 : _resHospitalizations$2.result.length) > 0) {
      var _resDeaths$data2, _resDeaths$data2$resp, _resConfirmations$dat3, _resConfirmations$dat4, _resSevereSymptons$da3, _resSevereSymptons$da4, _resHospitalizations$3, _resHospitalizations$4;

      PAYLOAD_DEATHS_WEEKLY = resDeaths === null || resDeaths === void 0 ? void 0 : (_resDeaths$data2 = resDeaths.data) === null || _resDeaths$data2 === void 0 ? void 0 : (_resDeaths$data2$resp = _resDeaths$data2.response) === null || _resDeaths$data2$resp === void 0 ? void 0 : _resDeaths$data2$resp.result;
      PAYLOAD_CONFIRMATIONS_WEEKLY = resConfirmations === null || resConfirmations === void 0 ? void 0 : (_resConfirmations$dat3 = resConfirmations.data) === null || _resConfirmations$dat3 === void 0 ? void 0 : (_resConfirmations$dat4 = _resConfirmations$dat3.response) === null || _resConfirmations$dat4 === void 0 ? void 0 : _resConfirmations$dat4.result;
      PAYLOAD_SEVERE_SYMPTOMS_WEEKLY = resSevereSymptons === null || resSevereSymptons === void 0 ? void 0 : (_resSevereSymptons$da3 = resSevereSymptons.data) === null || _resSevereSymptons$da3 === void 0 ? void 0 : (_resSevereSymptons$da4 = _resSevereSymptons$da3.response) === null || _resSevereSymptons$da4 === void 0 ? void 0 : _resSevereSymptons$da4.result;
      PAYLOAD_HOSPITALIZATIONS_WEEKLY = resHospitalizations === null || resHospitalizations === void 0 ? void 0 : (_resHospitalizations$3 = resHospitalizations.data) === null || _resHospitalizations$3 === void 0 ? void 0 : (_resHospitalizations$4 = _resHospitalizations$3.response) === null || _resHospitalizations$4 === void 0 ? void 0 : _resHospitalizations$4.result; // API 정상 응답 Message 알림 코드 위치
    }

    result = {
      covid_deaths_weekly: PAYLOAD_DEATHS_WEEKLY ?? [],
      covid_confirmations_weekly: PAYLOAD_CONFIRMATIONS_WEEKLY ?? [],
      covid_severe_symptoms_weekly: PAYLOAD_SEVERE_SYMPTOMS_WEEKLY ?? [],
      covid_hospitalizations_weekly: PAYLOAD_HOSPITALIZATIONS_WEEKLY ?? []
    };
  })).catch(reason => {
    // 에러 Message 알림 코드 위치
    console.log('Occured Error =>', reason);
  });
  return result;
};

/***/ }),

/***/ 3916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ updateYesterdayData),
/* harmony export */   "LH": () => (/* binding */ updateWeeklyData),
/* harmony export */   "Ok": () => (/* binding */ loadingFetchData),
/* harmony export */   "YZ": () => (/* binding */ updateHospitalizations),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dF": () => (/* binding */ updateSevereSymptoms),
/* harmony export */   "dZ": () => (/* binding */ updateSearchDate),
/* harmony export */   "nE": () => (/* binding */ updateConfirmations),
/* harmony export */   "xb": () => (/* binding */ updateDeaths)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6333);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
// types

 // initial state

const initialState = {
  searchDate: undefined,
  // 검색날짜
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
  },
  loading: false
}; // ==============================|| SLICE - Dashboard ||============================== //

const dashboard = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'dashboard',
  initialState,
  reducers: {
    // 사망자 데이터 업데이트
    updateDeaths(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        deaths: {
          count: {
            $set: Number(action.payload.deaths.count)
          },
          rate: {
            $set: Number(action.payload.deaths.rate)
          }
        }
      });
      return nextState;
    },

    // 위중증 환자 데이터 업데이트
    updateSevereSymptoms(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        severeSymptoms: {
          count: {
            $set: Number(action.payload.severeSymptoms.count)
          },
          rate: {
            $set: Number(action.payload.severeSymptoms.rate)
          }
        }
      });
      return nextState;
    },

    // 신규 입원 데이터 업데이트
    updateHospitalizations(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        hospitalizations: {
          count: {
            $set: Number(action.payload.hospitalizations.count)
          },
          rate: {
            $set: Number(action.payload.hospitalizations.rate)
          }
        }
      });
      return nextState;
    },

    // 신규 확진자 데이터 업데이트
    updateConfirmations(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        confirmations: {
          count: {
            $set: Number(action.payload.confirmations.count)
          },
          rate: {
            $set: Number(action.payload.confirmations.rate)
          }
        }
      });
      return nextState;
    },

    // 검색 날짜 업데이트
    updateSearchDate(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        searchDate: {
          $set: action.payload
        }
      });
      return nextState;
    },

    // 전일 데이터 업데이트
    updateYesterdayData(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        yesterday: {
          $set: action.payload
        }
      });
      return nextState;
    },

    // 주간 데이터 업데이트
    updateWeeklyData(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        weekly: {
          $set: action.payload
        }
      });
      return nextState;
    },

    // APi data 로딩 상태
    loadingFetchData(state, action) {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
        loading: {
          $set: action.payload
        }
      });
      return nextState;
    }

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboard.reducer);
const {
  updateDeaths,
  updateSevereSymptoms,
  updateHospitalizations,
  updateConfirmations,
  updateSearchDate,
  updateYesterdayData,
  updateWeeklyData,
  loadingFetchData
} = dashboard.actions;

/***/ })

};
;