import React from "react";
import Sidebar from "react-sidebar";
import DashBoardPotter from "./Potter/DashBoardPotter";
import { UnorderedListOutlined } from '@ant-design/icons';
import NavigationComponents from "./UIcomponents/NavigationComponents";

interface IProps {
  potter: DashBoardPotter
}
let potter: DashBoardPotter;

const SideNavigation = (props: IProps) => {
  potter = props.potter;
 
  const onSetSidebarOpen = (open: boolean) => {
    potter.pushToRepository({ showSideNav: open });
  }
 
  return (
    <Sidebar
      sidebar={<NavigationComponents />}
      // @ts-ignore
      open={potter.context.repository.showSideNav}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "#001529", width: "264px" } }}
    >
        <div className='bread-crumb'>
          <span>
            <UnorderedListOutlined onClick={() => potter.pushToRepository({ showSideNav: true })}/>
          </span>
        </div>
      </Sidebar>
  );
}
 
export default SideNavigation;