import React, { Component } from 'react'
import { Routes, Route} from "react-router-dom";

import Add_Customer from './components/Customer_Profile/AddCustomer';
import AllCustomers from './components/Customer_Profile/AllCustomers';
import Home from './components/Home';
import Add_Item from './components/Item/addItem';
import AllItem from './components/Item/viewInventery';
import Add_promotion from './components/Promotions/Add_promotions';
import All_Promotions from './components/Promotions/All_promotions';
import Add_Trader from './components/Trader_profile/AddTrader';
import AllTraders from './components/Trader_profile/AllTraders';
import EditItems from './components/Item/editItems';
import View_Item from './components/Item/viewItemCustomer';
import Navbar from './components/Navbar';
import TraderPage from './components/Traderpage';
import Add_toCart from './components/Cart/Add_toCart';
import All_CartItem from './components/Cart/AllCart_Items';
import All_WishItem from './components/Wish_list/All_wishItem';
import Add_WishList from './components/Wish_list/Add_wishlist';
import WishList_toCart from './components/Wish_list/wishlist_to_cart';



function App() {
    return (
        <div> 
            <Navbar/>
            <Routes> 
               
                <Route path = "/" element={<View_Item/>} />
                <Route path = "/reg_customers" element={<Add_Customer/>} />
                <Route path = "/All_customers" element={<AllCustomers/>} />
                <Route path = "/All_promotions" element={<All_Promotions/>} />
                <Route path = "/Add_promotions" element={<Add_promotion/>} />
                <Route path = "/All_items/:id" element={<EditItems/>} />
                <Route path = "/reg_traders" element={<Add_Trader/>} />
                <Route path = "/All_traders" element={<AllTraders/>} />
                <Route path = "/All_items" element={<AllItem/>} />
                <Route path = "/Add_items" element={<Add_Item/>} />
                <Route path = "/TraderPage" element={<TraderPage/>} />
                <Route path = "/cart/:id" element={<Add_toCart/>} />
                <Route path = "/cartitems" element={<All_CartItem/>} />
                <Route path = "/wishlist/:id" element={<Add_WishList/>} />
                <Route path = "/All_wishitems" element={<All_WishItem/>} />
                <Route path = "/wish-cart/:id" element={<WishList_toCart/>} />
               
            </Routes>
        </div>
    );
}

export default App;
