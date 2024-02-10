import {gigyaService} from "@gigya";

export function setupProperties(element: HTMLDivElement) {
  let elements =[] as string[];
  
  gigyaService.subscribe((state) => {
    console.log(state);
    
    elements.push(` <tr>
        <td>-</td>
        <td>${state.value}</td>
        <td>..</td>
        ${Object.keys(state.context).map((key) => {
            return `<tr>
            <td>--</td>
            <td>${key}</td>
            <td>${state?.context?[key] : "" }</td>
            </tr>`;
        }
        )}
      </tr>
      `);

      element.innerHTML = `
  <p>Event log</p>
  <table>
    <thead>
      <tr>
        <th>State</th>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    ${ elements.join('')}
    </tbody>
  </table>`;
  });
  element.innerHTML = `
  <p>Event log</p>
  <table>
    <thead>
      <tr>
        <th>State</th>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    ${ elements.join('')}
    </tbody>
  </table>`;
}
