
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import DashHeader from "components/DashHeader";
import { uiCardData } from "components/data/UiCardData";
import Header from "components/Header";
import UiCard from "components/UiCard";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = ({customStyle}) => {



  return (
    <>

      <div className="2xl:ml-[16.25rem] xl:ml-[16.25rem] lg:ml-[16.25rem] ml-0">
        <Header title='Dashboard' />
        <div className="mx-4">
          <DashHeader title='Dashboard' btnText='filter periode' />
        </div>
        <div className="mt-8 mx-4">
          <div className="2xl:grid xl:grid xl:gird 2xl:grid-cols-4  xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-6 mt-28">
            {uiCardData.map((item) => (
              <UiCard title={item.title} customStyle={item.customStyle} parcentage={item.parcentage} desc={item.desc} cardImg={item.cardImg} chartUp={item.chartUp} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
