import React from "react";
import HomeBody from "../../components/dashboard/homeBody";
import SideBar from "../../components/dashboard/sidebar";

export default function home() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="flex flex-row">
        <SideBar />
        <HomeBody />
      </div>
    </div>
  );
}
