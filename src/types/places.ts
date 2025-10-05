export interface Place {
  id: number;
  title: string;
  preview_description: string;
  preview_image: string;
  main_description?: string;
  main_images?: string[];
  STATUSES: {
    has_beach: boolean;
    has_bike: boolean;
    has_eat: boolean;
    has_camp: boolean;
    has_nature: boolean;
    has_mountain: boolean;
  }; 
  coords?: number[];
  type: string;
}


export type PlaceList = Place[];