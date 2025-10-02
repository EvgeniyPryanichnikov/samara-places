export interface Place {
  id: number;
  title: string;
  preview_description: string;
  preview_image: string;
  main_description?: string;
  main_images?: string[];
  coords?: number[];
  type: string;
}

export type PlaceList = Place[];