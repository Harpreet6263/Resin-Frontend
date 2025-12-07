import Cookies from 'js-cookie';
import { logoutSuccess } from './slice/auth';

const sessionExpired = (data, dispatch) => {
  console.log(data);
  
  // if (data?.error === 'TOKEN_EXPIRED') {
    dispatch(logoutSuccess('Logout successful'));
    Cookies.remove("loggedIn");
    window.location.href = `/`;
  // }
};

export default sessionExpired;
