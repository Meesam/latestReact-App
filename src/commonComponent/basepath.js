export default (route) =>
process.env.NODE_ENV === 'development'? `/${route}` : `/latestReact-App/${route}`;