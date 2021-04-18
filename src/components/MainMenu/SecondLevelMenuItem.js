import {Link, MenuItem, MenuList} from "@chakra-ui/react";

function SecondLevelMenuItem({list}) {
    if (Array.isArray(list)) {
        return (
            <MenuList>
                {list.map((element) => (
                    <MenuItem key={element.id}>
                        <Link href={element.url}>
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