export {};




// definicja typu funkcji ✅


type _Bool<T> = (any: T) => boolean;

// vs

interface Bool<T> {
  (any: T): boolean;
}









// koniec

declare const x: _Bool<''>;
declare const y: Bool<''>;