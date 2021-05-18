import React, { lazy } from 'react'
const FinancialIndicators = lazy(() => import('../components/FinancialIndicators'));
const Profit = lazy(() => import('../components/Profit'));
const Revenue = lazy(() => import('../components/Revenue'));
const CapitalDividend = lazy(() => import('../components/CapitalDividend'));

export const TAB_CONFIG = [
    { title: 'FinancialIndicators', id: 1, component: FinancialIndicators },
    { title: 'Revenue', id: 2, component: Revenue },
    { title: 'Profit', id: 3, component: Profit },
    { title: 'CapitalDividend', id: 4, component: CapitalDividend },
];