const API = {
    getPictures: (tags?: string, page?: number) => {
        return fetch(
            "http://localhost:5001/pictures/getPictures",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tags, page }),
            }
        ).then((response) => {
            return response.json();
        });
    }
};

export default API;