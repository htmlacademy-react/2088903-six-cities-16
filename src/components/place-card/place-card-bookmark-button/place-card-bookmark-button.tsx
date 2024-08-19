import BookmarkButton from '../../common/bookmark-button';


type PlaceCardBookmarkButtonProps = {
  id: string;
  isFavorite: boolean;
};

function PlaceCardBookmarkButton({id, isFavorite}: PlaceCardBookmarkButtonProps) {

  return (
    <BookmarkButton
      id={id}
      isFavorite={isFavorite}
      componentClassName={'place-card__bookmark-button'}
      iconClassName={'place-card__bookmark-icon'}
      width={18}
      height={19}
    />
  );
}

export default PlaceCardBookmarkButton;
