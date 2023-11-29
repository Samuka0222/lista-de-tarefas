import { Carousel } from "@material-tailwind/react";

const ThemeCarousel = () => {
    return (
        <Carousel className="w-full h-60">
            <div className="relative h-full w-full">
                <div className="w-12 h-12 bg-neon-primaria rounded-full"></div>
                <h4>Neon</h4>
            </div>
        </Carousel>
    )
}

export default ThemeCarousel;