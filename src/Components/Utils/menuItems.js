import { displauMainCourse, displayBilling, displayCheckout, displayCustomer, displayDesserts, displayDrinks, displayStarters } from "../FoodMenu/FoodMenu";
import { bill, burger, cart, dashboard, desserts, drinks, expenses, plate, starters, transactions, trend, user } from "./Icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transactions,
        link: '/transactions'
    },
    {
        id: 3,
        title: 'Add Food Products',
        icon: trend,
        link: '/incomes'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        link: '/expenses'
    },
]

export const foodNav = [
    {
        id: 1,
        title: 'Customer Details',
        icon: user,
        link: displayCustomer
    },
    {
        id: 2,
        title: 'Starters',
        icon: starters,
        link: displayStarters
    },
    {
        id: 3,
        title: 'Burgers',
        icon: burger,
        link: displauMainCourse
    },
    {
        id: 4,
        title: 'Drinks',
        icon: drinks,
        link: displayDrinks
    },
    {
        id: 5,
        title: 'Desserts',
        icon: desserts,
        link: displayDesserts
    },
    {
        id: 6,
        title: 'Checkout',
        icon: cart,
        link: displayCheckout
    }, 
    {
        id: 7,
        title: 'Billing',
        icon: bill,
        link: displayBilling
    }
]