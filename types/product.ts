export type ProductType = {
    id: number;
    nombre: string;
    imagen_producto:{
        url: string;
        id: number;
    }[]; 
    // Assuming you'll store the image URL here
    descripcion: string;
    precio: number;
    slug: string;
    category: {
        slug: string; 
        nombreCategoria: string;
    };
    vendedor: {
        slug: number; // Assuming a relation with Vendor has an ID
        nombreVendedor: string; 
    };
sizes: {
    talla: string;
}[];

dia: {
    dia: string;
}[];
    destacado: boolean;
};