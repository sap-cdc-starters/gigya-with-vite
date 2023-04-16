export function setupProperties(element: HTMLDivElement) {
  element.innerHTML = `
  <p>The following info is being requested:</p>
  <table>
    <thead>
      <tr>
        <th>API</th>
        <th>Scope</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-</td>
        <td>.../auth/userinfo.email</td>
        <td>See your primary Google Account email address</td>
      </tr>
      <tr>
        <td>-</td>
        <td>.../auth/userinfo.profile</td>
        <td>See your personal info, including any personal info you've made publicly available</td>
      </tr>
      <tr>
        <td>-</td>
        <td>openid</td>
        <td>Associate you with your personal info on Google</td>
      </tr>
    </tbody>
  </table>`;
}
