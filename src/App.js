import React, { useState, useEffect, Suspense } from 'react';
import { IntlProvider } from 'react-intl'
import { Tabs, WhiteSpace } from 'antd-mobile'
// import FinancialIndicators from './components/FinancialIndicators'
// import Profit from './components/Profit'
// import Revenue from './components/Revenue'
// import CapitalDividend from './components/CapitalDividend'
import en from './locale/en.json'
import vi from './locale/vi.json'
import './App.css'

import { TAB_CONFIG } from './config/constants'



const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fakeAPI = async () => {
  await sleep(1000)
}

const App = () => {
  const [currentTab, setCurrentTab] = useState(TAB_CONFIG[0])
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    let currentLocale = new URL(window.location.href).searchParams.get('locale')
    if (currentLocale) setLocale(currentLocale)
  }, [])

  const onChangeTab = async data => {
    setCurrentTab(data)
  }

  return (
    <IntlProvider locale={locale} messages={locale === 'en' ? en : vi}>
      <div>
        <Tabs tabs={TAB_CONFIG} onChange={onChangeTab} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          <Suspense fallback={<div>Loading...</div>}>
            {currentTab.component}
          </Suspense>
        </Tabs>
        <WhiteSpace />
      </div>
    </IntlProvider>
  )
}

export default App;
