import styles from './../components/styles/Login.module.css'
import HeaderLogin from '../components/HeaderLogin';
import PanelLogin from '../components/PanelLogin';

const Login = () => (
    <div className={styles.login}>
        <HeaderLogin/>
        <PanelLogin isLoginOrLogout={true}/>
    </div>
);

export default Login;
