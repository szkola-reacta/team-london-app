import React, {useEffect, useState} from "react";
import {HStack} from "@chakra-ui/react";

import FirstLevelMenuItem from './FirstLevelMenuItem';
import CategoryMenuItem from "./CategoryMenuItem";
import './menu.scss';

function MainMenu() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/data/categories.json')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => setError(error));
    }, []);

    if (error || !categories.length) {
        return <></>
    }

    return (
        <HStack className="main-menu" justify="center" p="5" my="5" textAlign="center" bg="#f0f0f0">
            <FirstLevelMenuItem
                url="/"
                label="Home"
            />
            {categories.map((category) => (
                <CategoryMenuItem key={category.id} category={category} categories={categories}/>
            ))}
        </HStack>
    )
}

export default MainMenu;