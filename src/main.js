function Store(initialState) {
    var state = initialState || {};

    return {
        getState: function() {
            return state;
        },

        do: function(actionFn) {
            actionFn(state);

            return this;
        }
    }
}