import { configureStore } from '@reduxjs/toolkit'
import blogreducer from './blogslice'

export const store =
    configureStore({
        reducer: {
            blog: blogreducer,
        },
    })