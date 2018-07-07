import {login, startLogin, logout, startLogout } from '../../actions/auth';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = configureMockStore([thunk]);


test('should generate login action object', () => {
    const action = login('1234');
    expect(action).toEqual({
        type:'LOGIN',
        uid: '1234'
    })
})

// test('should set userid in store', (done) => {
//    const store = createMockStore({});
//    store.dispatch(startLogin('1234')).then(()=>{
//        const action = store.getActions();
//        expect(action[0]).toEqual({
//            type:'LOGIN',
//            uid: '1234'
//        })

//        done();
//    });
// }); 

test('should generete logout action object ', () => {
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT',
    })
})