import {Link} from 'react-router-dom';
import {Menu, MenuButton} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

import SecondLevelMenuItem from "./SecondLevelMenuItem";

function FirstLevelMenuItem({url, label, submenu}) {
    if (submenu) {
        return (
            <Menu>
                <MenuButton href={url}>
                    {label}
                    <ChevronDownIcon/>
                </MenuButton>
                <SecondLevelMenuItem list={submenu}/>
            </Menu>
        )
    }

    return (
        <Link to={{pathname: url}}>
            {label}
        </Link>
    )
}

FirstLevelMenuItem.defaultProps = {
    submenu: false
}

export default FirstLevelMenuItem;