import React from "react";
import Sidebar from "react-sidebar";
import DashBoardPotter from "./Potter/DashBoardPotter";
import { UnorderedListOutlined } from '@ant-design/icons';

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
      sidebar={<b>Sidebar content</b>}
      // @ts-ignore
      open={potter.context.repository.showSideNav}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "black", width: "264px" } }}
    >
      <div className='bread-crumb'>
                <UnorderedListOutlined onClick={() => potter.pushToRepository({ showSideNav: true })}/>
            </div>
      </Sidebar>
  );
}
 
export default SideNavigation;