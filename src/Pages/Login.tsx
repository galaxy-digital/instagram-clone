import Layout from '../components/Layout';
import logo from '../assets/img/logo.png'
import android from '../assets/img/android_app.png'
import ios from '../assets/img/ios_app.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return <Layout>
        {/* page content */}
        <div className="_9eogI E3X2T">
            <main className="wG4fl UDpcu" role="main">
                <div className="qF0y9 Igw0E rBNOH YBx95 ybXk5 vwCYk MGky5 i0EQd" style={{minHeight:'100%'}}>
                    <div className="rgFsT">
                        <div className="gr27e">
                            <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm _22l1 UU_bp">
                                <div aria-disabled="false" role="button" tabIndex={0} style={{cursor:"pointer"}}>
                                    <img alt="Instagram" className="s4Iyt" src={logo} />
                                </div>
                            </div>
                            <div className="EPjEi">
                                <form className="HmktE" id="loginForm" method="post">
                                    <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm kEKum">
                                        <div className="-MzZI">
                                            <div className="_9GP1n">
                                                <label className="f0n8F FATdn">
                                                    <span className="_9nyy2">Phone number, username, or email</span>
                                                    <input aria-label="Phone number, username, or email" aria-required="true" autoCapitalize="off" autoCorrect="off" max="75" name="username" type="text" className="_2hvTZ pexuQ zyHYP"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="-MzZI">
                                            <div className="_9GP1n">
                                                <label className="f0n8F FATdn">
                                                    <span className="_9nyy2">Password</span>
                                                    <input aria-label="Password" aria-required="true" autoCapitalize="off" autoCorrect="off" name="password" type="password" className="_2hvTZ pexuQ zyHYP" value=""/>
                                                </label>
                                                <div className="i24fI">
                                                    <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm soMvl">
                                                        <button className="sqdOP yWX7d _8A5w5" type="button">Show</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                                            <button className="sqdOP L3NKy y3zKF" type="submit">
                                                <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm">Log In</div>
                                            </button>
                                        </div>
                                        <div className="K-1uj Z7p_S">
                                            <div className="s311c"></div>
                                            <div className="_0tv-g">or</div>
                                            <div className="s311c"></div>
                                        </div>
                                        <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                                            <button className="sqdOP yWX7d y3zKF" type="button">
                                                <span className=" coreSpriteFacebookIcon AeB99"></span>
                                                <span className="KPnG0">Log in with Facebook</span>
                                            </button>
                                        </div>
                                    </div>
                                    <a className="_2Lks6" href="/accounts/password/reset/" tabIndex={0}>Forgot password?</a>
                                </form>
                            </div>
                        </div>
                        <div className="gr27e">
                            <div className="_7UhW9 xLCgt MMzan _0PwGv uL8Hv">
                                <p className="izU2O ">Don't have an account? 
                                <Link to='/register'><span className="_7UhW9 xLCgt qyrsm gtFbE se6yk">Sign up</span></Link>
                                {/* <a data-testid="sign-up-link" href="/accounts/emailsignup/" tabIndex={0}>
                                    <span className="_7UhW9 xLCgt qyrsm gtFbE se6yk">Sign up</span>
                                </a> */}
                                </p>
                            </div>
                        </div>
                        <div className="APQi1">
                            <p className="b_nGN">Get the app.</p>
                            <div className="iNy2T">
                                <a aria-label="Download on the App Store" className="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabIndex={0}>
                                    <img alt="Download on the App Store" className="Rt8TI " src={ios}/>
                                </a>
                                <a aria-label="Get it on Google Play" className="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6870721A-0B63-4EA0-96C1-1B18CE6D0EF9%26utm_content%3Dlo%26utm_medium%3Dbadge" tabIndex={0}>
                                    <img alt="Get it on Google Play" className="Rt8TI " src={android}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        {/* page content end*/}
    </Layout>
}
export default Login;