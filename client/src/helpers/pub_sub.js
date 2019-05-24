const PubSub = {
  publish: function(channel, payload) {
    console.log(`Publishing on ${channel}`, payload)
    const event = new CustomEvent(channel, { detail: payload });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback) {
    console.log(`Subscribing on ${channel}`);
    
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
