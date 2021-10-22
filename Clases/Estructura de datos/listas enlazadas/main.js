//* Crear nuestra clase llamada nodo
//* El nodo es la informacion del elemento
//* tiene un apuntador o enlace al siguiente nodo

class Nodo{
    constructor(data){
        this.data=data; // en data guardamos cualquier objeto que queramos.
        this.next=null; // por defecto este es null.
                        // es quien indica si hay un nodo siguiente o no.

    }
}

//? Vamos a crear nuestra clase lista enlazada
//? Una lista enlazada debe tener una cabecera (head)
//? Tiene un tamaño de lista(length)

//? Las operaciones que se pueden hacer con una lista son:
//? 1- Agregar un elemento (add) al pricipio o al final.
//? 2- Borrar un elemento (delete)
//? 3- Buscar un elemento (indice) => get


//*Vamos a crear nuestra lista enlazada

class linkedList{
    // estas son las propiedades de mi lista
    constructor(){
        this.head=null;//esto significa que no hat nada en la lista
        this.length=0;// no hay cierta cantidad de elmentos en la lista

    }

    //Metodo Auxiliar

    isEmpty(){
        return this.head === null;
    }

    //Metodos de nuestra lista

    addStart(data){
        const node = new Nodo (data)//creamos nuestro nodo con su data
        if(!this.head){//Verdadero, tu lista esta vacia
            this.head=node;
        } else {
            node.next=this.head;
            this.head=node
        }
        //para saber cuantos elementos tengo en mi lista
        //aumento en uno 
        this.length++;

    }

    print(){
        // nada actual
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
    }
}

const listaNumeros = new linkedList();
console.log(listaNumeros.isEmpty())// True

listaNumeros.addStart(100);
listaNumeros.addStart(200);
listaNumeros.addStart(300);
listaNumeros.addStart(400);
console.log("NODO: ", listaNumeros);
listaNumeros.print();