
export const trending = (req,res)=>{
   const videos =[
      {
         title:"First Video",
         reating:5,
         comments:2,
         createdAt:"2 minutes ago",
         view:59,
         id:1
      },
      {
         title:"Second Video",
         reating:5,
         comments:2,
         createdAt:"2 minutes ago",
         view:65,
         id:2
      },
      {
         title:"Third Video",
         reating:5,
         comments:2,
         createdAt:"2 minutes ago",
         view:80,
         id:3
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
