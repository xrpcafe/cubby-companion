const countArrayItems = (json: string) => {
    try {
        return JSON.parse(json).length;
    } catch (error) {
      console.log(error)
    }
  }

  const getTotalXRPAmount = (json: string) => {
    try {
        let obj = JSON.parse(json);
        let total = 0;
        for(let i = 0; i < obj.length; i++)
        {
            total = total + Number(obj[i].Amount);
        }
        return (total / 1000000).toFixed(2)
    } catch (error) {
      console.log(error)
    }
  }

  function SplitTime(dt:string){
    try{ 
        let numberOfMins = new Date(dt).getMinutes();
        let delta = new Date().getMinutes() - numberOfMins;
  
    return({"Minutes":delta})
} catch(ex)
{
}
}


  export const common = {
    countArrayItems,
    getTotalXRPAmount,
    SplitTime
  };