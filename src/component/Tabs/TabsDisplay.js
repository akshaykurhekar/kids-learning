import React, {useState} from "react";
import Aux from "../../hoc/Auxiliary";

import {Tabs} from "react-bootstrap";

function TabsDisplay(props){

    const [key, setKey] = useState(props.DefaultTab);

    return (
        <Aux>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >        
        {props.children}
       
        </Tabs>
        </Aux>
    );
}

export default TabsDisplay;