const cl=console.log;

const hrCall =(skill)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(skill.toLowerCase().includes("mean")){
                resolve(`The candidate is fit for 1st interview`)
            }
            else{
                reject(`The candidate is not fit for interview`)
            }
            
        }, 1440);
    })
}

const firstTech = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let err=Math.random()>.5 ?false:true;
            if(!err){
                resolve(`Candidate is selected for 2nd round`);
            }
            else{
                reject(`Candidate is struggling to write basic code`)
            }
            
        }, 1590);
    })
}

const secondTech = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let err=Math.random()>.5 ? false:true;
            if(!err){
                resolve(`Candidate is selected for selected for Mgr round`);
            }else{
                reject(`The candidate is not able to solve the DSA`);
            }           
        }, 1500);
    })
}

const mgrRound =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let err=Math.random()>.5 ?false:true;
            if(!err){
                resolve(`Candidate is selected Finally!!!`);
            }else{
                reject(`Not Selected**`)
            }
            
        }, 1500);
    })
}

hrCall("mean")
    .then((res)=>{
        cl(res)
        return firstTech()
    })
    .then((res)=>{
        cl(res);
        return secondTech()
    })
    .then((res)=>{
        cl(res)
        return mgrRound();
    })
    .then((res)=>{
        Swal.fire({
            title:res,
            icon:`success`,
            timer:3500
        })
    })
    .catch((err)=>{
        Swal.fire({
            title:err,
            icon:`error`,
            timer:3500
        })
    })