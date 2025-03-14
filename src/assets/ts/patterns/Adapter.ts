/* target - the interface the client expects to work with */
interface Payment {
    pay(amount: number): void;
}

/* adaptee - the class with incompatible interface */
class CreditCardPayment {
    constructor(private cardNumber: string) {
    }

    processPayment(amount: number): void {
        console.log(`Processing credit card payment of amount ${amount} using card ${this.cardNumber}`);
    }
}

/* adaptee */  
class PayPalPayment {
    constructor(private email: string) {
    }

    executePayment(amount: number): void {
        console.log(`Processing PayPal payment of ${amount} for ${this.email}`);
    }
}

/* we want creditcard payment and paypal payment to share an interface */
class CreditCardAdapter implements Payment {
    constructor(private creditCardPayment: CreditCardPayment) {
    }

    pay(amount: number): void {
        this.creditCardPayment.processPayment(amount);
    }
}

class PayPalAdapter implements Payment {
    constructor(private payPalPayment: PayPalPayment) {
    }

    pay(amount: number): void {
        this.payPalPayment.executePayment(amount);
    }
}

/* Client - to wrap it all together */
class PaymentProcessor {
    constructor(private paymentMethods: Payment[]) {
    }

    processPayment(amount: number): void {
        for (const paymentMethod of this.paymentMethods) {
            paymentMethod.pay(amount);
        }
    }
}

const creditCard = new CreditCardPayment('1234-5678-9876-5432');
const paypal = new PayPalPayment('test@email.com');

const creditCardAdapter = new CreditCardAdapter(creditCard);
const payPalAdapter = new PayPalAdapter(paypal);

const paymentProcessor = new PaymentProcessor([creditCardAdapter, payPalAdapter]);
paymentProcessor.processPayment(100);
paymentProcessor.processPayment(50);
