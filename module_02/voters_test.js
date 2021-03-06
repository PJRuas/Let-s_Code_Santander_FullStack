voters = [ {name:'Bob' , age: 30, voted: true}, {name:'Jake' , age: 32, voted: true}, {name:'Kate' , age: 25, voted: false}, {name:'Sam' , age: 20, voted: false}, {name:'Phil' , age: 21, voted: true}, {name:'Ed' , age:55, voted:true}, {name:'Tami' , age: 54, voted:true}, {name: 'Mary', age: 31, voted: false}, {name: 'Becky', age: 43, voted: false}, {name: 'Joey', age: 41, voted: true}, {name: 'Jeff', age: 30, voted: true}, {name: 'Zack', age: 19, voted: false} ]

voters.reduce(
    (acc, current) => {
         if (current.age >= 18 && current.age <= 25) {
             acc.youngPeople += 1;
             current.voted ? acc.youngVotes += 1 : acc.youngVotes += 0 
         } else if (current.age > 25 && current.age <= 35) {
             acc.midPeople +=1;
             current.voted ? acc.midVotes += 1 : acc.midVotes += 0
         } else if (current.age > 35) {
             acc.oldPeople += 1;
             current.voted ? acc.oldVotes += 1 : acc.oldVotes += 0
         };
         return {youngPeople: acc.youngPeople,
                 youngVotes: acc.youngVotes,
                 midPeople: acc.midPeople,
                 midVotes: acc.midVotes,
                 oldPeople: acc.oldPeople,
                 oldVotes: acc.oldVotes
                }},
             {youngPeople: 0,
              youngVotes: 0,
              midPeople: 0,
              midVotes: 0,
              oldPeople: 0,
              oldVotes: 0
             }
)