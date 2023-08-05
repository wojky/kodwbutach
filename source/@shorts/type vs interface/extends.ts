export {}




// extends: type❌ interface✅
// kompozycja: type✅ interface❌

type WithId = { id: string; };
type WithDate = { date: string; };

type _User = { name: string } 
    & WithId 
    & WithDate;

// vs

interface User  
    extends WithId, WithDate {
  name: string;
}









// koniec


declare const x: _User;
declare const y: User;