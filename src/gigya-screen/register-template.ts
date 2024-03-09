const template= `<template id="register-layout" > 
        <div class="gigya-layout-row"></div>
        <div class="gigya-layout-row with-divider">
            <div  class="gigya-layout-cell responsive with-social-login">
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
            <div class="gigya-layout-cell responsive with-divider">
                <div class="separator-wrapper">
                    <div class="or-separator">
                        <div class="separator-line"></div>
                        <label class="gigya-divider-content gigya-label-text gigya-composite-control gigya-composite-control-label" data-translation-key="LABEL_139978773486588850_LABEL">Or</label>
                        <div class="separator-line"></div>
                    </div>
                </div>
            </div>
            <div   class="gigya-layout-cell responsive with-site-login">
                <div class="gigya-layout-row">
                    <h2 class="gigya-composite-control gigya-composite-control-header" data-translation-key="HEADER_63695688742051540_LABEL"></h2>
                    <div class="gigya-layout-row">
                        <div class="gigya-composite-control gigya-composite-control-textbox">
                            <input type="text" class="gigya-input-text" name="email" show-valid-checkmark="true" data-display-name="" aria-label="Email" formnovalidate="formnovalidate" tabindex="0" data-gigya-placeholder="Email..." aria-label="Email" required>
                        </div>
                    </div>
                </div>
                <div class="box" data-width="100%" data-hight="100%"  >
                    <div class="gigya-layout-row with-two-inputs data">

                        <div class="gigya-layout-cell">
                            <div class="gigya-composite-control gigya-composite-control-textbox" style="display: block;">
                                <input type="text" aria-label="First name" class="gigya-input-text" name="profile.firstName" show-valid-checkmark="true" formnovalidate="formnovalidate" tabindex="0" data-gigya-placeholder="First Name..." aria-label="First Name">
                                <span class="gigya-error-msg" data-bound-to="profile.firstName"></span>
                            </div>
                        </div>
                        <div class="gigya-layout-cell">
                            <div class="gigya-composite-control gigya-composite-control-textbox" style="display: block;">
                                <input type="text" aria-label="Last name" class="gigya-input-text" name="profile.lastName" show-valid-checkmark="true" tabindex="0" data-gigya-placeholder="Last Name..." aria-label="Last Name">
                                <span class="gigya-error-msg" data-bound-to="profile.lastName"></span>
                            </div>
                        </div>
                    </div>
                    <slot name="auth">
                        <div  class="gigya-layout-row with-two-inputs">
                            <div class="gigya-layout-cell">
                                <div class="gigya-composite-control gigya-composite-control-password" style="display: block;">
                                    <input type="password" aria-label="Password" name="password" class="gigya-input-password" show-valid-checkmark="true" tabindex="0" show-password-strength="left" gigya-conditional:show-password-strength="viewport.width < 920?up" data-gigya-placeholder="Password..." aria-label="Password">
                                    <span class="gigya-error-msg" data-bound-to="password"></span>
                                </div>
                            </div>
                            <div class="gigya-layout-cell">
                                <div class="gigya-composite-control gigya-composite-control-password">
                                    <input type="password" aria-label="Retype password" class="gigya-input-password" name="passwordRetype" tabindex="0" show-valid-checkmark="true" data-required="true" data-gigya-placeholder="Confirm password" aria-label="Confirm password">
                                    <span class="gigya-error-msg" data-bound-to="passwordRetype"></span>
                                </div>
                            </div>
                            <div class="gigya-clear"></div>
                            <div class="gigya-clear"></div>
                        </div>
                    </slot>
                   
                    <div class="gigya-composite-control gigya-composite-control-checkbox">
                        <input type="checkbox" id="gigya-checkbox-subscribe" name="data.subscribe" class="gigya-input-checkbox fd-checkbox" data-display-name="" tabindex="0">
                        <label class="gigya-label" for="gigya-checkbox-subscribe">
                            <span class="gigya-label-text gigya-checkbox-text" >Subscribe to our newsletter</span>
                            <label class="gigya-required-display" data-bound-to="data.subscribe" style="display: none;">*</label>
                        </label>
                    </div>
                    <div class="gigya-composite-control gigya-composite-control-checkbox">
                        <input type="checkbox" id="gigya-checkbox-terms" name="data.terms" class="gigya-input-checkbox" data-display-name="" tabindex="0">
                        <label class="gigya-label" for="gigya-checkbox-terms">
                            <span class="gigya-label-text gigya-checkbox-text" >I have read and understood the<a class="gigya-terms-of-use" href="#">Terms of Use</a></span>
                            <label class="gigya-required-display" data-bound-to="data.terms" style="display: none;">*</label>
                        </label>
                    </div>
                </div>
                <div class="gigya-composite-control gigya-composite-control-submit ">
                    <input type="submit" class="gigya-input-submit" tabindex="0"  value="Submit">
                </div>
                <div class="gigya-error-display gigya-composite-control gigya-composite-control-form-error" data-bound-to="gigya-register-form">
                    <div class="gigya-error-msg gigya-form-error-msg" data-bound-to="gigya-register-form"></div>
                </div>
            </div>
        </div>

    </template>
`

function createTemplate(template: string) {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = template;
    return templateElement;
}

export const registerTemplate = createTemplate(template);

document.body.appendChild(registerTemplate);