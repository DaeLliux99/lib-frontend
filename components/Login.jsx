import styles from './Login.module.css'

import HeaderLogin from './HeaderLogin';
import PanelLogin from './PanelLogin';

const bandera = true;

const Login = () => (
  <div className={styles.login}>
      <HeaderLogin/>
      <PanelLogin/>
  </div>
);

export default Login;
