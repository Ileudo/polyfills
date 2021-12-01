debugger;
STATUS = {
  pending: 'PENDING',
  fulfilled: 'FULFILLED',
  rejected: 'REJECTED',
};

class MyPromise {
  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('not a function');
    }

    this.microtaskQueue = [];
    this.value = null;
    this.status = STATUS.pending;

    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject.call(this, error);
    }
  }

  resolve(data) {
    if (this.status === STATUS.pending) {
      this.status = STATUS.fulfilled;
      this.value = data;
      this.handle();
    }
  }

  reject(err) {
    if (this.status === STATUS.pending) {
      this.status = STATUS.rejected;
      this.value = err;
      this.handle();
    }
  }

  handle() {
    if (this.status === STATUS.rejected && this.microtaskQueue.length === 0) {
      console.log('Unhandled promise rejection');
    }

    this.microtaskQueue.forEach((microtask) => {
      setTimeout(() => {
        const callback = this.status === STATUS.fulfilled ? microtask.onResolved : microtask.onRejected;
        if (callback == null) {
          if (this.status === STATUS.fulfilled) {
            this.resolve.call(microtask.promise, this.value);
          } else {
            this.reject.call(microtask.promise, this.value);
          }
        }

        let result;
        try {
          result = callback(this.value);
        } catch (e) {
          this.reject.call(microtask.promise, e);
        }
        this.resolve.call(microtask.promise, result);
      }, 0);
    });
  }

  then(onResolved, onRejected) {
    const promise = new MyPromise(() => {});
    this.microtaskQueue.push({
      onResolved: typeof onResolved === 'function' ? onResolved : null,
      onRejected: typeof onRejected === 'function' ? onRejected : null,
      promise,
    });
    return promise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Time is over');
  });
});

promise
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log('step 2');
    throw new Error('Error');
  })
  .catch((err) => {
    console.log(err.message ? err.message : err);
  });
