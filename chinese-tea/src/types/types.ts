export type HeaderProps = {
  title: string;
  subtitle: string;
}

export type TeaProps = {
  id:number;
  name: string;
  region: string;
  flavor: string;
  benefit: string;
  price: number;
  image: string;
  selectedId: number[], 
  updateFunction: (increment: number,  id: number) => void; 
};

export type TabsProps = {
  count:number;
  page: "video" | "teas" | "favorite";  
  updateFunction: (page: "video" | "teas" | "favorite") => void;
}

export type TeaContainerProps = {
  selectedId: number[];
  updateFunction: (increment: number, id: number) => void; 
}
