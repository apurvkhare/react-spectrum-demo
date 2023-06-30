'use client'

import React from 'react'
import { DatePicker } from '@adobe/react-spectrum'
import { parseAbsoluteToLocal } from '@internationalized/date'

const IntlDate = () => {
    return (
        <DatePicker
            label='Event date'
            defaultValue={parseAbsoluteToLocal('2023-07-01T07:45:00Z')}
        />
    )
}

export default IntlDate
