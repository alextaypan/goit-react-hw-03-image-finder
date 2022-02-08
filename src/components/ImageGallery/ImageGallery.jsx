import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { SRLWrapper } from "simple-react-lightbox";

export const ImageGallery = ({ images, onClick, tags }) => {
  return (
    <SRLWrapper>
      <ul className={s.imageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            tag={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
          />
        ))}
      </ul>
    </SRLWrapper>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
