'use client'

import { defaultTheme, Flex, Provider } from '@adobe/react-spectrum'
import { I18nProvider, useLocale } from 'react-aria'
import ComboBoxDemo from './components/ComboBoxDemo'
import PickerDemo from './components/PickerDemo'
import IntlNumber from './components/IntlNumber'
import IntlDate from './components/IntlDate'
import ReactAriaDemo from './components/reactariademo/ReactAiraDemo'

export default function Home() {
    let { locale, direction } = useLocale()
    return (
        <Provider theme={defaultTheme}>
            {/* List of locales https://help.sap.com/docs/SAP_BUSINESSOBJECTS_BUSINESS_INTELLIGENCE_PLATFORM/09382741061c40a989fae01e61d54202/46758c5e6e041014910aba7db0e91070.html */}
            <I18nProvider locale='en-US'>
                <div lang={locale} dir={direction}>
                    <Flex
                        direction='column'
                        alignItems='center'
                        height='100vmax'
                        gap='size-1200'
                    >
                        <h1>React spectrum demo</h1>
                        {/* <PickerDemo /> */}
                        {/* <IntlNumber /> */}
                        {/* <IntlDate /> */}
                        <ReactAriaDemo />
                    </Flex>
                </div>
            </I18nProvider>
        </Provider>
    )
}
