//Listas encadeada simples
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null //elemento cabeça da lista
        this.size = 0
    }

    add(data) {
        let newNode = new Node(data) //adiconar elemento

        if(this.head === null){
            this.head = newNode
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next
            }

            current.next = newNode
        }
this.size++

    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log("index fora dos limites")
        }

        let newNode = new Node(date);
        let current = this.head;

        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next; 
            }

            newNode.next = current;
            previous.next = newNode;
        }

        this.size++
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log("index fora dos limites")
        }
        let current = this.head;
        let previous

        if(index === 0){
            this.head = current.next
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;

            }
            previous.next = current.next;
        }

        this.size--;
        return current.data;
    }

    indexOf(data){
        let current = this.head;
        let index = 0;

        while(current !== null){
            if(current.data === data){
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    printList() { //Mostrar os elementos da lista
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList();
list.add("Formação +praTi");
list.add(true);
list.add("Elemento 3");
list.add(["Monogatari", "pokemon", "viral hit"]);
list.printList();

console.log(list.indexOf("Elemento 3"));
list.removeFrom(1);
list.printList();
//diferença array lista: array é memoria continua ou seja vai usar mais memoria, ja a lista não em compensação demora mais