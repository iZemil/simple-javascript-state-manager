# Simple javascript state manager

Just for practice

Syntax demos:


    // Init:
    var initialState = {
        count: 0,
        map: [ 'Ivan', 'Petr', 'Nikolai', 'Alex' ],
        form: {
            name: '',
            surname: '',
            email: '',
        },
    };
    
    var store = new Store(initialState);

    // Actions:
    function incrementCount(s) {
        s.count += 1;
    }
    function decrementCount(state) {
        state.count -= 1;
    }

    function changeName(state) {
        state.form.name += 'a';
    }

    function clearStoreUnit(s) {
        delete s.form;
    }
    
    // Execution:
    store.do(incrementCount).do(decrementCount);
    store.do(changeName).do(clearStoreUnit);

