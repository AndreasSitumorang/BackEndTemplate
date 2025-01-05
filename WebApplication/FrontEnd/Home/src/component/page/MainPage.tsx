import React from "react";
import Styles from "../ui/styles/MainPage.module.css";

const MainPage = () => {
return (
<div className={Styles.container}>
    {/* Side Menu  */}
<aside>
    <ul>
        <li>
            Homie
        </li>
        <li>
            About
        </li>
        <li>
            Contact
        </li>
    </ul>
</aside>
    {/* Main Content */}
<main>
    <div>

    </div>
</main>

</div>
    );
};

export default MainPage;