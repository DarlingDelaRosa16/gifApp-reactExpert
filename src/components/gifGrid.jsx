import { UseFetchGifs } from "../hooks/useFetchGifs";
import {GifItems} from "./gifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map(images => (
                    <GifItems
                        key={images.id}
                        {...images}
                    />
                ))}
            </div>

        </>
    );
}
