export const social_login= `                
                <div   class="gigya-layout-cell responsive with-social-login">
                    <div class="gigya-layout-row">
                        <h2 class="gigya-composite-control gigya-composite-control-header" style="display: block;">
                            Quickly register with your social network:
                        </h2>
                        <div class="gigya-composite-control gigya-composite-control-social-login" style="display: block;">
                            <div class="gigya-social-login">
                                <param name="tabIndex" value="0">
                                <param name="version" value="2">
                                <param value="420" name="width" gigya-conditional:value="screenset.width < 430?100%">
                                <param value="100" name="height">
                                <param name="enabledProviders" value="facebook,googleplus,twitter,linkedin,amazon,yahoo">
                                <param name="loginMode" value="standard">
                                <param name="buttonsStyle" value="fullLogoColored">
                                <param name="buttonTheme" value="normal">
                                <param name="pagingButtonStyle" value="newArrows" gigya-conditional:value="screenset.width < 430?auto:">
                                <param name="buttonSize" value="45">
                                <param name="columns" gigya-conditional:value="screenset.width < 430?2:">
                                <param name="showWhatsThis" value="false">
                                <param name="showTermsLink" value="false">
                                <param name="hideGigyaLink" value="true">
                                <param name="_pluginCenterFix" value="true">
                            </div>
                        </div>
                    </div>
                    <div class="gigya-layout-row">
                        <div class="gigya-layout-cell"></div>
                        <div class="gigya-layout-cell"></div>
                        <div class="gigya-clear"></div>
                    </div>
                    <div class="gigya-layout-row"></div>
                </div>
`