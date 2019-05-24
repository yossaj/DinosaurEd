const RequestHelper = function(url) {
  this.url = url;
};

RequestHelper.prototype.get = function(urlParam) {
  const url = urlParam ? `${this.url}/${urlParam}` : this.url;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};



module.exports = RequestHelper;
