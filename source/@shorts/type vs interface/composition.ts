export {};




// type - mój wybór 😍🔥💪


const state = {id: 123, name: 'joe'};

type State = typeof state;
type StateProps = keyof State;
type ButtonState = 'on' | 'off';

type Record<K extends keyof any, T> = {
    [P in K]: T;
};
type Extract<T, U> = T extends U 
    ? T 
    : never;














// koniec

type xD = State & StateProps & ButtonState & Record<any, any> & Extract<any, any>;