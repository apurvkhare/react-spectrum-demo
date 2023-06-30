'use client'

import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Button'
import { FocusScope, OverlayContainer, useDialog, useModal, useOverlay } from 'react-aria'

export const Dialog = props => {
    let { title, children, confirmLabel, onClose } = props

    const dialogRef = useRef(null)
    const { overlayProps } = useOverlay(props, dialogRef)
    const { dialogProps, titleProps } = useDialog(props, dialogRef)
    const { modalProps } = useModal()

    return (
        <div className='fixed inset-0 flex items-center justify-center z-100'>
            <div className='absolute inset-0 bg-gray-700 opacity-75 z-0' />
            <FocusScope contain autoFocus restoreFocus>
                <div
                    ref={dialogRef}
                    {...overlayProps}
                    {...dialogProps}
                    {...modalProps}
                    className='bg-white rounded-lg p-8 z-1 relative focus:outline-none'
                >
                    <h3 {...titleProps} className='text-lg font-medium pb-2'>{title}</h3>
                    <div className='text-sm text-gray-600'>{children}</div>
                    <div className='pt-8 flex space-x-3 justify-end'>
                        <Button onPress={onClose}>Cancel</Button>
                        <Button onPress={onClose}>{confirmLabel}</Button>
                    </div>
                </div>
            </FocusScope>
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
                <OverlayContainer>
                    {React.cloneElement(children, {
                        isOpen,
                        onClose: () => setOpen(false),
                    })}
                </OverlayContainer>
            )}
        </>
    )
}

const Portal = ({ children }) => ReactDOM.createPortal(children, document.body)
