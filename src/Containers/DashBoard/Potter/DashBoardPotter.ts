import Potter, { PotterState } from "potter-nf";
import { SummaryData } from "../../../Utility/AppStrings";

export default class DashBoardPotter extends Potter<DashBoardRepository,DashBoardDetail,DashBoardState>{}

export class DashBoardState extends PotterState<DashBoardRepository,DashBoardDetail>{
    mounted: boolean = false;
}
export class DashBoardDetail {}
export class DashBoardRepository {
    showSideNav: boolean = false;
    loadingSummaryDetails: boolean = false;
    summaryData: SummaryData[] = []
}