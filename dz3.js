///* Stacks */
//
//function Stack () {
//    let count = 0;
//    const storage = {};
//
//    // Returns the value at the end of the stack
//    this.peek = function () {
//        if ( count > 0 ) {
//            return storage[ count - 1 ];
//        } else {
//            throw 'Error count out of range';
//        }
//    };
//    
//    this.push = function ( value ) {
//        storage[ count++ ] = value;
//        return this;
//    };
//
//    // Removes and returns the value at the end of the stack
//    this.pop = function () {
//        const value = this.peek();
//        delete storage[ --count ];
//        return value;
//    };
//
//    this.size = function () {
//        return count;
//    };
//}
//
//const myStack = new Stack();
//
//myStack.push(1);
//myStack.push(2);
//
//console.log(myStack.peek()); // 2
//console.log(myStack.pop()); // 2
//console.log(myStack.peek()); // 1
//
//myStack.push("node.js");
//
//console.log(myStack.size()); // 2
//console.log(myStack.peek()); // node.js
//console.log(myStack.pop()); // node.js
//console.log(myStack.peek()); // 1



/* Sets */
//
//function MySet () {
//  // collection will hold the set
//  const collection = [];
//
//  // this method will check for the presence of an element and return true or false
//  this.has = function ( element ) {
//      return collection.some( ( item ) => Object.is( item, element ) );
//  };
//
//  // this method will return all the values in the set
//  this.values = function () {
//      return collection.slice();
//  };
//
//  // this method will add an element to the set
//  this.add = function ( element ) {
//      if ( !this.has( element) ) {
//          collection.push( element );
//      }
//      return this;
//  };
//
//  // this method will remove an element from a set
//  this.remove = function ( element ) {
//      const index = collection.findIndex( ( item ) => Object.is( item, element ) );
//      if ( index >= 0 ) {
//          collection.splice( index, 1 );
//      }
//      return this;
//  };
//
//  // this method will return the size of the collection
//  this.size = function () {
//      return collection.length;
//  };
//
//  // this method will return the union of two sets
//  this.union = function( otherSet ) {
//      collection.push( ...otherSet.values().filter( ( item ) => !this.has( item ) ) );
//      return this;
//  };
//
//  // this method will return the intersection of two sets as a new set
//  this.intersection = function( otherSet ) {
//      return collection.filter( ( item ) => otherSet.has( item ) ).reduce( ( _, item ) => _.add( item ), new MySet() );
//  };
//
//  // this method will return the difference of two sets as a new set
//  this.difference = function( otherSet ) {
//      const intersection = this.intersection( otherSet );
//      return collection.concat( otherSet.values() ).filter( ( item ) => !intersection.has( item ) ).reduce( ( _, item ) => _.add( item ), new MySet() );
//  };
//
//    // this method will test if the set is a subset of a different set
//    this.subset = function( otherSet ) {
//        return !collection.some( ( item ) => !otherSet.has( item ) );
//    };
//}
//
//const setA = new MySet();
//const setB = new MySet();
//setA.add("a");
//setB.add("b");
//setB.add("c");
//setB.add("a");
//setB.add("d");
//console.log(setA.subset(setB)); // true
//console.log(setA.intersection(setB).values()); // [ 'a' ]
//console.log(setB.difference(setA).values()); // [ 'b', 'c', 'd' ]






/* Queues */

//function Queue () {
//  // collection will hold the queue
//  const collection = [];
//
//  // this method prints queue elements
//  this.print = function () {
//    console.log( collection.slice() );
//  };
//
//  // this method will push element to queue
//  this.enqueue = function ( element ) {
//      collection.push( element );
//      return this;
//  };
//
//  // this method will remove element from queue
//  this.dequeue = function () {
//      collection.shift();
//      return this;
//  };
//
//  // this method will return the first element in queue
//  this.front = function () {
//      if ( this.isEmpty() ) {
//          throw 'Error';
//      } else {
//          return collection[0];
//      }
//  };
//
//  // this method will return the size of the queue
//  this.size = function () {
//      return collection.length;
//  };
//
//  // this method will return true value if queue has no elements
//  this.isEmpty = function () {
//      return collection.length === 0;
//  };
//}
//
//const q = new Queue();
//q.enqueue('a');
//q.enqueue('b');
//q.enqueue('c');
//
//q.print(); // [ 'a', 'b', 'c' ]
//q.dequeue();
//
//console.log(q.front()); // b
//
//q.print(); // [ 'b', 'c' ]






//function PriorityQueue () {
//    // collection will hold the queue
//    const collection = [];
//
//    // this method prints queue elements
//    this.print = function() {
//    console.log( collection.slice() );
//    };
//
//    // this method will push element to queue
//    this.enqueue = function (element) {
//        collection.push( element );
//        collection.sort( ( [ a, priorityA ], [ b, priorityB ] ) => priorityB - priorityA );
//        return this;
//    };
//
//    // this method will remove element from queue
//    this.dequeue = function () {
//        collection.shift();
//        return this;
//    };
//
//    // this method will return the first element in queue
//    this.front = function () {
//        if ( this.isEmpty() ) {
//            throw 'Error';
//        } else {
//            return collection[0];
//        }
//    };
//
//    // this method will return the size of the queue
//    this.size = function () {
//        return collection.length;
//    };
//
//    // this method will return true value if queue has no elements
//    this.isEmpty = function () {
//        return collection.length === 0;
//    };
//}
//
//const pq = new PriorityQueue();
//pq.enqueue(['Intern 1', 2]);
//pq.enqueue(['Intern 2', 3]);
//pq.enqueue(['Intern 3', 1]);
//pq.enqueue(['Intern 4', 2]);
//
//pq.print(); // [ [ 'Intern 3', 1 ], [ 'Intern 1', 2 ], [ 'Intern 4', 2 ], [ 'Intern 2', 3 ] ]
//
//pq.dequeue();
//
//console.log(pq.front()); // [ 'Intern 1', 2 ]
//pq.print(); // [ [ 'Intern 1', 2 ], [ 'Intern 4', 2 ], [ 'Intern 2', 3 ] ]
//
//// priorities: 3 - highest, 1 - lowest






// create a function which returns all possible combinations from the phone digits

const letterCombinations = ( digits ) => {
    const D = '_,!,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'
        .split(',')
        .map( ( _, index ) => ( { [ index ]: _.split( '' ) } ) )
        .reduce( ( _, item ) => Object.assign( _, item ), {} );
    return `${ digits }`
        .split( '' )
        .map( ( _ ) => D[ _ ] || [] )
        .reduce( ( A, item ) => {
            if ( item.length*A.length>0 ) {
//                const result = [];
//                for ( let a of A ) {
//                    for ( let i of item ) {
//                        result.push( `${ a }${ i }` );
//                    }
//                }
//                return result;
                return [ ...Array( A.length*item.length ) ].map( ( _, index ) => `${ A[ Math.floor(index/A.length) ] }${ item[ index%item.length ] }` );
            } else if ( item.length>0 ) {
                return item;
            } else if ( A.length>0 ) {
                return A;
            } else {
                return [];
            }
        }, [] );
};

console.log(letterCombinations('23')); // [ 'ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf' ]