export const submit = ({ text, translation }: { text?: string, translation?: string }) =>`
 <div class="gigya-composite-control gigya-composite-control-submit">
    <input type="submit" class="gigya-input-submit" tabindex="0" gigya-expression:value="screenset.translations['${translation}']" value="${text || "Submit"}"> 
  </div> `
    