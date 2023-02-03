const user=require('../models/User')

exports.addUser =async(req, res, next) => {
//     const {
//         name,email,mobile
//     }=
// req.body
// console.log(req.body)
// res.json(req.body)
        try {
            if(!req.body.mobile){
                throw new Error('mobile is mandatory')
            }
        const username = req.body.username;  
        const email = req.body.email;
        const mobile = req.body.mobile;
console.log(req.body)
        const data =  await user.create( { username: username, email: email, mobile: mobile, } );
        res.status(201).json({ newUserDetail: data })
        } 
        catch(err){
            console.log(err)
            res.status(500).json("err")
        }
    }


exports.getUser = (async (req, res, next) => {
    try {
    const users = await user.findAll(); 
        res.status(200).json({ allUsers: users }) 
    }
    catch(err){
        console.log('get user is failing', JSON.stringify(err));
        res.status(500).json({error: err})
    }
    })



exports.deleteUser=(async(req,res,next) =>{
    try{
        if(req.params.id=='undefined'){
            console.log('ID is missing')
         return res.status(400).json({err:'ID is missing'})

        }
        const uId=req.params.id;
        await user.destroy({where:{id:uId}});
        res.status(200);

    } catch(err){
        console.log(err);
        res.status(500).json(err) 
    }
})