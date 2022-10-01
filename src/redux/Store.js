import {configureStore} from '@reduxjs/toolkit'
import admindata from './admin-data';
// import VastCharges from './Vast-charges';
import vastInfocards from './vast-infoCards';
import customeruser from './customeruser'
import vastchargesdata from './Vast-charges'
import monowalletbalance from './Mono-wallet';
import CustomerDetails from './Customer-details'

export const Store = configureStore({
    reducer:{
        admindata: admindata,
        vastInfocards:vastInfocards,
        customeruser:customeruser,
        vastchargesdata:vastchargesdata,
        monowalletbalance:monowalletbalance,
        CustomerDetails:CustomerDetails
        // activecards:activecards,
        
    },
})