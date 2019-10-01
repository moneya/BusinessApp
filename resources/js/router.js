import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import UsersIndex from "./components/views/UsersIndex";
import UsersEdit from "./components/views/UsersEdit";

Vue.use(VueRouter);


export default new VueRouter({

    routes: [
      {
        path:'/',
        component: App
      },
      {
        path:'/home',
        component: Home
      },
      {
        path:'/about',
        component: About
      },
      {
        path:'/signin',
        component: Signin
      },
      {
        path:'/signup',
        component: Signup
      },
      {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UsersEdit,
        },
        {
            path: '/users/:id',
            name: 'users.edit',
            component: UsersEdit,
        },
       // { path: '/404', name: '404', component: NotFound },
       // { path: '*', redirect: '/404' },
   ],
    mode: 'history'

});
