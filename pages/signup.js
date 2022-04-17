import styles from '../components/styles/Login.module.css'

import HeaderLogin from '../components/HeaderLogin';
import PanelLogin from '../components/PanelLogin';
import PanelSignUp from '../components/PanelSignup';

const bandera = true;

const Login = () => (
  <div className={styles.login}>
      <HeaderLogin/>
      <PanelSignUp />
  </div>
);

export default Login;
