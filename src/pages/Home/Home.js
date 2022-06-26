import React from "react";
import Header from "../../components/Header/Header";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";

const Home = () => {
  return (
    <>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default Home;

// <>
//       <Routes>
//         <Route path="/*" element={<Layout />} />

//         {!user ? (

//           <Route path="/login" element={<Login />} />
//         ) : (
//           <>
//             <Route path="/home" element={<Home />} />
//             {/* <Route path="/home" element={<Header />} />
//             <Route path="/home" element={<Sidebar />} />
//             <Route path="/home" element={<Feed />} />
//             <Route path="/home" element={<Widgets />} /> */}
//           </>
//         )}
//       </Routes>
//     </>
