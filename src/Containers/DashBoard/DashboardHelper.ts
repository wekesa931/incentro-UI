import DashBoardPotter from "./Potter/DashBoardPotter";
import { SummaryData } from "../../Utility/AppStrings";

let potter: DashBoardPotter;

const dashboardHelper = (potterProp: DashBoardPotter) => {
    potter = potterProp;
}
export default dashboardHelper;

export const calculateSum = (obj: SummaryData[], field: string) => obj
// @ts-ignore
  .map(items => items[field])
  .reduce((prev, curr) => prev + curr, 0);

export const thousandSeparator = (amount: number) => {
    return amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const thousandDivider = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}