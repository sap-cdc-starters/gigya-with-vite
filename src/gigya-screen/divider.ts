export const divider =({text, translation }:{text:string, translation?:string})=>
      `<div class="gigya-layout-cell responsive with-divider">
                                                        <div class="separator-wrapper">
                                                            <div class="or-separator">
                                                                <div class="separator-line"></div>
                                                                <label class="gigya-divider-content gigya-label-text gigya-composite-control gigya-composite-control-label" data-translation-key="${translation}">${text}</label>
                                                                <div class="separator-line"></div>
                                                            </div>
                                                        </div>
                                                    </div>`;