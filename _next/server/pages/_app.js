"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,237];
exports.modules = {

/***/ 2406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./store/reducers/menu.js
// types
 // initial state

const initialState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: true,
  componentDrawerOpen: true
}; // ==============================|| SLICE - MENU ||============================== //

const menu = (0,toolkit_.createSlice)({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    }

  }
});
/* harmony default export */ const reducers_menu = (menu.reducer);
const {
  activeItem,
  activeComponent,
  openDrawer,
  openComponentDrawer
} = menu.actions;
// EXTERNAL MODULE: ./store/reducers/dashboard.ts
var dashboard = __webpack_require__(3916);
;// CONCATENATED MODULE: ./store/reducers/index.js
// third-party
 // project import


 // ==============================|| COMBINE REDUCERS ||============================== //

const reducers = (0,external_redux_namespaceObject.combineReducers)({
  menu: reducers_menu,
  dashboard: dashboard/* default */.ZP
});
/* harmony default export */ const store_reducers = (reducers);
;// CONCATENATED MODULE: ./store/index.js
// third-party
 // project import

 // ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = (0,toolkit_.configureStore)({
  reducer: store_reducers
});
const {
  dispatch
} = store;

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "simplebar-react"
const external_simplebar_react_namespaceObject = require("simplebar-react");
var external_simplebar_react_default = /*#__PURE__*/__webpack_require__.n(external_simplebar_react_namespaceObject);
;// CONCATENATED MODULE: external "react-device-detect"
const external_react_device_detect_namespaceObject = require("react-device-detect");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/third-party/SideBar.js
const _excluded = ["children", "sx"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// material-ui

 // third-party


 // root style




const RootStyle = (0,styles_.styled)(external_react_device_detect_namespaceObject.BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
}); // scroll bar wrapper

const SimpleBarStyle = (0,styles_.styled)((external_simplebar_react_default()))(({
  theme
}) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: (0,styles_.alpha)(theme.palette.grey[500], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
})); // ==============================|| SIMPLE SCROLL BAR  ||============================== //

function SimpleBarScroll(_ref) {
  let {
    children,
    sx
  } = _ref,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(RootStyle, {
      children: /*#__PURE__*/jsx_runtime_.jsx(SimpleBarStyle, _objectSpread(_objectSpread({
        timeout: 500,
        clickOnTrack: false,
        sx: sx
      }, other), {}, {
        children: children
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_device_detect_namespaceObject.MobileView, {
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Box, _objectSpread(_objectSpread({
        sx: _objectSpread({
          overflowX: 'auto'
        }, sx)
      }, other), {}, {
        children: children
      }))
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/NavItem.js
function NavItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function NavItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? NavItem_ownKeys(Object(source), !0).forEach(function (key) { NavItem_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : NavItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function NavItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { Link } from 'react-router-dom';


 // material-ui


 // project import

 // ==============================|| NAVIGATION - LIST ITEM ||============================== //




const NavItem = ({
  item,
  level
}) => {
  const theme = (0,styles_.useTheme)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const menu = (0,external_react_redux_.useSelector)(state => state.menu);
  const {
    drawerOpen,
    openItem
  } = menu;
  let itemTarget = '_self';

  if (item.target) {
    itemTarget = '_blank';
  } // let listItemProps = {
  // 	component: forwardRef((props, ref) => (
  // 		<Link  href={item.url}>
  //       <a>
  //       </a>
  //     </Link>
  // 	))
  // };


  if (item !== null && item !== void 0 && item.external) {// listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = id => {
    dispatch(activeItem({
      openItem: [id]
    }));
  };

  const Icon = item.icon;
  const itemIcon = item.icon ? /*#__PURE__*/jsx_runtime_.jsx(Icon, {
    style: {
      fontSize: drawerOpen ? '1rem' : '1.25rem'
    }
  }) : false;
  const isSelected = openItem.findIndex(id => id === item.id) > -1; // active menu item on page load

  (0,external_react_.useEffect)(() => {
    const currentIndex = document.location.pathname.toString().split('/').findIndex(id => id === item.id);

    if (currentIndex > -1) {
      dispatch(activeItem({
        openItem: [item.id]
      }));
    } // eslint-disable-next-line

  }, []);
  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ListItemButton // {...listItemProps}
  , {
    disabled: item.disabled,
    onClick: () => itemHandler(item.id),
    selected: isSelected,
    sx: NavItem_objectSpread(NavItem_objectSpread({
      zIndex: 1201,
      pl: drawerOpen ? `${level * 28}px` : 1.5,
      py: !drawerOpen && level === 1 ? 1.25 : 1
    }, drawerOpen && {
      '&:hover': {
        bgcolor: 'primary.lighter'
      },
      '&.Mui-selected': {
        bgcolor: 'primary.lighter',
        borderRight: `2px solid ${theme.palette.primary.main}`,
        color: iconSelectedColor,
        '&:hover': {
          color: iconSelectedColor,
          bgcolor: 'primary.lighter'
        }
      }
    }), !drawerOpen && {
      '&:hover': {
        bgcolor: 'transparent'
      },
      '&.Mui-selected': {
        '&:hover': {
          bgcolor: 'transparent'
        },
        bgcolor: 'transparent'
      }
    }),
    children: [itemIcon && /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemIcon, {
      sx: NavItem_objectSpread(NavItem_objectSpread({
        minWidth: 28,
        color: isSelected ? iconSelectedColor : textColor
      }, !drawerOpen && {
        borderRadius: 1.5,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          bgcolor: 'secondary.lighter'
        }
      }), !drawerOpen && isSelected && {
        bgcolor: 'primary.lighter',
        '&:hover': {
          bgcolor: 'primary.lighter'
        }
      }),
      children: itemIcon
    }), (drawerOpen || !drawerOpen && level !== 1) && /*#__PURE__*/jsx_runtime_.jsx(material_.ListItemText, {
      primary: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        variant: "h6",
        sx: {
          color: isSelected ? iconSelectedColor : textColor
        },
        children: item.title
      })
    }), (drawerOpen || !drawerOpen && level !== 1) && item.chip && /*#__PURE__*/jsx_runtime_.jsx(material_.Chip, {
      color: item.chip.color,
      variant: item.chip.variant,
      size: item.chip.size,
      label: item.chip.label,
      avatar: item.chip.avatar && /*#__PURE__*/jsx_runtime_.jsx(material_.Avatar, {
        children: item.chip.avatar
      })
    })]
  });
};

/* harmony default export */ const Navigation_NavItem = (NavItem);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/NavGroup.js
 // material-ui

 // project import

 // ==============================|| NAVIGATION - LIST GROUP ||============================== //



const NavGroup = ({
  item
}) => {
  var _item$children;

  const menu = (0,external_react_redux_.useSelector)(state => state.menu);
  const {
    drawerOpen
  } = menu;
  const navCollapse = (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(menuItem => {
    switch (menuItem.type) {
      case 'collapse':
        return /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "caption",
          color: "error",
          sx: {
            p: 2.5
          },
          children: "collapse - only available in paid version"
        }, menuItem.id);

      case 'item':
        return /*#__PURE__*/jsx_runtime_.jsx(Navigation_NavItem, {
          item: menuItem,
          level: 1
        }, menuItem.id);

      default:
        return /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "h6",
          color: "error",
          align: "center",
          children: "Fix - Group Collapse or Items"
        }, menuItem.id);
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx(material_.List, {
    subheader: item.title && drawerOpen && /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
      sx: {
        pl: 3,
        mb: 1.5
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        variant: "subtitle2",
        color: "textSecondary",
        children: item.title
      })
    }),
    sx: {
      mb: drawerOpen ? 1.5 : 0,
      py: 0,
      zIndex: 0
    },
    children: navCollapse
  });
};

/* harmony default export */ const Navigation_NavGroup = (NavGroup);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/menu-items/pages.js
// assets
 // icons

const icons = {
  LoginOutlined: icons_.LoginOutlined,
  ProfileOutlined: icons_.ProfileOutlined
}; // ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [{
    id: 'login1',
    title: 'Login',
    type: 'item',
    url: '/login',
    icon: icons.LoginOutlined,
    target: true
  }, {
    id: 'register1',
    title: 'Register',
    type: 'item',
    url: '/register',
    icon: icons.ProfileOutlined,
    target: true
  }]
};
/* harmony default export */ const menu_items_pages = (pages);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/menu-items/dashboard.js
// assets
 // icons

const dashboard_icons = {
  DashboardOutlined: icons_.DashboardOutlined
}; // ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard_dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [{
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/dashboard/default',
    icon: dashboard_icons.DashboardOutlined,
    breadcrumbs: false
  }]
};
/* harmony default export */ const menu_items_dashboard = (dashboard_dashboard);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/menu-items/utilities.js
// assets
 // icons

const utilities_icons = {
  FontSizeOutlined: icons_.FontSizeOutlined,
  BgColorsOutlined: icons_.BgColorsOutlined,
  BarcodeOutlined: icons_.BarcodeOutlined,
  AntDesignOutlined: icons_.AntDesignOutlined,
  LoadingOutlined: icons_.LoadingOutlined,
  AppstoreAddOutlined: icons_.AppstoreAddOutlined
}; // ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [{
    id: 'util-typography',
    title: 'Typography',
    type: 'item',
    url: '/typography',
    icon: utilities_icons.FontSizeOutlined
  }, {
    id: 'util-color',
    title: 'Color',
    type: 'item',
    url: '/color',
    icon: utilities_icons.BgColorsOutlined
  }, {
    id: 'util-shadow',
    title: 'Shadow',
    type: 'item',
    url: '/shadow',
    icon: utilities_icons.BarcodeOutlined
  }, {
    id: 'ant-icons',
    title: 'Ant Icons',
    type: 'item',
    url: '/icons/ant',
    icon: utilities_icons.AntDesignOutlined,
    breadcrumbs: false
  }]
};
/* harmony default export */ const menu_items_utilities = (utilities);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/menu-items/support.js
// assets
 // icons

const support_icons = {
  ChromeOutlined: icons_.ChromeOutlined,
  QuestionOutlined: icons_.QuestionOutlined
}; // ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [{
    id: 'sample-page',
    title: 'Sample Page',
    type: 'item',
    url: '/sample-page',
    icon: support_icons.ChromeOutlined
  }, {
    id: 'documentation',
    title: 'Documentation',
    type: 'item',
    url: 'https://codedthemes.gitbook.io/mantis-react/',
    icon: support_icons.QuestionOutlined,
    external: true,
    target: true
  }]
};
/* harmony default export */ const menu_items_support = (support);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/menu-items/index.js
// project import



 // ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [menu_items_dashboard, menu_items_pages, menu_items_utilities, menu_items_support]
};
/* harmony default export */ const menu_items = (menuItems);
;// CONCATENATED MODULE: ./components/NavBar/Navigation/index.js
// material-ui
 // project import


 // ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //



const Navigation = () => {
  const navGroups = menu_items.items.map(item => {
    switch (item.type) {
      case 'group':
        return /*#__PURE__*/jsx_runtime_.jsx(Navigation_NavGroup, {
          item: item
        }, item.id);

      default:
        return /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
          variant: "h6",
          color: "error",
          align: "center",
          children: "Fix - Navigation Group"
        }, item.id);
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
    sx: {
      pt: 2
    },
    children: navGroups
  });
};

/* harmony default export */ const NavBar_Navigation = (Navigation);
;// CONCATENATED MODULE: ./components/Sidebar.tsx




const SideBar = () => /*#__PURE__*/jsx_runtime_.jsx(SimpleBarScroll, {
  sx: {
    '& .simplebar-content': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  children: /*#__PURE__*/jsx_runtime_.jsx(NavBar_Navigation, {})
});

/* harmony default export */ const Sidebar = (SideBar);
;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
;// CONCATENATED MODULE: ./components/Modules/Refresh.jsx
function Refresh_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Refresh_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Refresh_ownKeys(Object(source), !0).forEach(function (key) { Refresh_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Refresh_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Refresh_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Refresh = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(icons_.SyncOutlined, Refresh_objectSpread({}, props));
};

/* harmony default export */ const Modules_Refresh = (Refresh);
// EXTERNAL MODULE: ./components/Dashboard/Handlers.ts
var Handlers = __webpack_require__(8142);
;// CONCATENATED MODULE: ./components/Header/index.tsx









const Header = () => {
  const {
    0: searchTime,
    1: setSearchTime
  } = (0,external_react_.useState)(null);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const dashboardState = (0,external_react_redux_.useSelector)(state => state.dashboard, external_react_redux_.shallowEqual);

  const dispatchRefreshData = props => {
    const {
      covid_deaths_weekly,
      covid_confirmations_weekly,
      covid_severe_symptoms_weekly,
      covid_hospitalizations_weekly
    } = props || [];

    if (covid_deaths_weekly && covid_confirmations_weekly && covid_severe_symptoms_weekly && covid_hospitalizations_weekly) {
      // const statusData = covid_status_today[0]; // 국내 일일 확진자, 사망자, 중증 발생자, 신규 입원자 현황 데이터
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
        console.log('dispatch 완료');
      }
    } else {
      console.log('invalid data');
    }
  }; // 데이터 갱신


  const updateData = async () => {
    dispatch((0,dashboard/* loadingFetchData */.Ok)(true));
    await (0,Handlers/* getRefreshData */.mr)().then(newData => dispatchRefreshData(newData));
    dispatch((0,dashboard/* loadingFetchData */.Ok)(false));
  };

  const {
    loading
  } = dashboardState;
  (0,external_react_.useEffect)(() => {
    const nowTime = external_dayjs_default()().format('YYYY-MM-DD HH시mm분ss초');
    setSearchTime(nowTime);
  }, [loading]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "header-container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
      className: "header-title",
      children: "\uAD6D\uB0B4 COVID19 \uD604\uD669 \uB300\uC2DC\uBCF4\uB4DC"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "lookup-time",
      children: `(${searchTime} 기준 조회)`
    }), /*#__PURE__*/jsx_runtime_.jsx(Modules_Refresh, {
      spin: loading,
      size: '1.2em',
      onClick: () => updateData()
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./components/Footer/index.tsx







const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "footer-container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "block-left",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "footer-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          className: "footer-content-label",
          children: "\uB370\uC774\uD130 \uCD9C\uCC98:"
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "https://www.data.go.kr/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "link-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "resource-link",
              children: "\uACF5\uACF5\uB370\uC774\uD130\uD3EC\uD138"
            }), /*#__PURE__*/jsx_runtime_.jsx(fi_namespaceObject.FiExternalLink, {
              size: '0.9em',
              color: '#d3d7db'
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "footer-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
          className: "footer-content-label",
          children: " \uBA54\uC77C:"
        }), "dlwlsdn201@naver.com"]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "block-right",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer-content icons-wrapper",
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "https://github.com/dlwlsdn201/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "icon",
            children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsGithub, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "https://www.instagram.com/binary_wooo/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "icon",
            children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsInstagram, {})
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: external "antd"
const external_antd_namespaceObject = require("antd");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout.tsx













const Layout = ({
  children
}) => {
  const theme = (0,styles_.useTheme)();
  const matchDownMD = (0,material_.useMediaQuery)(theme.breakpoints.down('lg'));
  const drawerSidebar = (0,external_react_.useMemo)(() => /*#__PURE__*/jsx_runtime_.jsx(Sidebar, {}), []);
  const dashboardState = (0,external_react_redux_.useSelector)(state => state.dashboard, external_react_redux_.shallowEqual);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_namespaceObject.Spin, {
      spinning: dashboardState.loading,
      tip: "Data Loading...",
      size: "large",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "inner-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: children
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_Layout = (Layout);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "root-container",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,122,939,61], () => (__webpack_exec__(2406)));
module.exports = __webpack_exports__;

})();