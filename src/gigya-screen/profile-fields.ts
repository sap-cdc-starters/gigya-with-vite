export const profileFields = ( ) => 
     ` <div  > 
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
                        <div class="gigya-composite-control gigya-composite-control-checkbox">
                            <input type="checkbox"   name="subscriptions.news.email.isSubscribed" class="gigya-input-checkbox fd-checkbox" data-display-name="" tabindex="0">
                            <label class="gigya-label" for="gigya-checkbox-subscribe">
                                <span class="gigya-label-text gigya-checkbox-text" >Subscribe to our newsletter</span>
                                <label class="gigya-required-display" data-bound-to="subscriptions.news.email.isSubscribed" style="display: none;">*</label>
                            </label>
                        </div>
                        <div class="gigya-composite-control gigya-composite-control-checkbox">
                            <input type="checkbox"   name="preferences.other.isConsentGranted" class="gigya-input-checkbox" data-display-name="" tabindex="0">
                            <label class="gigya-label" for="gigya-checkbox-terms">
                                <span class="gigya-label-text gigya-checkbox-text" >I have read and understood the<a class="gigya-terms-of-use" href="#">Terms of Use</a></span>
                                <label class="gigya-required-display" data-bound-to="preferences.other.isConsentGranted" style="display: none;">*</label>
                            </label>
                        </div>
             </div>`;