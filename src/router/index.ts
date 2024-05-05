import { createRouter, createWebHistory } from 'vue-router'
import HubDashboard from '@/components/HubDashboard.vue'
import TransactionHistory from '@/components/TransactionHistory.vue'
import HubSetting from '@/components/HubSetting.vue'
import TransactionMessage from '@/components/TransactionMessage.vue'
import MoneyManage from '@/components/MoneyManage.vue'
import ExhibitList from '@/components/ExhibitList.vue'
import ShipStatus from '@/components/ShipStatus.vue'
import TransactionAnalysis from '@/components/TransactionAnalysis.vue'
import HubLogOut from '@/components/HubLogout.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'HubDashboard',
    component: HubDashboard
  },
  {
    path: '/history',
    name: 'TransactionHistory',
    component: TransactionHistory
  },
  {
    path: '/setting',
    name: 'HubSetting',
    component: HubSetting
  },
  {
    path: '/messages',
    name: 'TransactionMessage',
    component: TransactionMessage
  },
  {
    path: '/money',
    name: 'MoneyManage',
    component: MoneyManage
  },
  {
    path: '/exhibit',
    name: 'ExhibitList',
    component: ExhibitList
  },
  {
    path: '/ship-status',
    name: 'ShipStatus',
    component: ShipStatus
  },
  {
    path: '/analysis',
    name: 'TransactionAnalysis',
    component: TransactionAnalysis
  },
  {
    path: '/logout',
    name: 'HubLogOut',
    component: HubLogOut
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router