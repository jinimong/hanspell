var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spell-Checker' });
});

router.post('/', function(req, res, next) {
  const hanspell = require('hanspell');
  let data = [];
  const check = function(json) { data = data.concat(json); }
  const end = function () { res.json(data); };
  const error = function (err) { console.error("// error: " + err); };

  const sentence = req.body.sentence;
  hanspell.spellCheckByDAUM(sentence, 6000, check, end, error);
});

module.exports = router;
