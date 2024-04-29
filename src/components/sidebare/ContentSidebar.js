import './App.css'
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

// import { useState } from 'react'
// 
// import ContentHeader from './ContentHeader'
// import Sidebar from './Sidebare'
// import TeachersList from './TecherList'

// function ContentSidebar() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <ContentHeader OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <TeachersList/>
//     </div>
//   )
// }

// export default ContentSidebar;
