import logo from './logo.svg';
import './App.css';

function App() {
  let moviesNames =["Baahubali","Arjun Reddy","Ala Vaikunthapurramuloo","Pushpa","RRR","Mahanati","Geetha Govindam","Arjun Reddy","Sarileru Neekevvaru","Eega "];
  return (
    <div className="App">
     <button onClick={()=>{
       moviesNames.forEach((ele,i)=>{
              return console.log(`${i}==>${ele}`)
       })
       

     }}>ForEach</button>
     <button onClick={()=>{
      let array=[56,78,90,98,78,89,87,67,90];
      let result=array.every((ele,i)=>{
              return ele>35
          
      })
      if(result==true){
        console.log("student passed in tehnth");
       }
       else{
        console.log("student failed in tenth");
       }
     }}>Every</button>
     <button onClick={()=>{
        let array=[56,7,90,98,78,89,87,67,90];
        let result=array.some((ele,i)=>{
             return ele<35
        })
        if(result==true){
          console.log("student Failed in tenth");
        }
        else{
          console.log("student passed in tenth");
        }
     }}>Some</button>
     <button onClick={()=>{
        let array=[56,78,90,98,78,89,87,67,90];
        let result=array.find((ele,i)=>{
               return ele>90
        })
        console.log(result)
     }}>Find</button>
     <button onClick={()=>{
        let array=[56,78,90,98,78,89,87,67,90];
        let result=array.findIndex((ele,i)=>{
          return ele>90
        })
        console.log(result)
     }}>FindIndex</button>
     <button onClick={()=>{
       let array=[56,78,90,98,78,89,87,67,90];
       let result=array.findLast((ele,i)=>{
        return ele>90
       })
       console.log(result)
     }}>FindLast</button>
     <button onClick={()=>{
       let array=[56,78,90,98,78,89,87,67,90];
       let result=array.findLastIndex((ele,i)=>{
           return ele>90
       })
       console.log(result)
     }}>FindLastIndex</button>
     <button onClick={()=>{
       let array=[56,78,90,98,78,89,87,67,90];
       let result=array.filter((ele,i)=>{
                return ele>80
       })
       console.log(result)
     }}>Filter</button>
     <button onClick={()=>{
        console.log(moviesNames);
        moviesNames.sort();
        console.log(moviesNames)
        let array=[56,78,90,98,78,89,87,67,90];
        let result=array.sort((a,b)=>{
          return a-b
        })
        console.log(result)
     }}>Sort</button>
     <button onClick={()=>{
       let result = Array.isArray(moviesNames)
       console.log(result)
     }}>IS Array</button>
     <button onClick={()=>{
      let numbers=[56,78,90,98,78,89,87,67,90];
      let result=numbers.reduce((sum=0,ele,i)=>{
        return sum+=ele
      })
      console.log(result)
     }}>Reduce</button>
     <button onClick={()=>{
       let numbers=[56,78,90,98,78,89,87,67,90];
       let result=numbers.reduceRight((sum=0,ele,i)=>{
         return sum+=ele
       })
       console.log(result)
     }}>ReduceRight</button>
     <button onClick={()=>{
        moviesNames.map((ele,i )=>{
        return console.log(`Shri ${ele}cd`)

      })
     }}>Map</button>
     <button onClick={()=>{
         let ipl =["Kavitha","anitha","amrutha"];
         let ipl1=["srujana","Shaakshi","Sneha"];
         let ipl2 =[["Kohli","Anuska"],"Bumraah","Siraj"];
         let team=[ipl,ipl1,ipl2]
         console.log(team);
         console.log(team.flat(2))
         console.log([team[2][2]])
     }}>Flat</button>
     <button onClick={()=>{
          console.log(moviesNames)
          console.log(moviesNames.fill("Kavitha",6,8));
     }}>Fill</button>
     <button onClick={()=>{
          console.log(moviesNames)
          delete moviesNames[6];
          console.log(moviesNames)
     }}>Delete</button>
     <button onClick={()=>{
     let array=["Hardhi","Aakash"];
     console.log(moviesNames.concat(array))
     console.log(moviesNames)
     }}>Concat</button>
     <button onClick={()=>{
     console.log(moviesNames)
     console.log(moviesNames.reverse());
     console.log(moviesNames)
     }}>reverse</button>
     <button onClick={()=>{
       console.log(moviesNames)
       console.log(moviesNames.slice(8,11));
     }}>Slice</button>
     <button onClick={()=>{ 
     console.log(moviesNames)
     console.log(moviesNames.splice(3,0,"Kavitha"));
     console.log(moviesNames)
     }}>Splice Adding</button>
     <button onClick={()=>{
     console.log(moviesNames)
     console.log(moviesNames.splice(3,7,"Anitha","KAvitha","Akhila"))
     console.log(moviesNames)
     }}>Splice Removing</button>
     <button onClick={()=>{
        let array="KAVITHA";
        let result =Array.from(array);
        console.log(result)
     }}>From</button>
     <button onClick={()=>{
       console.log(moviesNames);
        console.log(moviesNames.includes("Ala Vaikunthapurramuloo"));
     }}>Includes</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.indexOf("Ala Vaikunthapurramuloo"))
     }}>IndexOf</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.lastIndexOf("Arjun Reddy"));
     }}>LastIndexOf</button>
     <button onClick={()=>{
        console.log(moviesNames)
        console.log(moviesNames.push("Kavita"))
        console.log(moviesNames)
     }}>Push</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.pop());
      console.log(moviesNames)
     }}>Pop</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.shift())
      console.log(moviesNames)
     }}>Shift</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.unshift("Kavi"))
      console.log(moviesNames)
     }}>UnShift</button>
     <button onClick={()=>{
      console.log(moviesNames);
      console.log(moviesNames.at(8));
     }}>At</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.length);

     }}>Length</button>
     <button onClick={()=>{
       for(let i=0;i<=moviesNames.length;i++){
        console.log(moviesNames[i])
       }
     }}>For</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames[9])
     }}>Select</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.toString())
     }}>ToString</button>
     <button onClick={()=>{
      console.log(moviesNames)
      console.log(moviesNames.join("<--->"))
     }}>Join</button>
    
    
  
    </div>

  );
}

export default App;
