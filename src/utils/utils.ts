export const getRatingPercentage = (rating: number): string => {
  if (rating < 0) {
    return '0%';
  }

  return rating <= 5 ? `${Math.round(rating) * 20}%` : '100%';
};

export const capitalize = (string: string) => string
  ? string.charAt(0).toUpperCase() + string.slice(1)
  : string;

export const pluralize = (string: string, number: number) => number > 1 ? `${string}s` : string;
