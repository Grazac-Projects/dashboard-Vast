import {configureStore} from '@reduxjs/toolkit'
import admindata from './admin-data';
import vastInfocards from './vast-infoCards';
import customeruser from './customeruser'

export const Store = configureStore({
    reducer:{
        admindata: admindata,
        vastInfocards:vastInfocards,
        customeruser:customeruser
        // activecards:activecards,
        
    },
})