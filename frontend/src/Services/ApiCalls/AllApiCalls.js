const backendUrl = process.env.REACT_APP_API_URL;

export const allLinks = `${backendUrl}/api/links?`;

export const allUsersCall = `${backendUrl}/api/users?`;

export const populateAll = `&populate=*`;
