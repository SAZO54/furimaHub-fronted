import { createRouter, createWebHistory } from 'vue-router'
import TOP from '@/components/TOP.vue'
import TransactionHistory from '@/components/TransactionHistory.vue'
import HubSetting from '@/components/HubSetting.vue'
import TransactionMessage from '@/components/TransactionMessage.vue'
import MoneyManage from '@/components/MoneyManage.vue'
import ExhibitDetail from '@/components/ExhibitDetail.vue'
import ShipStatus from '@/components/ShipStatus.vue'
import TransactionAnalysis from '@/components/TransactionAnalysis.vue'

const routes = [
  {
    path: '/',
    name: 'TOP',
    component: TOP
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
    path: '/message',
    name: 'TransactionMessage',
    component: TransactionMessage
  },
  {
    path: '/money',
    name: 'MoneyManage',
    component: MoneyManage
  },
  {
    path: '/exhibit-details',
    name: 'ExhibitDetail',
    component: ExhibitDetail
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router