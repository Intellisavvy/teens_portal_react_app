import { HomeOutlined, UserOutlined, TagsOutlined, AppstoreOutlined, InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';
export interface AppRoute {
    path: string;
    name:string
    title:string;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
    isLayout?:boolean;
    showInMenu?:boolean
}
export const userRouter : AppRoute[] = [
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: React.lazy(() => import('../../components/Layout/UserLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/user/login',
    name: 'login',
    title: 'LogIn',
    component: React.lazy(() => import('../../scenes/Login')),
    showInMenu: false,
  },
];

export const appRouters: any = [
  {
    path: '/',
    exact: true,
    name: 'home',
    permission: '',
    title: 'Home',
    component: React.lazy(() => import('../../components/Layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/roles',
    permission: 'Pages.Roles',
    title: 'Roles',
    name: 'role',
    icon: TagsOutlined,
    showInMenu: true,
    component: React.lazy(() => import('../../scenes/Roles')),
  },
  
  {
    path: '/exception?:type',
    permission: '',
    title: 'exception',
    name: 'exception',
    showInMenu: false,
    component: React.lazy(() => import('../../scenes/Exception')),
  },
];

export const routers: AppRoute[] = [...userRouter, ...appRouters];