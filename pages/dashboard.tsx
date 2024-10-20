// import type { NextPage } from 'next';
import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import Seo from "../components/Seo";
import {
  loadingFetchData,
  updateConfirmations,
  updateDeaths,
  updateHospitalizations,
  updateSearchDate,
  updateSevereSymptoms,
  updateWeeklyData,
  updateYesterdayData,
} from "../store/reducers/dashboard";
import CustomNotification from "../components/Modules/Notification";
import {
  READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY,
  READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY,
  READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY,
  READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY,
} from "./api";
import { DomesticCoronaStatusWidget } from "@widgets/DomesticCoronaStatusWidget";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const dashboardState = useSelector(
    (state: any) => state.dashboard,
    shallowEqual
  );

  return (
    <>
      <Seo title='국내 Covid-19 통계 현황 대시보드' />
      <DomesticCoronaStatusWidget />
    </>
  );
};

export default Home;
