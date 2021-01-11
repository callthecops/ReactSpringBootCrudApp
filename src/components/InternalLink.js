import React from "react";
import { useHistory } from "react-router-dom";

function InternalLink(props) {
    const { href, children } = props;

    const history = useHistory();

    const onClick = () => {
        history.push(href);
        console.log(props.children.carId);
    };

    return <span onClick={onClick}>{children}</span>;
}

export default InternalLink;