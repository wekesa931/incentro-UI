import { PotterState } from "potter-nf";
import AuthDetail from "./AuthDetail";
import AuthRepository from "./AuthRepository";

export default class AuthState extends PotterState<AuthRepository,AuthDetail>{
    mounted: boolean = false;
}