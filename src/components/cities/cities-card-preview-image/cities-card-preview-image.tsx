import PlaceCardPreviewImage from '../../place-card/place-card-preview-image/place-card-preview-image.tsx';


type CitiesCardPreviewImageProps = {
  id: string;
  previewImage: string;
}

function CitiesCardPreviewImage({
  id,
  previewImage,
}: CitiesCardPreviewImageProps) {

  return (
    <PlaceCardPreviewImage
      id={id}
      className={'cities__image-wrapper'}
      src={previewImage}
      width={260}
      height={200}
    />
  );
}

export default CitiesCardPreviewImage;
