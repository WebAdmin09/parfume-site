export interface NewsType {
    id: string;
    name: string;
    image: string;
  }
  
  export interface NewsResponseType extends NewsType {
    createdAt: string;
  }
  