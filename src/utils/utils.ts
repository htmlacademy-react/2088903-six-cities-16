export const getRatingPercentage = (rating: number): string => {
  if (rating < 0) {
    return '0%';
  }

  return rating <= 5 ? `${Math.round(rating) * 20}%` : '100%';
};
