
(function() {
    'use strict';

    let date = Date.now();

    let Popup   = httpVueLoader('./js/components/Popup.vue?_='+date)
    let Menyoo  = httpVueLoader('./js/components/Menu.vue?_='+date)
    let PageBar = httpVueLoader('./js/components/PageBar.vue?_='+date)

    let Notf      = httpVueLoader('./js/views/404.vue?_='+date)
    let Game      = httpVueLoader('./js/views/Game.vue?_='+date)
    let Auth      = httpVueLoader('./js/views/Auth.vue?_='+date)
    let Costumize = httpVueLoader('./js/views/Costumize.vue?_='+date)
    let Invent    = httpVueLoader('./js/views/Invent.vue?_='+date)
    let Item      = httpVueLoader('./js/views/Item.vue?_='+date)
    let Craft     = httpVueLoader('./js/views/Craft.vue?_='+date)
    let Refuge    = httpVueLoader('./js/views/Refuge.vue?_='+date)

    const routes = [
        {
            path: '/',
            name: 'Game',
            component: Game
        }, {
            path: '/404',
            name: '404', 
            component: Notf,
        }, {
            path: '*',
            redirect: '/404' 
        }, {
            path: '/auth',
            name: 'Auth',
            component: Auth
        }, {
            path: '/costumize',
            name: 'Costumize',
            component: Costumize
        }, {
            path: '/invent',
            name: 'Invent',
            component: Invent
        }, {
            path: '/item',
            name: 'Item',
            component: Item
        }, {
            path: '/craft',
            name: 'Craft',
            component: Craft
        },
        {
            path: '/refuge',
            name: 'Refuge',
            component: Refuge
        }
    ];

    const router = new VueRouter({
        mode: 'history',
        routes
    });

    new Vue({
        router,
        components: {
            Popup, Menyoo, PageBar
        },
        data: () => ({
            popup: {
                text: 'Ошибка',
                active: false
            },
            pageBar: {
                width: 20
            },
            invent: {
                from: 0,
                sortType: 0
            },
            craft: {
                id: 0,
                item: 0,
                type: 0,
                selected: false,
                sortType: 2
            }
        })
    }).$mount('#app')

})();