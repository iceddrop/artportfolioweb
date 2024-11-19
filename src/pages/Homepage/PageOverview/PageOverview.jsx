import Navbarcomp from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import img from "../../../assets/react.svg";

const PageOverview = () => {
  return (
    <>
      <Sidebar />
      <Navbarcomp />
      <main className="lg:pl-64 w-full md:h-screen pt-20 md:pt-0">
        <div className="flex flex-col item items-center justify-center h-full">
          <img className="h-96 w-64 object-cover" src='https://cdn.pixabay.com/photo/2021/05/14/22/11/faces-6254573_1280.jpg' alt="" />
        <div className="flex flex-col items-center pt-4">
           <p> PIXAY BABE | 2024</p>
            <p>Product available: Print</p>
            <p>Theme:Cinnamon</p>
        </div>
        </div>
      </main>
    </>
  );
};

export default PageOverview;
