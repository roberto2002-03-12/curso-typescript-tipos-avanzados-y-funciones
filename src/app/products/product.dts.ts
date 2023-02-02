import { Product } from './product.model';

/*
¿Por qué utilizar el DTO OMIT?
En TS a diferencia de JS te pide que definas el tipo de valor que tendrá un parametro de una función
por lo que si quieres omitir parametros sin afectar el modelo se utiliza DTO Omit, para que luego antes
de enviar la petición a la bd lo definas los valores en el código.
*/

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
    //solicitas un nuevo campo
    categoryId: string;
}

//la idea contraria del omit es Pick
/* 
en este seleccionas solo los campos que vas a necesitar lo demás lo omites
*/
type example = Pick<Product, 'color' | 'price' | 'stock'>;

//opcion 1
//export interface UpdateProductDto extends Partial<Product> {}

//opcion 2 y la más segura
export interface UpdateProductDto extends Partial<CreateProductDto> {}
/*si lo colocas como la opcion 1 entonces vas a permitir que pueda editar el id o createdAt
por lo que la manera correcta es utilizar el interface CreateProductDto que permite crear
dichos objetos excepto unas partes, en este caso todo los objetos que permite crear se vuelven opcionales
y los que han sido omitidos no te van a permitir ingresar valores, de esta manera no se van a poder
actualizar*/

//hace lo contrario a partial, obliga que los campos sean obligatorios
type example2 = Required<Product>;

/*
Readonly su mismo nombre lo dice
En este caso se le agrega el "Partial" con producto ¿Por qué?
Lo que sucede es que en este caso una persona va poder buscar por cualquier campo establecido, por eso el partial
en este caso el Readonly estará habilitado para el lado de servidor, es decir el usuario podrá escribir su query
y justo antes de enviar la petición a la bd o realizar alguna función el readonly no permitirá que se cambie de valor,
se podría decir que es por seguridad.

En mi caso debes buscar por titulo por lo que no funciona este método.
*/

//export interface FindProductDto extends Readonly<Partial<Product>> {  }

//este debería ser el caso, sin embargo no uso objeto sino un simple string
//pero interface no permite que sea solo string, sino tiene que ser si o si un objeto
export interface FindProductByTitleDto extends Readonly<Pick<Product, 'title'>> {}

type example3 = Readonly<Product>;