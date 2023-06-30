'use client'

import React from 'react'
import { DialogTrigger, Dialog } from './Dialog'
import { TextField } from './TextField'
import { Checkbox } from './Checkbox'
import { OverlayProvider } from 'react-aria'

const ReactAriaDemo = () => {
    return (
        <OverlayProvider>
            <div className='p-5 h-screen flex flex-col gap-48 items-center'>
                <DialogTrigger label='Sign up'>
                    <Dialog
                        title='Sign up'
                        confirmLabel='Sign up'
                        isDismissable
                    >
                        <TextField
                            label='First Name'
                            placeholder='test@example.com'
                        />
                        <TextField
                            label='Last Name'
                            placeholder='test@example.com'
                        />
                        <TextField
                            label='Email'
                            placeholder='test@example.com'
                        />
                        <Checkbox>I accept the terms and conditions</Checkbox>
                    </Dialog>
                </DialogTrigger>
            </div>
        </OverlayProvider>
    )
}

export default ReactAriaDemo
