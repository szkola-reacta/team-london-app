import FirstLevelMenuItem from './FirstLevelMenuItem';

function CategoryMenuItem({category, categories}) {
    const getCategoryById = (id) => {
        return categories.find((category) => category.id === id);
    }

    const formatSubCategories = (subcategories) => {
        return subcategories && subcategories.map((categoryId) => {
            return {
                id: categoryId,
                url: `/category/${categoryId}`,
                label: getCategoryById(categoryId).name
            }
        });
    }

    if (!category.parent_category) {
        return (
            <FirstLevelMenuItem
                url={`/category/${category.id}`}
                label={category.name}
                submenu={formatSubCategories(category.subcategories)}
            />
        )
    }

    return '';
}

export default CategoryMenuItem;