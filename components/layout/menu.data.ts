export interface IMenuItems {
    name: string,
    icon: string,
    url: string
}

export const MENU_DATA : IMenuItems [] = [
    {
        name: 'Home',
        icon: 'radix-icons:dashboard',
        url: '/'
    },
    {
        name: 'Products',
        icon: 'ep:goods',
        url: '/products'
    },
    {
        name: 'Payments',
        icon: 'ph:contactless-payment',
        url: '/payments'
    },
    {
        name: 'Orders',
        icon: 'fluent:receipt-24-regular',
        url: '/orders'
    },
    {
        name: 'Customers',
        icon: 'mingcute:group-line',
        url: '/customers'
    },
    {
        name: 'Feedback',
        icon: 'fluent:person-feedback-48-regular',
        url: '/feedback'
    },
    {
        name: 'Setting',
        icon: 'radix-icons:gear',
        url: '/setting'
    }, 
    {
        name: 'Help center',
        icon: 'radix-icons:question-mark',
        url: '/help'
    }, 
]