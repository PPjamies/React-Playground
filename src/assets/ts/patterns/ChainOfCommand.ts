// define the handler
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

// implement handlers
class TechnicalSupportHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler
        return handler;
    }

    handle(request: string): void {
        if (request == 'Technical Issue') {
            console.log('Technical Support: Handling technical issue');
        } else if (this.nextHandler) {
            // not a technical issue and there is another handler in the chain of command
            this.nextHandler.handle(request);
        }
    }
}

class BillingSupportHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request == 'Billing Issue') {
            console.log('Billing Support: Handling billing issue');
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class SupervisorHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (request == 'Escalated Issue') {
            console.log('Supervisor: Handling escalated issue');
        } else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// client
const technicalSupportHandler = new TechnicalSupportHandler();
const billingSupportHandler = new BillingSupportHandler();
const supervisorHandler = new SupervisorHandler();

// set chain of command
technicalSupportHandler
    .setNext(billingSupportHandler)
    .setNext(supervisorHandler);

// handle issues
const issues: string[] = ['Technical Issue', 'Billing Issue', 'Escalated Issue'];
issues.forEach(issue => {
    technicalSupportHandler.handle(issue);
});

