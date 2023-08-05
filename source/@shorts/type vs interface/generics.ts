export {};




// deklaracja typu

type _User<T> = { 
    name: string;
    access: T
};

// vs

interface User<T> {
  name: string;
  access: T
}









// koniec

declare const x: _User<''>;
declare const y: User<''>;