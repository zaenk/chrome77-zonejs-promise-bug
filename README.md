# Chrome77ZonejsPromiseBug

In Chrome 77, some promises related to streams (ReadableStream, WritableStream, TransferStream) are failing with the following error:

```
TypeError: Method Promise.prototype.then called on incompatible receiver [object Object]
    at ZoneAwarePromise.then (<anonymous>)
```

This repository contains a small sample application which reproduces this behavior.

## Prerequisites

* Tested with node 10 and 12
* Needs npm 6.11+, older version of npm did not installed webpack properly into node_modules

## Running the app

To run the application:

* Clone the repository
* `npm install`
* `ng serve` or `npx ng serve`
* Open [localhost:4200](http://localhost:4200)
* Open dev tools (F12) and observe the error

## Notes

This sample application works fine in the following browsers:

* Chrome 76
* Chrome 78 (Beta)
* Chrome 79 (Canary)
* Firefox 68
* Firefox 69
* Edge 18
* Edge 78 (Dev)

The specific version of Chrome which broke this code:  77.0.3865.90. This particular version was installed on 19/9 - 20/9 on our machines.

The app might have worked in Chrome 77.0.3865.75, I can't verify that I was using that version for sure before.
