export const trending = (req,res)=>res.render("home");

export const see=(req,res)=> res.render("watch");
export const edit=(req,res)=> res.render("edit");

export const search=(req,res)=>res.send("Search");
export const remove=(req,res)=>{
   return res.send("Veideo Remove")
};
export const upload=(req,res)=>res.send("Video Upload")
