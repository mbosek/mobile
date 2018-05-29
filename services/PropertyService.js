class ApiService {

    dataFilter(payload) {
        const API_URL = 'https://staging.propertyfinder.ae/en/api/property';
        return `${API_URL}?${payload}`;
    }
}

export const PropertyApiService = new ApiService();
