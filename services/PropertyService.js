class ApiService {
    dataFilter(payload) {
        const API_URL = 'https://www.propertyfinder.ae/en/api/property';
        return `${API_URL}?${payload}`;
    }
}

export const PropertyApiService = new ApiService();
