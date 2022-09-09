// implement the promise.all with limited concurrent number 
// group the function by class, exercise the use of class
class Schedule {
    
    promises = [];

    completed = 0;

    constructor(maxCount) {
        this.maxCount = maxCount;
    }

    // emit multiple request at the same time
    start() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }    
    }

    // simulate add multiple promise
    add(time, value) {
        this.promises.push(() => new Promise((resolve) => {
            setTimeout(() => {
                console.log('value', value);
                resolve(value);
            }, time);
        }));
    }

    /*
    * key point: 
    * 1) at the same time, keep the maxCount request execute, when one promise execute end, the another promise enter the execute sequence
    * 2) promise execute according to first in first execute
    * 3) when the number of request greater than the maxCount, exit the whole application
    */
    request() {
        if (this.promises.length === 0) {
            return;
        }
        this.promises.shift()().then(() => {
            this.request();
        });
    }
}

const ss = new Schedule(3); 
ss.add(1000, 1);
ss.add(1000, 2);
ss.add(1000, 3);
ss.add(1000, 4);
ss.start();
