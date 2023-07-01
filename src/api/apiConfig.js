const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'bc9372558e3b656346a5413d2dad293e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;