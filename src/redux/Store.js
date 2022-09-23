import {configureStore} from '@reduxjs/toolkit'
import admindata from './admin-data';
import vastInfocards from './vast-infoCards';


export const Store = configureStore({
    reducer:{
        admindata: admindata,
        vastInfocards:vastInfocards
        // activecards:activecards,
        
    },
})