import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Test on ui actions', () => {  
    test('should thorugh well all actions ', () => {
        const error = 'Test error 1';
        const action = setError(error);
        expect(action).toEqual({
            type: types.uiSetError,
            payload: error,
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError,
        });
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading,
            payload: true,
        });
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading,
            payload: false,
        });
    });
    
});
