export const trending = (req,res)=>res.send("<h1>Home Page Videos</h1>")
export const see=(req,res)=>{
    console.log(req.params);
    return res.send(`Watch Video #${req.params.id}`);
};
export const edit=(req,res)=>{
return res.send("edit")
};
export const search=(req,res)=>res.send("Search");
export const remove=(req,res)=>{
   return res.send("Veideo Remove")
};
export const upload=(req,res)=>res.send("Video Upload")
