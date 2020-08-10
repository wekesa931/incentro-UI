import Potter from "potter-nf";
import AuthRepository from "./AuthRepository";
import AuthDetail from "./AuthDetail";
import AuthState from "./AuthState";

export default class AuthPotter extends Potter<AuthRepository,AuthDetail,AuthState>{}