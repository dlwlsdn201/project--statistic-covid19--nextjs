"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26,237];
exports.modules = {

/***/ 6276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "react-copy-to-clipboard"
const external_react_copy_to_clipboard_namespaceObject = require("react-copy-to-clipboard");
;// CONCATENATED MODULE: external "react-element-to-jsx-string"
const external_react_element_to_jsx_string_namespaceObject = require("react-element-to-jsx-string");
var external_react_element_to_jsx_string_default = /*#__PURE__*/__webpack_require__.n(external_react_element_to_jsx_string_namespaceObject);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
const external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_namespaceObject);
;// CONCATENATED MODULE: external "react-syntax-highlighter/dist/cjs/styles/hljs"
const hljs_namespaceObject = require("react-syntax-highlighter/dist/cjs/styles/hljs");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./utils/SyntaxHighlight.js
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// third-party

 // ==============================|| CODE HIGHLIGHTER ||============================== //


function SyntaxHighlight(_ref) {
  let {
    children
  } = _ref,
      others = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_syntax_highlighter_default()), _objectSpread(_objectSpread({
    language: "javacript",
    showLineNumbers: true,
    style: hljs_namespaceObject.a11yDark
  }, others), {}, {
    children: children
  }));
}
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./components/third-party/Highlighter.js
 // material-ui

 // third-party


 // project import

 // assets

 // ==============================|| CLIPBOARD & HIGHLIGHTER   ||============================== //




const Highlighter = ({
  children
}) => {
  const {
    0: highlight,
    1: setHighlight
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
    sx: {
      position: 'relative'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.CardActions, {
      sx: {
        justifyContent: 'flex-end',
        p: 1,
        mb: highlight ? 1 : 0
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
          display: 'flex',
          position: 'inherit',
          right: 0,
          top: 6
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_copy_to_clipboard_namespaceObject.CopyToClipboard, {
          text: external_react_element_to_jsx_string_default()(children, {
            showFunctions: true,
            maxInlineAttributesLineLength: 100
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.Tooltip, {
            title: "Copy the source",
            placement: "top-end",
            children: /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
              color: "secondary",
              size: "small",
              sx: {
                fontSize: '0.875rem'
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.CopyOutlined, {})
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {
          orientation: "vertical",
          variant: "middle",
          flexItem: true,
          sx: {
            mx: 1
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Tooltip, {
          title: "Show the source",
          placement: "top-end",
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
            sx: {
              fontSize: '0.875rem'
            },
            size: "small",
            color: highlight ? 'primary' : 'secondary',
            onClick: () => setHighlight(!highlight),
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.CodeOutlined, {})
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Collapse, {
      in: highlight,
      children: highlight && /*#__PURE__*/jsx_runtime_.jsx(SyntaxHighlight, {
        children: external_react_element_to_jsx_string_default()(children, {
          showFunctions: true,
          showDefaultProps: false,
          maxInlineAttributesLineLength: 100
        })
      })
    })]
  });
};

/* harmony default export */ const third_party_Highlighter = (Highlighter);
;// CONCATENATED MODULE: ./components/MainCard.js
const MainCard_excluded = ["border", "boxShadow", "children", "content", "contentSX", "darkTitle", "divider", "elevation", "secondary", "shadow", "sx", "title", "codeHighlight"];

function MainCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MainCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MainCard_ownKeys(Object(source), !0).forEach(function (key) { MainCard_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MainCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MainCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MainCard_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MainCard_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MainCard_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/display-name */
 // material-ui


 // project import

 // header style




const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': {
    m: '0px auto',
    alignSelf: 'center'
  }
}; // ==============================|| CUSTOM - MAIN CARD ||============================== //

const MainCard = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    border = true,
    boxShadow,
    children,
    content = true,
    contentSX = {},
    darkTitle,
    divider = true,
    elevation,
    secondary,
    shadow,
    sx = {},
    title,
    codeHighlight
  } = _ref,
      others = MainCard_objectWithoutProperties(_ref, MainCard_excluded);

  const theme = (0,styles_.useTheme)();
  boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Card, MainCard_objectSpread(MainCard_objectSpread({
    elevation: elevation || 0,
    ref: ref
  }, others), {}, {
    sx: MainCard_objectSpread(MainCard_objectSpread({}, sx), {}, {
      border: border ? '1px solid' : 'none',
      borderRadius: 2,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey['800'],
      boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
      ':hover': {
        boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
      },
      '& pre': {
        m: 0,
        p: '16px !important',
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.75rem'
      }
    }),
    children: [!darkTitle && title && /*#__PURE__*/jsx_runtime_.jsx(material_.CardHeader, {
      sx: headerSX,
      titleTypographyProps: {
        variant: 'subtitle1'
      },
      title: title,
      action: secondary
    }), darkTitle && title && /*#__PURE__*/jsx_runtime_.jsx(material_.CardHeader, {
      sx: headerSX,
      title: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        variant: "h3",
        children: title
      }),
      action: secondary
    }), title && divider && /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {}), content && /*#__PURE__*/jsx_runtime_.jsx(material_.CardContent, {
      sx: contentSX,
      children: children
    }), !content && children, codeHighlight && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {
        sx: {
          borderStyle: 'dashed'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(third_party_Highlighter, {
        codeHighlight: codeHighlight,
        main: true,
        children: children
      })]
    })]
  }));
});
/* harmony default export */ const components_MainCard = (MainCard);
;// CONCATENATED MODULE: ./components/cards/statistics/AnalyticEcommerce.js

// material-ui
 // project import

 // assets

 // ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //





const AnalyticEcommerce = ({
  color,
  title,
  count,
  percentage,
  isLoss,
  extra,
  subtitle,
  unit
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_MainCard, {
  contentSX: {
    p: 2.25
  },
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
    spacing: 0.5,
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
      variant: "h6",
      color: "textSecondary",
      children: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      alignItems: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "h4",
          color: "inherit",
          children: count ?? '-'
        })
      }), typeof percentage && percentage !== 'NaN' && /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(material_.Chip, {
          variant: "combined",
          color: Number(percentage) > 0 ? 'warning' : 'primary',
          icon: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: Number(percentage) > 0 ? /*#__PURE__*/jsx_runtime_.jsx(icons_.RiseOutlined, {
              style: {
                fontSize: '0.75rem',
                color: 'inherit'
              }
            }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.FallOutlined, {
              style: {
                fontSize: '0.75rem',
                color: 'inherit'
              }
            })
          }),
          label: `${percentage}% (전일 대비)`,
          sx: {
            ml: 1.25,
            pl: 1
          },
          size: "small"
        })
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
    sx: {
      pt: 2.25
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Typography, {
      variant: "caption",
      color: "textSecondary",
      children: ["\uC778\uAD6C 10\uB9CC\uBA85\uB2F9 ", subtitle, ' ', /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        component: "span",
        variant: "caption",
        sx: {
          color: `${'success'}.main`
        },
        children: `${extra ?? '-'} (${unit})`
      }), ' ']
    })
  })]
});

AnalyticEcommerce.defaultProps = {
  color: 'primary'
};
/* harmony default export */ const statistics_AnalyticEcommerce = (AnalyticEcommerce);
// EXTERNAL MODULE: ./components/Dashboard/Handlers.ts
var Handlers = __webpack_require__(8142);
;// CONCATENATED MODULE: external "recharts"
const external_recharts_namespaceObject = require("recharts");
;// CONCATENATED MODULE: ./components/Dashboard/ConfirmationOfWeeklyCharts.tsx





const ConfirmationOfWeeklyCharts = chartData => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_namespaceObject.LineChart, {
  data: chartData,
  height: 300,
  children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.XAxis, {
    dataKey: "datetime",
    label: "\uB0A0\uC9DC(\uC77C)",
    height: 100
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.YAxis, {
    dataKey: "value",
    width: 100,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Label, {
      value: "\uC778\uC6D0(\uBA85)",
      position: "center",
      dx: -25
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Tooltip, {
    formatter: value => [`${value}명`, '인원'],
    labelFormatter: label => label ? `${label.split('.')[0]}월 ${label.split('.')[1]}일` : '-'
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Line, {
    type: "monotone",
    dataKey: "value",
    stroke: "rgba(3, 169, 244, 0.85)",
    fill: "rgba(3, 169, 244, 0.85)"
  })]
});

/* harmony default export */ const Dashboard_ConfirmationOfWeeklyCharts = (ConfirmationOfWeeklyCharts);
;// CONCATENATED MODULE: ./lib/palette.js
const palette = {
  deaths: '#ff1c1c',
  confirmations: 'rgba(3, 169, 244, 0.85)',
  severeSymtoms: '#ff9e37ff',
  hospitalization: '#f486f6',
  primary: '#876445',
  secondary: '#CA965C',
  third: '#CFD8DC'
};
;// CONCATENATED MODULE: ./components/Dashboard/DeathOfWeeklyCharts.tsx






const DeathOfWeeklyCharts = chartData => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_namespaceObject.BarChart, {
  data: chartData,
  height: 300,
  children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.XAxis, {
    dataKey: "datetime",
    label: "\uB0A0\uC9DC(\uC77C)",
    height: 100
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.YAxis, {
    dataKey: "value",
    width: 100,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Label, {
      value: "\uC778\uC6D0(\uBA85)",
      position: "center",
      dx: -20
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Tooltip, {
    formatter: value => [`${value}명`, '인원'],
    labelFormatter: label => label ? `${label.split('.')[0]}월 ${label.split('.')[1]}일` : '',
    cursorStyle: {
      background: 'yellow'
    },
    cursor: {
      fill: '#a8a8a8',
      opacity: 0.2
    }
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Bar, {
    type: "monotone",
    dataKey: "value",
    stroke: palette.deaths,
    fill: palette.deaths,
    maxBarSize: 15
  })]
});

/* harmony default export */ const Dashboard_DeathOfWeeklyCharts = (DeathOfWeeklyCharts);
;// CONCATENATED MODULE: ./components/Dashboard/index.jsx
 // material-ui

 // project import


 // assets





 // avatar style




const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
}; // action style

const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
}; // sales report status

const Dashboard_status = [{
  value: 'today',
  label: 'Today'
}, {
  value: 'month',
  label: 'This Month'
}, {
  value: 'year',
  label: 'This Year'
}]; // ==============================|| DASHBOARD - DEFAULT ||============================== //

const Dashboard = () => {
  var _yesterday$deaths, _yesterday$severeSymp, _yesterday$hospitaliz, _yesterday$confirmati, _confirmations$count, _deaths$count, _severeSymptoms$count, _hospitalizations$cou;

  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('today');
  const {
    0: slot,
    1: setSlot
  } = (0,external_react_.useState)('week');
  const dashboardState = (0,external_react_redux_.useSelector)(state => state.dashboard, external_react_redux_.shallowEqual);
  const {
    deaths,
    severeSymptoms,
    hospitalizations,
    confirmations,
    searchDate,
    yesterday,
    weekly
  } = dashboardState; // ---- functions -----

  const getTotalValueOfWeekly = chartData => {
    let result = 0;

    if (chartData && chartData.length > 0) {
      result = chartData.reduce((acc, curObj) => {
        return curObj !== null && curObj !== void 0 && curObj.value ? acc + curObj.value : acc;
      }, result);
    }

    return result;
  }; // ----- Data objs -----


  const changeRate = {
    deaths: (0,Handlers/* calcRateOfDayToDay */.hI)(deaths === null || deaths === void 0 ? void 0 : deaths.count, yesterday === null || yesterday === void 0 ? void 0 : (_yesterday$deaths = yesterday.deaths) === null || _yesterday$deaths === void 0 ? void 0 : _yesterday$deaths.count),
    severeSymptoms: (0,Handlers/* calcRateOfDayToDay */.hI)(severeSymptoms === null || severeSymptoms === void 0 ? void 0 : severeSymptoms.count, yesterday === null || yesterday === void 0 ? void 0 : (_yesterday$severeSymp = yesterday.severeSymptoms) === null || _yesterday$severeSymp === void 0 ? void 0 : _yesterday$severeSymp.count),
    hospitalizations: (0,Handlers/* calcRateOfDayToDay */.hI)(hospitalizations === null || hospitalizations === void 0 ? void 0 : hospitalizations.count, yesterday === null || yesterday === void 0 ? void 0 : (_yesterday$hospitaliz = yesterday.hospitalizations) === null || _yesterday$hospitaliz === void 0 ? void 0 : _yesterday$hospitaliz.count),
    confirmations: (0,Handlers/* calcRateOfDayToDay */.hI)(confirmations === null || confirmations === void 0 ? void 0 : confirmations.count, yesterday === null || yesterday === void 0 ? void 0 : (_yesterday$confirmati = yesterday.confirmations) === null || _yesterday$confirmati === void 0 ? void 0 : _yesterday$confirmati.count)
  };
  const chartData = {
    deaths: (0,Handlers/* getChartData */.W$)(weekly === null || weekly === void 0 ? void 0 : weekly.deaths),
    confirmations: (0,Handlers/* getChartData */.W$)(weekly === null || weekly === void 0 ? void 0 : weekly.confirmations)
  }; // -----------------

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        className: "grid-wrapper",
        container: true,
        rowSpacing: 5,
        columnSpacing: 2.75,
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sx: {
            mb: -2.25
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
            variant: "h5",
            children: "\uB2F9\uC77C \uC885\uD569 \uD604\uD669"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(statistics_AnalyticEcommerce, {
            title: "\uC2E0\uADDC \uD655\uC9C4\uC790 \uC218",
            count: confirmations === null || confirmations === void 0 ? void 0 : (_confirmations$count = confirmations.count) === null || _confirmations$count === void 0 ? void 0 : _confirmations$count.toLocaleString(),
            percentage: changeRate === null || changeRate === void 0 ? void 0 : changeRate.confirmations,
            extra: confirmations === null || confirmations === void 0 ? void 0 : confirmations.rate,
            unit: "%",
            subtitle: "\uC2E0\uADDC \uD655\uC9C4\uC790 \uD604\uD669"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(statistics_AnalyticEcommerce, {
            title: "\uC0AC\uB9DD\uC790 \uC218",
            count: deaths === null || deaths === void 0 ? void 0 : (_deaths$count = deaths.count) === null || _deaths$count === void 0 ? void 0 : _deaths$count.toLocaleString(),
            percentage: changeRate === null || changeRate === void 0 ? void 0 : changeRate.deaths,
            unit: "%",
            subtitle: "\uC0AC\uB9DD\uC790 \uD604\uD669",
            extra: deaths === null || deaths === void 0 ? void 0 : deaths.rate
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(statistics_AnalyticEcommerce, {
            title: "\uC7AC\uC6D0 \uC704\uC911\uC99D \uBC1C\uC0DD \uC218",
            count: severeSymptoms === null || severeSymptoms === void 0 ? void 0 : (_severeSymptoms$count = severeSymptoms.count) === null || _severeSymptoms$count === void 0 ? void 0 : _severeSymptoms$count.toLocaleString(),
            percentage: changeRate === null || changeRate === void 0 ? void 0 : changeRate.severeSymptoms,
            unit: "%",
            subtitle: "\uC7AC\uC6D0 \uC704\uC911\uC99D \uBC1C\uC0DD \uD604\uD669",
            extra: severeSymptoms === null || severeSymptoms === void 0 ? void 0 : severeSymptoms.rate
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(statistics_AnalyticEcommerce, {
            title: "\uC77C\uC77C \uC2E0\uADDC\uC785\uC6D0 \uC218",
            count: hospitalizations === null || hospitalizations === void 0 ? void 0 : (_hospitalizations$cou = hospitalizations.count) === null || _hospitalizations$cou === void 0 ? void 0 : _hospitalizations$cou.toLocaleString(),
            percentage: changeRate === null || changeRate === void 0 ? void 0 : changeRate.hospitalizations,
            unit: "%",
            subtitle: "\uC2E0\uADDC \uD655\uC9C4\uC790 \uD604\uD669",
            extra: hospitalizations === null || hospitalizations === void 0 ? void 0 : hospitalizations.rate
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          md: 8,
          sx: {
            display: {
              sm: 'none',
              md: 'block',
              lg: 'none'
            }
          }
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        rowSpacing: 5,
        columnSpacing: 2.75,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
          item: true,
          xs: 12,
          md: 7,
          lg: 8,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            alignItems: "center",
            justifyContent: "space-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
              item: true,
              sx: {
                mb: 1.25
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
                variant: "h5",
                children: "\uC8FC\uAC04 \uD604\uD669 \uCC28\uD2B8"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
              item: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Stack, {
                direction: "row",
                alignItems: "center",
                spacing: 0,
                children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
                  size: "small",
                  onClick: () => setSlot('week'),
                  style: {
                    color: slot === 'week' ? 'rgba(3, 169, 244, 0.85)' : 'white',
                    borderColor: slot === 'week' ? 'rgba(3, 169, 244, 0.85)' : 'white'
                  } // color={slot === 'week' ? 'primary' : 'secondary'}
                  ,
                  variant: slot === 'week' ? 'outlined' : 'text',
                  children: "Week"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(components_MainCard, {
            sx: {
              mt: 1.5
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
              sx: {
                pt: 1,
                pr: 2
              },
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
                spacing: 1,
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
                  variant: "h6",
                  color: "textSecondary",
                  children: "\uC8FC\uAC04 \uCD1D \uD655\uC9C4\uC790 \uC218"
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
                  variant: "h5",
                  children: `${getTotalValueOfWeekly(chartData === null || chartData === void 0 ? void 0 : chartData.confirmations).toLocaleString()} 명`
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  padding: '40px 0px 0px'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                  minWidth: "100%",
                  minHeight: 300,
                  children: Dashboard_ConfirmationOfWeeklyCharts(chartData === null || chartData === void 0 ? void 0 : chartData.deaths)
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
          item: true,
          xs: 12,
          md: 5,
          lg: 4,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            alignItems: "center",
            justifyContent: "space-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
              item: true,
              sx: {
                mb: 1.25
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
                variant: "h5",
                style: {
                  visibility: 'hidden'
                },
                children: "\uC8FC\uAC04 \uC0AC\uB9DD\uC790 \uD604\uD669"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
              item: true
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_MainCard, {
            sx: {
              mt: 1.5
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
              sx: {
                pt: 1,
                pr: 2
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Stack, {
                spacing: 1,
                children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
                  variant: "h6",
                  color: "textSecondary",
                  children: "\uC8FC\uAC04 \uCD1D \uC0AC\uB9DD\uC790 \uC218"
                }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
                  variant: "h5",
                  children: `${getTotalValueOfWeekly(chartData === null || chartData === void 0 ? void 0 : chartData.deaths)} 명`
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                padding: '40px 0px 0px'
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                minWidth: "100%",
                minHeight: 300,
                children: Dashboard_DeathOfWeeklyCharts(chartData === null || chartData === void 0 ? void 0 : chartData.deaths)
              })
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Dashboard = (Dashboard);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Seo.tsx





const Seo = ({
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((head_default()), {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
      children: [title, " | page"]
    })
  });
};

/* harmony default export */ const components_Seo = (Seo);
// EXTERNAL MODULE: ./store/reducers/dashboard.ts
var dashboard = __webpack_require__(3916);
// EXTERNAL MODULE: ./pages/api/index.js + 1 modules
var api = __webpack_require__(939);
;// CONCATENATED MODULE: ./pages/dashboard.tsx
// import type { NextPage } from 'next';











const Home = props => {
  var _dashboardState$weekl5, _dashboardState$weekl6, _dashboardState$weekl7, _dashboardState$weekl8;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const dashboardState = (0,external_react_redux_.useSelector)(state => state.dashboard, external_react_redux_.shallowEqual);
  const initData = (0,external_react_.useCallback)(props => {
    const {
      // covid_status_today,
      covid_deaths_weekly,
      covid_confirmations_weekly,
      covid_severe_symptoms_weekly,
      covid_hospitalizations_weekly
    } = props;
    console.group('called initData()'); // const statusData = covid_status_today[0]; // 국내 일일 확진자, 사망자, 중증 발생자, 신규 입원자 현황 데이터

    const weeklyDeathsData = covid_deaths_weekly[0];
    const weeklyConfirmationsData = covid_confirmations_weekly[0];
    const weeklySevereSymptomsData = covid_severe_symptoms_weekly[0];
    const weeklyhospitalizationsData = covid_hospitalizations_weekly[0];
    let updateData;

    if (weeklyDeathsData && weeklyConfirmationsData && weeklySevereSymptomsData && weeklyhospitalizationsData) {
      var _updateData, _dashboardState$weekl, _dashboardState$weekl2, _dashboardState$weekl3, _dashboardState$weekl4;

      updateData = {
        // store에 업데이트할 response data
        searchDate: weeklyDeathsData === null || weeklyDeathsData === void 0 ? void 0 : weeklyDeathsData.mmddhh,
        deaths: {
          count: weeklyDeathsData === null || weeklyDeathsData === void 0 ? void 0 : weeklyDeathsData.cnt7,
          rate: weeklyDeathsData === null || weeklyDeathsData === void 0 ? void 0 : weeklyDeathsData.rate7
        },
        hospitalizations: {
          count: weeklyhospitalizationsData === null || weeklyhospitalizationsData === void 0 ? void 0 : weeklyhospitalizationsData.cnt7,
          rate: weeklyhospitalizationsData === null || weeklyhospitalizationsData === void 0 ? void 0 : weeklyhospitalizationsData.rate7
        },
        severeSymptoms: {
          count: weeklySevereSymptomsData === null || weeklySevereSymptomsData === void 0 ? void 0 : weeklySevereSymptomsData.cnt7,
          rate: weeklySevereSymptomsData === null || weeklySevereSymptomsData === void 0 ? void 0 : weeklySevereSymptomsData.rate7
        },
        confirmations: {
          count: weeklyConfirmationsData === null || weeklyConfirmationsData === void 0 ? void 0 : weeklyConfirmationsData.cnt7,
          rate: weeklyConfirmationsData === null || weeklyConfirmationsData === void 0 ? void 0 : weeklyConfirmationsData.rate7
        },
        yesterday: {
          // 어제일자 데이터
          deaths: {
            // 사망
            count: weeklyDeathsData.cnt6,
            rate: weeklyDeathsData.rate6
          },
          severeSymptoms: {
            // 재원 위중증
            count: weeklySevereSymptomsData.cnt6,
            rate: weeklySevereSymptomsData.rate6
          },
          hospitalizations: {
            // 신규 입원
            count: weeklyhospitalizationsData.cnt6,
            rate: weeklyhospitalizationsData.rate6
          },
          confirmations: {
            count: weeklyConfirmationsData.cnt6,
            rate: weeklyConfirmationsData.rate6
          }
        }
      };
      dispatch((0,dashboard/* updateSearchDate */.dZ)(((_updateData = updateData) === null || _updateData === void 0 ? void 0 : _updateData.searchDate) ?? (dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.searchDate)));
      dispatch((0,dashboard/* updateSevereSymptoms */.dF)({
        severeSymptoms: updateData.severeSymptoms ?? (dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.severeSymptoms)
      }));
      dispatch((0,dashboard/* updateHospitalizations */.YZ)({
        hospitalizations: updateData.hospitalizations ?? (dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.hospitalizations)
      }));
      dispatch((0,dashboard/* updateConfirmations */.nE)({
        confirmations: updateData.confirmations ?? (dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.confirmations)
      }));
      dispatch((0,dashboard/* updateDeaths */.xb)({
        deaths: updateData.deaths ?? (dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.deaths)
      }));
      dispatch((0,dashboard/* updateYesterdayData */.AM)(updateData.yesterday ?? (dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.yesterday)));
      dispatch((0,dashboard/* updateWeeklyData */.LH)({
        deaths: weeklyDeathsData ?? (dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl = dashboardState.weekly) === null || _dashboardState$weekl === void 0 ? void 0 : _dashboardState$weekl.deaths),
        confirmations: weeklyConfirmationsData ?? (dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl2 = dashboardState.weekly) === null || _dashboardState$weekl2 === void 0 ? void 0 : _dashboardState$weekl2.confirmations),
        severeSymptoms: weeklySevereSymptomsData ?? (dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl3 = dashboardState.weekly) === null || _dashboardState$weekl3 === void 0 ? void 0 : _dashboardState$weekl3.severeSymptoms),
        hospitalizations: weeklyhospitalizationsData ?? (dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl4 = dashboardState.weekly) === null || _dashboardState$weekl4 === void 0 ? void 0 : _dashboardState$weekl4.hospitalizations)
      }));
      console.groupEnd();
    }
  }, [dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.confirmations, dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.deaths, dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.hospitalizations, dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.searchDate, dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.severeSymptoms, dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl5 = dashboardState.weekly) === null || _dashboardState$weekl5 === void 0 ? void 0 : _dashboardState$weekl5.confirmations, dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl6 = dashboardState.weekly) === null || _dashboardState$weekl6 === void 0 ? void 0 : _dashboardState$weekl6.deaths, dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl7 = dashboardState.weekly) === null || _dashboardState$weekl7 === void 0 ? void 0 : _dashboardState$weekl7.hospitalizations, dashboardState === null || dashboardState === void 0 ? void 0 : (_dashboardState$weekl8 = dashboardState.weekly) === null || _dashboardState$weekl8 === void 0 ? void 0 : _dashboardState$weekl8.severeSymptoms, dashboardState === null || dashboardState === void 0 ? void 0 : dashboardState.yesterday, dispatch]);
  (0,external_react_.useEffect)(() => {
    console.log('useEffect');
    initData(props);
  }, [initData, props]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Seo, {
      title: "\uB300\uC2DC\uBCF4\uB4DC"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Dashboard, {})]
  });
};

/* harmony default export */ const pages_dashboard = (Home); // SSR 적용

async function getServerSideProps() {
  let PAYLOAD_DEATHS_WEEKLY;
  let PAYLOAD_CONFIRMATIONS_WEEKLY;
  let PAYLOAD_SEVERE_SYMPTOMS_WEEKLY;
  let PAYLOAD_HOSPITALIZATIONS_WEEKLY;
  await external_axios_default().all([(0,api.READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY)(), // 주간 국내 코로나 사망자 조회 API 호출
  (0,api.READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY)(), // 주간 국내 코로나 신규 확진자 조회 API 호출
  (0,api.READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY)(), // 주간 국내 코로나 위중증자 조회 API 호출
  (0,api.READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY)() // 주간 국내 코로나 신규 입원자 조회 API 호출
  ]).then(external_axios_default().spread((resDeaths, resConfirmations, resSevereSymptons, resHospitalizations) => {
    var _resDeaths$data, _resDeaths$data$respo, _resConfirmations$dat, _resConfirmations$dat2, _resSevereSymptons$da, _resSevereSymptons$da2, _resHospitalizations$, _resHospitalizations$2;

    // 공공데이터포털 REST API 에 에러 이슈가 있음 _ 09.24 ~ ing (해결될 떄까지 테스트 데이터 사용)
    if (resDeaths.status === 200 && ((_resDeaths$data = resDeaths.data) === null || _resDeaths$data === void 0 ? void 0 : (_resDeaths$data$respo = _resDeaths$data.response) === null || _resDeaths$data$respo === void 0 ? void 0 : _resDeaths$data$respo.result.length) > 0 && resConfirmations.status === 200 && ((_resConfirmations$dat = resConfirmations.data) === null || _resConfirmations$dat === void 0 ? void 0 : (_resConfirmations$dat2 = _resConfirmations$dat.response) === null || _resConfirmations$dat2 === void 0 ? void 0 : _resConfirmations$dat2.result.length) > 0 && resSevereSymptons.status === 200 && ((_resSevereSymptons$da = resSevereSymptons.data) === null || _resSevereSymptons$da === void 0 ? void 0 : (_resSevereSymptons$da2 = _resSevereSymptons$da.response) === null || _resSevereSymptons$da2 === void 0 ? void 0 : _resSevereSymptons$da2.result.length) > 0 && resHospitalizations.status === 200 && ((_resHospitalizations$ = resHospitalizations.data) === null || _resHospitalizations$ === void 0 ? void 0 : (_resHospitalizations$2 = _resHospitalizations$.response) === null || _resHospitalizations$2 === void 0 ? void 0 : _resHospitalizations$2.result.length) > 0) {
      var _resDeaths$data2, _resDeaths$data2$resp, _resConfirmations$dat3, _resConfirmations$dat4, _resSevereSymptons$da3, _resSevereSymptons$da4, _resHospitalizations$3, _resHospitalizations$4;

      PAYLOAD_DEATHS_WEEKLY = resDeaths === null || resDeaths === void 0 ? void 0 : (_resDeaths$data2 = resDeaths.data) === null || _resDeaths$data2 === void 0 ? void 0 : (_resDeaths$data2$resp = _resDeaths$data2.response) === null || _resDeaths$data2$resp === void 0 ? void 0 : _resDeaths$data2$resp.result;
      PAYLOAD_CONFIRMATIONS_WEEKLY = resConfirmations === null || resConfirmations === void 0 ? void 0 : (_resConfirmations$dat3 = resConfirmations.data) === null || _resConfirmations$dat3 === void 0 ? void 0 : (_resConfirmations$dat4 = _resConfirmations$dat3.response) === null || _resConfirmations$dat4 === void 0 ? void 0 : _resConfirmations$dat4.result;
      PAYLOAD_SEVERE_SYMPTOMS_WEEKLY = resSevereSymptons === null || resSevereSymptons === void 0 ? void 0 : (_resSevereSymptons$da3 = resSevereSymptons.data) === null || _resSevereSymptons$da3 === void 0 ? void 0 : (_resSevereSymptons$da4 = _resSevereSymptons$da3.response) === null || _resSevereSymptons$da4 === void 0 ? void 0 : _resSevereSymptons$da4.result;
      PAYLOAD_HOSPITALIZATIONS_WEEKLY = resHospitalizations === null || resHospitalizations === void 0 ? void 0 : (_resHospitalizations$3 = resHospitalizations.data) === null || _resHospitalizations$3 === void 0 ? void 0 : (_resHospitalizations$4 = _resHospitalizations$3.response) === null || _resHospitalizations$4 === void 0 ? void 0 : _resHospitalizations$4.result;
    }
  })).catch(reason => console.log('Occured Error =>', reason));
  return {
    props: {
      covid_deaths_weekly: PAYLOAD_DEATHS_WEEKLY ?? [],
      covid_confirmations_weekly: PAYLOAD_CONFIRMATIONS_WEEKLY ?? [],
      covid_severe_symptoms_weekly: PAYLOAD_SEVERE_SYMPTOMS_WEEKLY ?? [],
      covid_hospitalizations_weekly: PAYLOAD_HOSPITALIZATIONS_WEEKLY ?? []
    }
  };
}

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6333:
/***/ ((module) => {

module.exports = require("immutability-helper");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [939,61], () => (__webpack_exec__(6276)));
module.exports = __webpack_exports__;

})();