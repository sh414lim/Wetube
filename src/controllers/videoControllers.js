
export const trending = (req,res)=>{
   const videos =[
      {
         title:"HELLO"
      },
      {
         title:"BYE"
      },
      {
         title:"WHO ARE YOU"
      }
   ];
  return res.render("home",{pageTitle:"Home",videos})
};
export const see=(req,res)=> res.render("watch");
export const edit=(req,res)=> res.render("edit");
export const search=(req,res)=>res.send("Search");
export const remove=(req,res)=>{
   return res.send("Veideo Remove")
};
export const upload=(req,res)=>res.send("Video Upload")
