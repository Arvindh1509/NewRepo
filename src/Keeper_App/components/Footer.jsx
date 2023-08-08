import React from "react";

function Footer()
{

    const Cuuryear=new Date().getFullYear();
    return(<footer>
<p>copyright © {Cuuryear}</p>
    </footer>
        
    );
}

export default Footer;