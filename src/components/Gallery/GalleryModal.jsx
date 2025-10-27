export default function GalleryModal({images, index, onClose, onPrev, onNext}) {
    if (index === null) return null;

    return (
        <div className="gallery-modal" onClick={onClose}>
            <span className="gallery-modal-close " onClick={onClose}>&times;</span>

            <div className="gallery-modal-nav prev" onClick={(e) => {
                e.stopPropagation();
                onPrev();
            }}>
                &#10094;
            </div>

            <img
                className="gallery-modal-content"
                src={images[index]}
                alt="Gallery"
                onClick={(e) => e.stopPropagation()}
            />

            <div className="gallery-modal-nav next" onClick={(e) => {
                e.stopPropagation();
                onNext();
            }}>
                &#10095;
            </div>
        </div>
    );
}
