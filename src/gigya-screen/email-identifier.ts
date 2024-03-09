export const emailIdentifier_ = ( ) =>`
   <div class="gigya-composite-control gigya-composite-control-textbox">
                                            <input type="text" name="identifier" class="gigya-input-text" data-identifier-type="email" data-gigya-type="text" gigya-expression:data-gigya-placeholder="screenset.translations['TEXTBOX_10343175302148424_PLACEHOLDER']" gigya-expression:aria-label="screenset.translations['TEXTBOX_10343175302148424_PLACEHOLDER']">
                                            <span class="gigya-error-msg" data-bound-to="identifier"></span> 
</div>`;
import './custom-registration-login/identifier';
export const emailIdentifier = ( {name}:{name:string}={name: 'identifier'}) =>`
   <div class="gigya-composite-control gigya-composite-control-textbox"> 
         <identifier-field  >
             <input type="email" show-valid-checkmark="true" class="gigya-input-text" name="${name}" autocomplete="email">
            </identifier-field>
        </div>
`;