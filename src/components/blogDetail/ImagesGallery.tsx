import React from 'react';
import Masonry from 'react-masonry-css';
import '../../style/components/ImageGallery.css';

interface ImagesGalleryProps {
    images: string[];
}

const ImagesGallery: React.FC<ImagesGalleryProps> = ({ images }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div>
            <div className="title-line">
                <div className="line"></div>
                <p className="txt-title">Plus d'images</p>
                <div className="line"></div>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {images.map((image, index) => (
                    <div key={index} className="masonry-item">
                        <img src={image} alt={`Gallery item ${index + 1}`} />
                    </div>
                ))}
            </Masonry>
        </div>

    );
};

export default ImagesGallery;
