class SmartCounter {

        constructor(counter){ 
            this.counter = counter
        }
    increment() { 
        this.counter++
    }

    decrement() { 
        this.counter--
    }

    getValue() { 
        return this.counter
    }

    reset() { 
        this.counter = 0
    }

    setValue(val) { 
       this.counter = val 
    }

    
}



class TodoList {

    constructor(id){
        this.todo = [];
        this.id = id;
    }

    addTask(text){
        let id = this.id;
        this.id++
        this.todo.push({id: id, text: text, completed: false })
        return id
    }

    deleteTask(id){
        this.todo = this.todo.filter(el => el.id !== id)
    }
    
    toggleTask(id){
        for (let el of this.todo) {
            if(el.id === id) {
                el.completed = !el.completed
            }
            
        }
    }

    getTasks() {
        return this.todo
    }

    getCompletedTasks() {
        return this.todo.filter(el => el.completed === true);
    }

    clearCompleted() {
        this.todo = this.todo.filter(el => el.completed !== true);
    }

}


class List {

    constructor(getKey){
        this.items = [];
        this.getKey = getKey;
    }
   
    addItem(item){
        let key = this.getKey(item);
        this.items.push({key: key, ...item});
    }

    removeItem(item){
        this.items = this.items.filter(el => el.key !== this.getKey(item))
    }

    getItems(){
        console.log(this.items)
    }

}

function myPromiseAny(promises) {
  return new Promise(function(resolve, reject) {
    let rejects = 0;
    for (let prom of promises) {
      prom.then(resolve).catch(() => {
        rejects++;
        if (rejects === promises.length) {
          reject('Error')
        }
      });
    }
  });
}



