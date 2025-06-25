const config = {
  apiBaseUrl: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : 'https://victoria-chess-coaching-app.onrender.com'
};

export default config; 