import BookmarkButton from '../../common/bookmark-button';


type OfferBookmarkButtonProps = {
  id: string;
  isFavorite: boolean;
}

function OfferBookmarkButton({id, isFavorite}: OfferBookmarkButtonProps) {

  return (
    <BookmarkButton
      id={id}
      isFavorite={isFavorite}
      componentClassName={'offer__bookmark-button'}
      iconClassName={'offer__bookmark-icon'}
      width={31}
      height={33}
    />
  );
}

export default OfferBookmarkButton;
