export {};




// merge: type❌ interface✅ 


type _User = { name: string };
type _User = {id: string};

// vs

interface User { name: string; }
interface User { id: string; }

declare const user: User; 
user.name; user.id;





// koniec
