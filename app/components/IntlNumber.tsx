'use client'

import React from 'react'
import { NumberField, Text, Flex } from '@adobe/react-spectrum'
import { useLocale } from 'react-aria'
import { NumberFormatter } from '@internationalized/number'

const IntlNumber = () => {
    let [value, setValue] = React.useState(15126312312)
    let { locale } = useLocale()

    let formatter = new NumberFormatter(locale, {
        style: 'currency',
        currency: 'USD',
    })

    return (
        <Flex direction='column' gap='size-100'>
            <NumberField
                label='Amount'
                value={value}
                onChange={setValue}
                minValue={0}
            />
            <Text>Formatted: {formatter.format(value)}</Text>
        </Flex>
    )
}

export default IntlNumber
