export {};




// deklaracja typu ✅
// generyki ✅

type _User = { name: string };
type _Response<T> = {
    ok: boolean;data: T
}

// vs

interface User {
  name: string;
}

interface Response<T>  {
    ok: boolean; data: T
}







// koniec

declare const x: _User;
declare const y: User;
declare const xz: _Response<any>;
declare const yz: Response<any>;