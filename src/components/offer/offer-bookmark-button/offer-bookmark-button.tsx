import BookmarkButton from '../../common/bookmark-button';


type OfferBookmarkButtonProps = {
  isFavorite: boolean;
}

function OfferBookmarkButton({isFavorite}: OfferBookmarkButtonProps) {

  return (
    <BookmarkButton
      isFavorite={isFavorite}
      componentClassName={'offer__bookmark-button'}
      childrenClassName={'offer__bookmark-icon'}
      width={31}
      height={33}
    />
  );
}

export default OfferBookmarkButton;
