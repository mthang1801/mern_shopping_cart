import express from "express";
import Item from "../../models/item";
const  router = express.Router();

//@route GET api/items
//@desc Get all items
//@access Public

router.get("/", (req, res) => {
  Item.find()
        .sort({"date" : -1})
        .then(items => res.json(items))
        .catch(err => res.send(err));
})

//@route POST api/items
//@desc POST all items
//@access Public

router.post("/", (req, res) => {
  console.log(req.body.name);
  let newItem = new Item({
    name : req.body.name 
  })
  newItem.save().then( item => res.json(item))
                .catch( err => res.json({success: false}))
})


//@route DELETE api/items
//@desc DELETE an item,
//@access Public
router.delete("/:id", (req, res) => {  
  Item.findById(req.params.id)
        .then( item => item.remove().then(() => res.send("Remove successfully")))
        .catch(err => res.status(404).send(err));
 
})

export default router;
