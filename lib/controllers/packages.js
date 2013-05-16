//
// controllers.packages
//

var Model = require('../models/package');

//
// GET /
//
exports.index = function(req, res) {

  'use strict';

  Model.list(function(err, data) {
    if (err) {
      return res.send(err.message, err['status-code']);
    }

    return res.send(data, 200);
  });

};

//
// GET /id
//
exports.show = function(req, res) {

  'use strict';

  if (req && req.params) {

    Model.find(req.params.package, function(err, data) {
      if (err) {
        return res.send(err.message, err['status-code']);
      }

      return res.send(data, 200);
    });

  }

};


//
// POST /
//
exports.create = function(req, res) {

  'use strict';

  var model = Model.factory(req.body);

  model.save(function (err, data) {
    if (err) {
      return res.json(err, 400);
    }

    return res.send(data, 201);
  });

};


//
// PUT /id
//
exports.update = function(req, res) {

  'use strict';

  var model = Model.factory(req.body);

  model.update(req.params.package, function(err, data) {
    if (err) {
      return res.send(err, 400);
    }

    return res.send(data, 204);
  });

};

//
// DELETE /id
//
exports.destroy = function(req, res) {

  'use strict';

  Model.remove(req.params.package, function(err, data) {
    if (err) {
      return res.send(err, 400);
    }

    return res.send(data, 200);
  });

};