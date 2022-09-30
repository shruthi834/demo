"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("../src/service/product.service");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/api/app"));
// import { Product } from '../src/models';
// import {expect} from 'chai';
// import { Product } from '../src/models';
const promisedData = require('../src/service/productPromiseObject.json');
const productObject = require('../src/service/productObject.json');
describe(" Product service tests", () => {
    let productService;
    beforeEach(() => {
        productService = new product_service_1.ProductService();
    });
    it("should be defined", () => {
        expect(productService.getProducts()).toBeDefined();
    });
    // it("GET product endpoint success return response",() =>{
    //     return supertest(app)
    //     .get('/products')
    //     .then(response =>{
    //         expect(response.statusCode).to.be.equal(200);
    //         expect(response.body)
    //         .to.be.an.instanceof(Array)
    //         .and.to.has.length.greaterThan(1)
    //         let products=response.body;
    //         expect(products[0]).that.includes.all.keys(['id','name','price'])
    //     })
    // })
    // it("get /product/id: endpoint" ,()=>{
    //     return supertest(app)
    //     .get('/products/6')
    //     .then(response =>{
    //         expect(response.statusCode).toEqual(200);
    //         expect(response.body).toContain(['id','name','price'])
    //     })
    // })
    it('Test PUT method for /update-products/:id', function (done) {
        let data = {
            "name": "BPL",
            "price": 85000,
            "category": "TV"
        };
        return (0, supertest_1.default)(app_1.default)
            .put('/update-product/17')
            .send(data)
            .expect(200)
            .end((err) => {
            if (err)
                return done.fail(err);
            done();
        });
    });
    // xit('test DELETE method for /deleteProduct/:id', function(done){
    //     return supertest(app)
    //         .delete('/deleteProduct/28')
    //         .then((res) => {
    //             expect(res.body.data).to.be.equal(null);
    //         });
    // })
    //     it('Product created and respond with 201 created', function(done)
    //     {
    //         let data={ 
    //             "name": "dummy",
    //             "price": 10000,
    //             "category":"dummy"
    //         }
    //         return supertest(app)
    //             .post('/products')
    //             .send(data)
    //             .set('Accept','application/json')
    //             .expect('Content-Type', /json/)
    //             .expect(201)
    //             .end((err) => 
    //             {
    //                 if (err) return done.fail(err);
    //                 done();
    //             });
    //     });
    it('should call getProducts from productService', function (done) {
        spyOn(productService, 'getProducts').and.returnValue(Promise.resolve(promisedData));
        productService.getProducts().then((result) => {
            expect(productService.getProducts);
            expect(result).toEqual(promisedData);
            done();
        });
    });
    it('should call GetItemsByOrderId from orderService', function (done) {
        spyOn(productService, 'getProductById').and.returnValue(Promise.resolve(productObject));
        const productid = 34;
        productService.getProductById(productid)
            .then((result) => {
            expect(productService.getProductById).toHaveBeenCalledWith(productid);
            expect(result).toEqual(productObject);
            done();
        });
    });
});
