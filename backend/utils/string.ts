const getFlickrImageURL = (photo, size?) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;

    if (size) {
        url += `_${size}`;
    }

    url += '.jpg';
    return url;
};

const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

export { getFlickrImageURL, validEmail };