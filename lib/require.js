;(function(){
  <%= data.require %>
  <%= data.js %>
  if ("undefined" == typeof module) {
    window.<%= name &> = require("<%= name %>");
  } else {
    module.exports = require("<%= name %>");
  }
})();