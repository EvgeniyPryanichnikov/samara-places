export interface Place {
  id: number;
  title: string;
  preview_description: string;
  preview_image: string;
  main_description?: string;
  main_images?: string[];
  STATUSES: PlaceStatuses;
  coords?: number[];
  type: string;
  url_title: string;
  search_tags: string[];
  status_tags: string[];
}

export type PlaceStatuses = {
  has_beach: boolean;
  has_bike: boolean;
  has_eat: boolean;
  has_camp: boolean;
  has_nature: boolean;
  has_mountain: boolean;
}

export type StatusKey = keyof PlaceStatuses;

export interface StatusIcon {
  component: any;
  key: StatusKey;
  name: string;
  tooltip: string;
}

export type PlaceList = Place[];
