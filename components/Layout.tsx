import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Spin } from "antd";
import { useSelector, shallowEqual } from "react-redux";
import Head from "next/head";
import Script from "next/script";
type TProp = {
  children: JSX.Element;
};

const Layout: FC<TProp> = ({ children }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));
  const dashboardState = useSelector(
    (state: any) => state.dashboard,
    shallowEqual
  );
  return (
    <div className='semantic-container'>
      <Header />
      <Spin
        spinning={dashboardState.loading}
        wrapperClassName='spinning-wrapper'
        style={{ height: "100%" }}
        tip='Data Loading...'
        size='large'
      >
        <div className='inner-container'>{children}</div>
      </Spin>
      <Footer />
    </div>
  );
};

export default Layout;
