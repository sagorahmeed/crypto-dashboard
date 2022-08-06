import Footer from "pages/Footer/Index";
import SideNav from "../../components/Dashboard/SideNav";

const DashboardLayout = ({ children }) => (
  <>

    <div className="pl-5 pr-5 flex flex-row 2xl:space-x-7 xl:space-x-7 lg:space-x-7">

      <SideNav />
      <div className="w-full">
        <div className={`min-h-[92vh] pt-4`}>{children}</div>
        <Footer
          className="text-center mt-3 flex justify-center"
          showData
          credit="Revews. All Right Reserved"
        />
      </div>
    </div>

  </>


);

export default DashboardLayout;
