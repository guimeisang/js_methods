var assert = require('assert');
var limit = require('../lib/limit.js');

// BDD
// describe('module', function(){
//     beforeEach(function(){
//         console.log('pre something')
//     })
//     describe('limit()', function(){
//         it('limit should success', function(){
//             limit(10);
//         })
//     })
//     afterEach(function(){
//         console.log('post something')
//     })
// })


// TDD
suite('module', function(){
    suite('limit', function(){
        test('limit test success', function(){
            limit(10);
        })
    })
})



