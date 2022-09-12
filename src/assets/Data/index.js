// import React from 'react';
import users from '../Data/profile-2user.png'
import wallet from '../Data/wallet.png'
import money from '../Data/moneys.png'
import document from '../Data/document.png'
import startups from '../Data/status-up.png'
import ornament1 from '../Data/Ornament.png'
import ornament2 from '../Data/Ornament2.png'
import ornament3 from '../Data/Ornament3.png'

export const dashCardData=[
    {
        icon: users,
        title:"Total Users",
        value:"260",
        text:"4% (30 days)",
        bg:'#C8563C'
    },
    {
        icon:wallet,
        title:"Mono Wallet Balance",
        value:"₦60,540,926.00",
        text:"",
        bg:'#292D9D'
    },
    {
        icon:money,
        title:"Transaction Value",
        value:"₦60,540,926.00",
        text:"4% (30 days)",
        bg:'#299D3B'
    },
    {
        icon:document,
        title:"Transaction Volume",
        value:"260",
        text:"4% (30 days)",
        bg:'#050505'
    },
    {
        icon:startups,
        title:"Revenue",
        value:"₦540,926.00",
        text:"4% (30 days)",
        bg:'#CBA00A'
    },
    
]


export const currentrateData =[
    {
        bgColor:'#292D9D',
        title:'Central Bank of Nigeria Rate',
        rate:'₦540.98/$1',
        pattern:ornament1
    },
    {
        bgColor:'#299D3B',
        title:'Black Market Rate',
        rate:'₦740.98/$1',
        pattern:ornament2
    },
    {
        bgColor:'#050505',
        title:'Mono Rate',
        rate:'₦702.98/$1',
        pattern:ornament3
    }
]