
const homepage_index = (req,res)=>{
	const blogArray=[
   {title:'yoshi finds eggs',snippet:'zousifang'},
   {title:'yo1206',snippet:'zousifang2'},
   {title:'yo3',snippet:'zousifang33'},
   ];
   res.render('index',{tonytest:'1234567',blogs:blogArray});	
}

module.exports={
	homepage_index
}