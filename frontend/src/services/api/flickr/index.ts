export default {
    getPictures: (tags?: string, page?: number) => {
        return fetch(
            "http://localhost:4000/pictures/getPictures",
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
