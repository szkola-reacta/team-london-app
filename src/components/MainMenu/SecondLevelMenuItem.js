import {Link} from 'react-router-dom';
import {MenuItem, MenuList} from "@chakra-ui/react";

function SecondLevelMenuItem({list}) {
    if (Array.isArray(list)) {
        return (
            <MenuList>
                {list.map((element) => (
                    <MenuItem key={element.id}>
                        <Link to={{pathname: element.url}}>
                            {element.label}
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        )
    }

    return '';
}

export default SecondLevelMenuItem;