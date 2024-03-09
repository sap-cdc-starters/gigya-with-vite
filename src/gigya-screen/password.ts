export const password = () =>
    `                        <div id="password-row" class="gigya-layout-row with-two-inputs">
                            <div class="gigya-layout-cell">
                                <div class="gigya-composite-control gigya-composite-control-password" style="display: block;">
                                    <input type="password" aria-label="Password"  class="gigya-input-password" show-valid-checkmark="true" tabindex="0" show-password-strength="left" gigya-conditional:show-password-strength="viewport.width < 920?up" data-gigya-placeholder="Password..." aria-label="Password">
                                    <span class="gigya-error-msg" data-bound-to="password"></span>
                                </div>
                            </div>
                            <div class="gigya-layout-cell">
                                <div class="gigya-composite-control gigya-composite-control-password">
                                    <input type="password" aria-label="Retype password" class="gigya-input-password"  tabindex="0" show-valid-checkmark="true"   data-gigya-placeholder="Confirm password" aria-label="Confirm password">
                                    <span class="gigya-error-msg" data-bound-to="passwordRetype"></span>
                                </div>
                            </div>
                            <div class="gigya-clear"></div>
                            <div class="gigya-clear"></div>
                        </div>
`