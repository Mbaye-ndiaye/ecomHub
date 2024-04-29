// import Table from "../table/Table";
import CardsSidebar from "./CardsSidebar";
import ContentHeader from "./ContentHeader";
import TeachersList from "./TecherList";


const ContentSidebar = () => {
  return (

    <>
      <div className="w-[75%] ">
        <ContentHeader />
        <CardsSidebar />
        <TeachersList />
      </div>

      
    </>
  );
};




export default ContentSidebar;
