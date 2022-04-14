import styles from './../components/Login.module.css'

import HeaderLogin from '../components/HeaderLogin';
import PanelLogin from '../components/PanelLogin';

const bandera = true;

const Login = () => (
  <div className={styles.login}>
      <HeaderLogin/>
      <PanelLogin/>
  </div>
);

export default Login;
