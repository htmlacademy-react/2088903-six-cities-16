import PreviewImage from '../offer-preview-image/preview-image.tsx';

type OfferImageNewProps = {
  id: string;
  previewImage: string;
}

function OfferImageNew(props: OfferImageNewProps) {
  const {...restProps} = props;
  return (
    <PreviewImage
      className={'cities'}
      width={260}
      height={200}
      {...restProps}
    />
  );
}

export default OfferImageNew;

//
// const Cities: Style = {
//   width: 260,
//   height: 200,
//   wrapperClass: 'cities__image-wrapper'
// };
//
// const Favorite: Style = {
//   width: 150,
//   height: 110,
//   wrapperClass: 'favorites__image-wrapper'
// };
