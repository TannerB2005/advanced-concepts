console.groupCollapsed("Exercise 1")

class Subject {
    constructor() {
        this.observers = [];
    }
    // Add methods here
    // this method adds observer
    addObserver(observer) {
        this.observers.push(observer);
    }
    //this method removes a observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    //this method will notify all observer
    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer {
    update() {
        console.log('Observer updated!');
    }
}

// instantiate the subject class
const subject = new Subject();

//add multiple observers
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

//call notfiyObservers to update the observers
subject.notifyObservers();
console.groupEnd();


console.groupCollapsed("Exercise 2");

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

let { name, age } = person;
let [, second, , fourth] = fruits;
let { address: { city, country } } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(second); // Output: 'banana'
console.log(fourth); // Output: 'date'
console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'

console.groupEnd();



console.groupCollapsed("Exercise 3 & 4");

async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred while fetching posts:', error.message);
    }
}

// Call the function to fetch posts
fetchPosts();

console.groupEnd();

