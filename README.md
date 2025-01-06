# Hotel Data Merge Service

## Sumary
- How to run & test
- Solution & Detail
- Integrate CICD (Test Pipeline & Deployment on Free Host NodeJs Server)
- Write some Unit test to cover the solution & detect changes from solution
- Design a good boilerplate nodejs project
### How to run & test
Require: Node > 22
To start run in local
runing `yarn` to install packages
using `yarn dev`
To build
using `yarn && yarn build`
To test:
using `yarn test`
To check prettier code
using `yarn prettier-check`
How to test quickly:
On Local: 
```
- yarn dev
- curl http://localhost:3000/ascenda/v1/hotels/search
- curl http://localhost:3000/ascenda/v1/hotels/search?hotels=iJhz,f8c9&destination_id=5432
```
`
On production:
```
curl https://hotel-data-merge-i17g.onrender.com/ascenda/v1/hotels/search
curl https://hotel-data-merge-i17g.onrender.com/ascenda/v1/hotels/search?hotels=iJhz,f8c9&destination_id=5432
But because i'm using free hosting nodejs so the server will be broken sometime
```


### Solution & Detail
Using Adaptor Design Pattern to adapt suppliers
After adapt suppliers's data to same format called ObjectAdapter (it is a organised format in our service)
We put all ObjectAdapter to class HotelDataMerge to merge hotel data
The solution for merging is base on the field we set up
- address, description can pick a longest string in suppliers data
- amenities can be merge fields of objects & add more item in the array as merging array


### Write some Unit test to cover the solution & detect changes from solution
 - Write some unit test to cover what we change in the solution, the CICD will be failed if we break something wrong.
 
### Design a good boilerplate nodejs project
- Manage Routing, and Error Handling
