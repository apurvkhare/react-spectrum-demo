'use client'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Button'

export const Dialog = props => {
    let { title, children, confirmLabel, onClose } = props

    return (
        <div className='fixed inset-0 flex items-center justify-center z-100'>
            <div className='absolute inset-0 bg-gray-700 opacity-75 z-0' />
            <div className='bg-white rounded-lg p-8 z-1 relative focus:outline-none'>
                <h3 className='text-lg font-medium pb-2'>{title}</h3>
                <div className='text-sm text-gray-600'>{children}</div>
                <div className='pt-8 flex space-x-3 justify-end'>
                    <Button onPress={onClose}>Cancel</Button>
                    <Button onPress={onClose}>{confirmLabel}</Button>
                </div>
            </div>
        </div>
    )
}

export function DialogTrigger({ label, children, ...otherProps }) {
    let [isOpen, setOpen] = useState(false)

    return (
        <>
            <Button {...otherProps} onPress={() => setOpen(true)}>
                {label}
            </Button>
            {isOpen && (
                <Portal>
                    {React.cloneElement(children, {
                        isOpen,
                        onClose: () => setOpen(false),
                    })}
                </Portal>
            )}
        </>
    )
}

const Portal = ({ children }) => ReactDOM.createPortal(children, document.body)
