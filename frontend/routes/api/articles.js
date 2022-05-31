const express = require("express");
const router = express.Router();
const Article = require("../../models/Article");

router.get("/", async (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(404).json({ noArtFound: "No articles found" }));
  
});
router.put("/moderated/:id", async (req, res, next) =>
{
  console.log("updating moderator");
  console.log(req.body.id);
  console.log(req.params.id);
  console.log("thisis evidence" + req.body["evidence"]);
  console.log("thisis evidence" + req.body.evidence);
  
  var analysedQuery = {_id : req.params.id};

  var newValue = { $set: { moderated: true, claim: req.body["claim"], evidence:req.body["evidence"] } };
  Article.updateOne(analysedQuery, newValue, (err, res) =>{
    if(err)
      console.log("something bad happed : failed to set to analysed");
    else
      console.log("success");
  });
}
);