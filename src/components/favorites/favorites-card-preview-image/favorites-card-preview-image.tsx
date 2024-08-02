import PlaceCardPreviewImage from '../../place-card/place-card-preview-image/place-card-preview-image.tsx';


type FavoritesCardPreviewImageProps = {
  id: string;
  previewImage: string;
}

function FavoritesCardPreviewImage({
  id,
  previewImage,
}: FavoritesCardPreviewImageProps) {

  return (
    <PlaceCardPreviewImage
      id={id}
      className={'favorites__image-wrapper'}
      src={previewImage}
      width={150}
      height={100}
    />
  );
}

export default FavoritesCardPreviewImage;
