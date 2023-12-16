export const TOKEN_NAMESPACE = 'ESR-authenticationToken';
export const REFRESH_TOKEN_NAMESPACE = 'ESR-refreshToken';

export const specifiedHeaders = () => {
  const token = localStorage.getItem(TOKEN_NAMESPACE);
  if (token) {
    return {
      Authorization: `Bearer ${localStorage.getItem(TOKEN_NAMESPACE)}`,
    };
  }
  return {};
};
