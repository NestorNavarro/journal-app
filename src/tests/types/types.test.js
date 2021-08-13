import { types } from "../../types/types";

describe('Test on types', () => {
    test('should be equal', () => {
        const typesTest = {
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load note',
            notesUpdate: '[Notes] Upadated note',
            notesFileUrl: '[Notes] Upadated image url',
            notesDelete: '[Notes] Delete note',
            noteLogoutCleaning: '[Notes] Logout Cleaning',
            
        };
        expect(types).toEqual(typesTest);
    });
    
});
