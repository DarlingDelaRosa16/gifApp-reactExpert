import { useState } from "react";
import {AddCategory, GifGrid} from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const findCategory = (newCategory) => {
        const data = newCategory.toLowerCase();
        if (categories.includes(data)) return;
        setCategories([data, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App </h1>
            <AddCategory OnAddCategories={findCategory} />

            {
                categories.map(item => {
                    return (
                        <GifGrid category={item} key={item} />
                    )
                })
            }


        </>
    );
}

export default GifExpertApp;