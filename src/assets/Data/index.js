// import React from 'react';
import users from '../Data/profile-2user.png'
import wallet from '../Data/wallet.png'
import money from '../Data/moneys.png'
import document from '../Data/document.png'
import startups from '../Data/status-up.png'
import ornament1 from '../Data/Ornament.png'
import ornament2 from '../Data/Ornament2.png'
import ornament3 from '../Data/Ornament3.png'
import picture from "../../assets/picture.png";
import icon1 from "../../assets/moneys.png";
import icon2 from "../../assets/status-up.png";
import icon3 from "../../assets/card1.png";
import icon4 from "../../assets/Vector1.png";

export const dashCardData=[
    {
        icon: users,
        title:"Total Users",
        value:"260",
        text:"4% (30 days)",
        bg:'#3484ED'
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
<<<<<<< HEAD
=======


export const CustomerListTable= [
    {
      serialNo:'1',
      cardid:'ID1fc189b0',
      cardnumber:'**** **** **** 3465',
      user:'Adeola Brown',
      phonenumber:'08131977989',
      balance:'$1,500',
      status:"status",
      datecreated:'10-11-2019'

        

    },
    {
        serialNo:'2',
        cardid:'ID1fc189b0',
        cardnumber:'**** **** **** 3465',
        user:'Adeola Brown',
        phonenumber:'08131977989',
        balance:'$1,500',
        status:"status",
        datecreated:'10-11-2019'
  
          
  
      },
      {
        serialNo:'3',
        cardid:'ID1fc189b0',
        cardnumber:'**** **** **** 3465',
        user:'Adeola Brown',
        phonenumber:'08131977989',
        balance:'$1,500',
        status:"status",
        datecreated:'10-11-2019'
  
          
  
      },
      {
        serialNo:'3',
        cardid:'ID1fc189b0',
        cardnumber:'**** **** **** 3465',
        user:'Adeola Brown',
        phonenumber:'08131977989',
        balance:'$1,500',
        status:"status",
        datecreated:'10-11-2019'
  
          
  
      },
      {
        serialNo:'3',
        cardid:'ID1fc189b0',
        cardnumber:'**** **** **** 3465',
        user:'Adeola Brown',
        phonenumber:'08131977989',
        balance:'$1,500',
        status:"status",
        datecreated:'10-11-2019'
  
          
  
      },

      
    
]
>>>>>>> 89567cccdf93eaf5d0522c07dcf40f73a4556408
export const details = [
    {
      id: 1,
      bgColor:'#292D9D',
      h4: "Customer Information",
      p: "Account Balance",
      total: "$540.98",
      profile_image: picture,
      firstname: "Deborah",
      pattern: ornament1,
      lastname: "Dada",
      phonenumber: "+234 807 3345 847",
      email: "shalomayokunnu@gmail.com",
      dob: "22-08-2000",
      gender: "Female",
      bvn: 12278403477,
      nin: 88843934945,
    },
  ];

  export  const figures = [
    {
      id: 1,
      icon: icon1,
      number: "Total Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#29439D",
    },
    {
      id: 2,
      icon: icon1,
      number: "Successful Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#299D3B",
    },
    {
      id: 3,
      icon: icon1,
      number: "Pending Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#9D9129",
    },
    {
      id: 4,
      icon: icon1,
      number: "Failed Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#9D2929",
    },
    {
      id: 5,
      icon: icon2,
      number: "Revenue",
      num1: "₦540,926.0",
      num2: "4% (30 days)",
      bg: "#B00ACB",
    },
  ];

  export const figurescard = [
    {
      id: 1,
      icon: icon3,
      number: "Total Cards",
      num6: 926,
      num2: "4% (30 days)",
      bg: "#4E75D9",
    },
    {
      id: 2,
      icon: icon3,
      number: "Active Cards",
      num6: 920,
      num2: "4% (30 days))",
      bg: "#0ACB35",
    },
    {
      id: 3,
      icon: icon3,
      number: "Inactive Cards",
      num6: 6,
      num2: "4% (30 days)",
      bg: "#CB0A0A",
    },
  ];

  export const figurescard1 = [
    {
      id: 1,
      icon: icon3,
      number: "Total Cards",
      num6: 3,
      bg: "#4E75D9",
    },
    {
      id: 2,
      icon: icon3,
      number: "Active Cards",
      num6: 2,
      bg: "#0ACB35",
    },
    {
      id: 3,
      icon: icon3,
      number: "Inactive Cards",
      num6: 1,
      bg: "#CB0A0A",
    },
  ];

  export const figurescard2 = [
    {
      id: 1,
      icon: icon4,
      number: "Transactions Processaed",
      num6: "$392",
      bg: "#4E75D9",
    },
    {
      id: 2,
      icon: icon4,
      number: "Money In",
      num6: "$348",
      bg: "#0ACB35",
    },
    {
      id: 3,
      icon: icon4,
      number: "Money Out",
      num6: "$48",
      bg: "#CB0A0A",
    },
<<<<<<< HEAD
  ];
=======
  ];
>>>>>>> 89567cccdf93eaf5d0522c07dcf40f73a4556408
