import { v4 as uuidv4 } from 'uuid';

interface Observer {
    update(subject: Subject): void;
}

interface IdentifiableObserver extends Observer {
    id: string;
}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(id: string): void;
    notifyObservers(): void;
}

class NewsletterSubscriber implements IdentifiableObserver {
    private _id: String = uuidv4();

    constructor(private name: string) {
    }

    get id(): string {
        return this._id;
    }

    update(subject: Subject): void {
        console.log(`${this.name}, hope you are doing well! This week...`);
    }
}

class NewsletterPublisher implements Subject {
    private observers: IdentifiableObserver[] = [];

    addObserver(observer: IdentifiableObserver): void {
        this.observers.push(observer);
    }

    removeObserver(id: string): void {
        this.observers = this.observers.filter(observer => observer.id !== id);
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    sendNewsLetter(): void {
        this.notifyObservers();
    }
}

const a_subscriber = new NewsletterSubscriber("Paz");
const b_subscriber = new NewsletterSubscriber("Max");

const publisher = new NewsletterPublisher();
publisher.addObserver(a_subscriber);
publisher.addObserver(b_subscriber);

publisher.sendNewsLetter();

// reference
// https://medium.com/@alessandro.traversi/understanding-the-observer-design-pattern-through-typescript-examples-4afe5e4661d
