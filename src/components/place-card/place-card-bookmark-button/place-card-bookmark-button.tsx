import BookmarkButton from '../../common/bookmark-button';


type PlaceCardBookmarkButtonProps = {
  isFavorite: boolean;
};

function PlaceCardBookmarkButton({isFavorite}: PlaceCardBookmarkButtonProps) {

  return (
    <BookmarkButton
      isFavorite={isFavorite}
      componentClassName={'place-card__bookmark-button'}
      iconClassName={'place-card__bookmark-icon'}
      width={18}
      height={19}
    />
  );
}

export default PlaceCardBookmarkButton;
