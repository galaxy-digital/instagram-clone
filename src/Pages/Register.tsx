import Layout from '../components/Layout';
import logo from '../assets/img/logo.png'
import android from '../assets/img/android_app.png'
import ios from '../assets/img/ios_app.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return <Layout>
        {/* page content */}
        <div className="_9eogI E3X2T">
            <main className="wG4fl UDpcu" role="main" style={{flexGrow:1}}>
                <div className="qF0y9 Igw0E rBNOH YBx95 ybXk5 vwCYk MGky5 i0EQd" style={{minHeight:'100%'}}>
                    <div className="rgFsT">
                        <div className="gr27e">
                            <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm _22l1 UU_bp">
                                <div aria-disabled="false" role="button" tabIndex={0} style={{cursor:'pointer'}}>
                                    <img alt="Instagram" className="s4Iyt" src={logo}/>
                                </div>
                            </div>
                            <div className="P8adC">
                                <form className="XFYOY" method="post">
                                    <h2 className="vvzhL ">Sign up to see photos and videos from your friends.</h2>
                                    <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                                        <button className="sqdOP L3NKy y3zKF" type="button">
                                            <span className="coreSpriteFacebookIconInverted cneKx"></span>Log in with Facebook
                                        </button>
                                    </div>
                                    <div className="K-1uj hKTMS">
                                        <div className="s311c"></div>
                                        <div className="_0tv-g">or</div>
                                        <div className="s311c"></div>
                                    </div>
                                    <div className="WZdjL">
                                        <div className="_9GP1n">
                                            <label className="f0n8F ">
                                                <span className="_9nyy2">Mobile Number or Email</span>
                                                <input aria-label="Mobile Number or Email" aria-required="true" autoCapitalize='off' autoComplete='tel' autoCorrect='off' name="emailOrPhone" type="text" className="_2hvTZ pexuQ zyHYP" value=""/>
                                            </label>
                                            <div className="i24fI"></div>
                                        </div>
                                    </div>
                                    <div className="WZdjL">
                                        <div className="_9GP1n">
                                            <label className="f0n8F">
                                                <span className="_9nyy2">Full Name</span>
                                                <input aria-label="Full Name" aria-required="false" autoCapitalize="sentences" autoCorrect="off" name="fullName" type="text" className="_2hvTZ pexuQ zyHYP" value=""/>
                                            </label>
                                            <div className="i24fI"></div>
                                        </div>
                                    </div>
                                    <div className="WZdjL">
                                        <div className="_9GP1n">
                                            <label className="f0n8F">
                                                <span className="_9nyy2">Username</span>
                                                <input aria-label="Username" aria-required="true" autoCapitalize="off" autoCorrect="off"  max="30" name="username" type="text" className="_2hvTZ pexuQ zyHYP" value=""/>
                                            </label>
                                            <div className="i24fI"></div>
                                        </div>
                                    </div>
                                    <div className="WZdjL">
                                        <div className="_9GP1n">
                                            <label className="f0n8F">
                                                <span className="_9nyy2">Password</span>
                                                <input aria-label="Password" aria-required="true" autoCapitalize="off" autoComplete="new-password" autoCorrect="off" name="password" type="password" className="_2hvTZ pexuQ zyHYP" value=""/>
                                            </label>
                                            <div className="i24fI"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                                            <button className="sqdOP L3NKy y3zKF" disabled type="submit">Sign up</button>
                                        </div>
                                    </div>
                                    <p className="ZGwn1">By signing up, you agree to our
                                        <a href="https://help.instagram.com/581066165581870" tabIndex={0} target="_blank">Terms</a> ,
                                        <a href="https://help.instagram.com/519522125107875" tabIndex={0} target="_blank">Data Policy</a> and
                                        <a href="/legal/cookies/" tabIndex={0} target="_blank">Cookies Policy</a> .
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="gr27e">
                            <p className="izU2O ">Have an account?
                                <Link to='/login'>Log in</Link>
                            </p>
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
export default Register;