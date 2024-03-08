import {  AuthEvent, gigyaService} from "@gigya";

  

export function setupNavBar(element: HTMLDivElement) {


    const navActions = [{type:"login"}, {type:"logout"},
        {type: "register", screenSet:'Custom-RegistrationLogin', title: "Custom Register"},
        {type: "register", screenSet:'psr-PasswordlessLogin', startScreen:"gigya-passwordless-register-screen" , title: "Passwordless Registration"},
        {type: "register", screenSet:'psr-RegistrationLogin', startScreen:"gigya-register-screen" , title: "Default - Registration Login"},
        {type: "register", screenSet:'psr-RegistrationLogin', startScreen:"gigya-otp-login-screen" , title: "Default - OTP Login"},
    ] as Array<AuthEvent>;
      navActions.forEach((a: AuthEvent & {title?:string}) => {
        const button = document.createElement('button');
        button.id = a.type;
        button.className = "button-clear";
        button.innerHTML = a.title ?? a.type;
        button.addEventListener('click', () => {
            gigyaService.send(a);
        });
        element.appendChild(button);
    });
    //    
    // element.innerHTML = `
    //           ${navActions.map((a: AuthEvent) => ` 
    //                <button  
    //                class="button-clear"
    //                id="${a.type}"
    //                >
    //                 ${a.type}
    //                 </button>`)
    //            .join('')}
    //     `; 
    // for (const button of element.getElementsByTagName('button')) {
    //     {
    //         button.addEventListener('click', () => {
    //             gigyaService.send(button.id as AuthEvent["type"]);
    //         });
    //     }
    // }
}
