import * as React from 'react';
import AuthPotter from './Potter/AuthPotter';
import AuthRepository from './Potter/AuthRepository';
import AuthDetail from './Potter/AuthDetail';
import AuthState from './Potter/AuthState';
import SignInHelpers from './Helpers/SignInHelpers';
import CompanyDetail from './CompanyDetail';
import SignInForm from './SignInForm';
import logo from '../../assets/tech.jpg'
import Loader from '../../Utility/Loader';

let potter: AuthPotter;

const SignIn = () => {
    const [potterChangeId, setPotterChangeId] = React.useState(0);
    potter = potter ?? new AuthPotter(new AuthRepository(), new AuthDetail(), new AuthState());
    React.useEffect(() => {
        const initializeShuttlerFx = () : () => void => {
            SignInHelpers(potter)
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
    return <>
        <div className='sign-in-overview' style={{ backgroundImage: `url(${logo})`}}>
            <div className='sign-in-form-holder'>
                <div className='sign-in-form-detail'>
                    <CompanyDetail />
                    <SignInForm potter={potter} />
                    <div className='forgot-pass'>
                        <p>Forgot Password</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}
 
export default SignIn;