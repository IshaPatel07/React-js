import { configureStore } from '@reduxjs/toolkit'
import note_reducer from '../features/notes_slice.js'

const store = configureStore({
    reducer: {
        notes: note_reducer,
    },
});

export default store;