import {configureStore} from '@reduxjs/toolkit'
import admindata from './admin-data';
// import VastCharges from './Vast-charges';
import vastInfocards from './vast-infoCards';
import vastchargesdata from './Vast-charges'
import monowalletbalance from './Mono-wallet';
import CustomerDetails from './Customer-details';
import TansactionTableDetailsdata from './Transactiontable-details'

export const Store = configureStore({
    reducer:{
        admindata: admindata,
        vastInfocards:vastInfocards,
        vastchargesdata:vastchargesdata,
        monowalletbalance:monowalletbalance,
        CustomerDetails:CustomerDetails,
        TansactionTableDetailsdata:TansactionTableDetailsdata
        // activecards:activecards,
        
    },
})