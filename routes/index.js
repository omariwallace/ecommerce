
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.purchase = function(req, res){
  res.render('purchase')
}

exports.order = function(req, res){
  var form_data = req.body

  console.log(form_data)
}