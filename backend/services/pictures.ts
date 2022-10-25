import fetch from "node-fetch";
import { getFlickrImageURL } from "../utils/string";

const getPictures = async function (tag?: string) {
    const yourApiKey = 'd467d470521c058fa4f9d1d3efc3b525'; // Better to use environment variables

    const data = {
        method: 'flickr.photos.search',
        api_key: yourApiKey,
        text: tag || "", 
        sort: 'interestingness-desc',
        per_page: '12',
        license: '4',
        extras: 'owner_name,license',
        format: 'json',
        nojsoncallback: '1',
    };

    const parameters = new URLSearchParams(data);

    const url = `https://api.flickr.com/services/rest/?${parameters}`;

    const picData = await fetch(
        url,
        {
            method: "GET",
        }
    ).then(res => res.json()).then(data => (
        data.photos.photo.map((photo) => {
            return getFlickrImageURL(photo);
        })
    ))

    return picData
}


export { getPictures };
