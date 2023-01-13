import {Link} from "react-router-dom";

export default function Form(){

    // const thankPage = () => {
    //     alert("clicked");
    // }

    return (
        <div className="part2">
    <div class="subscription">
        <p>
        <b>Try it free 7 days</b> <span>then $20/mo. thereafter</span>
        </p>
    </div>
    <div class="sign-up">
    <form method="post" action="/thankyou">
        <legend>
        SIGN UP
        </legend>
        <fieldset>
        <input type="text" placeholder="First name" required/>
        </fieldset>
        <fieldset>
        <input type="text" placeholder="Last name" required/>
        </fieldset>
        <fieldset>
        <input type="email" placeholder="E-mail" required=""/>
        </fieldset>
        <fieldset>
        <input type="password" placeholder="Password" required=""/>
        </fieldset>
        <fieldset>
        <button type="submit">Claim your free trial</button>
        </fieldset>

    </form>
</div>
</div>
    )
}