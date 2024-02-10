import {GigyaState, gigyaService, AuthContext} from "@gigya";


export function setupProperties(element: HTMLDivElement) {
  let elements =[]  as GigyaState[];
  
  gigyaService.subscribe((state) => {
       elements.push(state);

       element.innerHTML = `
              <p>Event log</p>
              <table>
                <thead>
                  <tr>
                    <th>State</th> 
                    <th>Context</th>
                  </tr>
                </thead>
                <tbody>
                ${elements.map(logState).join('')}
                </tbody>
              </table>`;
  });
  
}
function logState({value, context}:{value: string, context: AuthContext}) {
    return `<tr>
        <td>${value}</td>
          ${drawContext()} 
      </tr>
      `;

    function drawContext(){
        return  Object.keys(context || {}).filter(k=> context[k as keyof AuthContext]).map((key) => {
            return `<tr>
            <td>--</td>
            <td>${key}</td>
            </tr>`
        }).join('');
    }
}
