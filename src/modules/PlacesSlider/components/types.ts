export type Statuses = {
  has_beach: boolean;
  has_bike: boolean;
  has_eat: boolean;
  has_camp: boolean;
  has_nature: boolean;
  has_mountain: boolean;
}

export type StatusKey = keyof Statuses;

export interface StatusIcon {
  component: any;
  key: StatusKey;
  name: string;
  tooltip: string;
}