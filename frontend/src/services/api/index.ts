const API = {
    getPictures: (tag?: string) => {
        return fetch(
            "http://localhost:5001/pictures/getPictures",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tag }),
            }
        ).then((response) => {
            return response.json();
        });
    }
};

export default API;