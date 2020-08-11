import Potter, { PotterState } from "potter-nf";

export default class AuthPotter extends Potter<AuthRepository,AuthDetail,AuthState>{}
export class AuthState extends PotterState<AuthRepository,AuthDetail>{
    mounted: boolean = false;
}
export class AuthDetail {
    username: string = '';
    password: string = '';
    shouldAuthenticate: boolean = false;
}
export class AuthRepository {
    displayLogInLoader: boolean = false;
}