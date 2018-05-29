function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default function request(url) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            'Authorization': 'Basic cGZ1c2VyOmlzaG9vZ2VIaWV2OEFsYWw=',
        }
    }
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);
}
