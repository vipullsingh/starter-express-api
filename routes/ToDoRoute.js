const {Router} = require("express")

const router = Router()

router.get('/',(req,res)=>{
    res.json({message : "Hi There..."})
})

module.export = router;