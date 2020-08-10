import React from 'react';
import SideNavigation from './SideNavigation';
import DashBoardPotter, { DashBoardRepository, DashBoardDetail, DashBoardState } from './Potter/DashBoardPotter';
import SummaryOverview from './SummaryOverview';

let potter: DashBoardPotter;

const DashBoard = () => {
    const [potterChangeId, setPotterChangeId] = React.useState(0);
    potter = potter ?? new DashBoardPotter(new DashBoardRepository(), new DashBoardDetail(), new DashBoardState());
    React.useEffect(() => {
        const initializeShuttlerFx = () : () => void => {
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
    return (<>
        <SideNavigation potter={potter} />
        <div className='nav-item'>
            <p>Home</p>
        </div>
        <SummaryOverview potter={potter} />
    </>);
}

export default DashBoard;