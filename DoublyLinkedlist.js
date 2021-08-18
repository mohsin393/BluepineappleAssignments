function doubleLinkedList() {
    let Node = function(element) {
      this.element = element;
      this.next = null;
      this.prev = null;
    }
    
    let length = 0;
    let head = null;
    let tail = null;
    

    this.append = function(element) {
      let node = new Node(element),
            current = head,
            previous;
      
      if(!head){
            head = node;
            tail = node;
       }else{
         node.prev = tail;
         tail.next = node;
         tail = node;
       }
      
      length++;
    }
    
    
    
    this.insert = function(position, element) {
      
    
      if(position >= 0 && position <= length){
        let node = new Node(element),
            current = head,
            previous,
            index = 0;
        
        if(position === 0){
          if(!head){
            head = node;
            tail = node;
          }else{
            node.next = current;
            current.prev = node;
            head = node;
          }
        }else if(position === length){
          current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
        }else{
          while(index++ < position){
            previous = current;
            current = current.next;
          }
          
          node.next = current;
          previous.next = node;
          
          
          current.prev = node;
          node.prev = previous; 
        }
        
        length++;
        return true;
      }else{
        return false;
      }
    }
    
    
    this.removeAt = function(position){
   
      if(position > -1 && position < length){
        let current = head, previous, index = 0;
        
      
        if(position === 0){
          head = current.next;
          
         
          if(length === 1){
            tail = null;
          }else{
            head.prev = null;
          }
        }else if(position === length - 1){
          current = tail;
          tail = current.prev;
          tail.next = null;
        }else{
          while(index++ < position){
            previous = current;
            current = current.next;
          }
          
          
          previous.next = current.next; 
          current.next.prev = previous;
        }
        
        length--;
        return current.element;
      }else{
        return null;
      }
    }
    

    this.indexOf = function(elm){
      let current = head,
      index = -1;
  
     
      while(current){
        if(elm === current.element){
           return ++index;
        }
  
         index++;
         current = current.next;
       }
  
    
      return -1;
    };
    

    this.isPresent = (elm) => {
      return this.indexOf(elm) !== -1;
    };
    
    
    this.delete = (elm) => {
       return this.removeAt(this.indexOf(elm));
    };  
    
 
    this.deleteHead = function(){
      this.removeAt(0);
    }
    
 
    this.deleteTail = function(){
      this.removeAt(length-1);
    }
    

    this.toString = function(){
      let current = head,
      string = '';
  
      while(current){
        string += current.element + (current.next ? '\n' : '');
        current = current.next;
      }
  
      return string;
    };
    

    this.toArray = function(){
      let arr = [],
      current = head;
  
      while(current){
        arr.push(current.element);
        current = current.next;
      }
  
      return arr;
    };
    

    this.isEmpty = function(){
      return length === 0;
    };
    
  
    this.size = function(){
      return length;
    }

    this.getHead = function() {
      return head;
    }

    this.getTail = function() {
      return tail;
    }
}

let dll = new doubleLinkedList();
dll.append('apple');
dll.append('strawberry');
dll.append('mashroom');
console.log(dll.toArray());

dll.insert(1, 'grape');
console.log(dll.toArray());

dll.deleteHead();
console.log(dll.toArray());
dll.deleteTail();
console.log(dll.toArray());
dll.deleteHead();
console.log(dll.toArray())