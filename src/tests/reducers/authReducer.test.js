import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";



describe('Test on authReducer', () => {
    const initState = {
        uid: '3245',
        name: 'Nes'
    }
    const payload = {
        uid: '123',
        displayName: 'nestor@gamil.com'
    }

    test('should do the login correctly', () => {
        const state = authReducer(initState, { type: types.login, payload});
        expect(state).toEqual({
            uid:  '123',
            name: 'nestor@gamil.com'
        });
    });

    test('should do the logout correctly', () => {
        const state = authReducer(initState, { type: types.logout, payload});
        expect(state).toEqual({});
    });

    test('should do the default case correctly', () => {
        const state = authReducer(initState, { type: 'exit', payload});
        expect(state).toEqual(initState);
    });
});

