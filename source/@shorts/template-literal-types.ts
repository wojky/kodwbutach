type Act =
  | "WALK"
  | "RUN"
  | "JUMP"
  | "ATTACK";

type Direction =
  | "LEFT"
  | "RIGHT"
  | "UP"
  | "DOWN";

type Action = `${Act}_${Direction}`;

declare const action: Action;