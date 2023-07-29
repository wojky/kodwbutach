type ChannelStatus = "UNVERIFIED" | "VERIFIED" | "DISABLED";

type Channel = {
  name: string;
  subs: number;
  alias: string;
  status: ChannelStatus;
};

const channel: Channel = {
  name: "Kod w butach",
  subs: 30,
  alias: "@kodwbutach",
  status: "VERIFIED",
};

// let key: keyof Channel = ''

function removeProp<T extends object, P extends keyof T>(from: T, prop: P) {
  const { [prop]: removed, ...rest } = from;

  return rest;
}

const noSubs = removeProp(channel, "subs");
