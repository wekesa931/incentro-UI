import React from 'react';
import SideNavigation from './SideNavigation';
import { BellOutlined } from '@ant-design/icons';
import DashBoardPotter, { DashBoardRepository, DashBoardDetail, DashBoardState } from './Potter/DashBoardPotter';
import SummaryOverview from './SummaryOverview';
import dashboardHelper from './DashboardHelper';
import NavigationComponents from './UIcomponents/NavigationComponents';

let potter: DashBoardPotter;

const DashBoard = () => {
    const [potterChangeId, setPotterChangeId] = React.useState(0);
    potter = potter ?? new DashBoardPotter(new DashBoardRepository(), new DashBoardDetail(), new DashBoardState());
    React.useEffect(() => {
        const initializeShuttlerFx = () : () => void => {
            dashboardHelper(potter)
            const potterCleanup = potter.subscribe(() => setPotterChangeId(potter.context.changeId));
            if(!potter.state.mounted){
                potter.pushToState({mounted: true});
            }
            return function cleanup() {
                potterCleanup();
            }
        }
        return initializeShuttlerFx();
    },[potterChangeId])
    return (<div className='overview-cont'>
        <div className='mini-sidenav'>
            <NavigationComponents />
        </div>
        <div className='overview-cont-summary'>
            <SideNavigation potter={potter} />
            <div className='nav-item'>
                <div className="nav-icon">
                    <BellOutlined />
                </div>
                <p>Notifications</p>
            </div>
            <SummaryOverview potter={potter} />
        </div>
    </div>);
}

export default DashBoard;