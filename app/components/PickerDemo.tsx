'use client'

import { Picker, Item, Section } from '@adobe/react-spectrum'

const PickerDemo = () => {
    return (
        <Picker label='Pick your Superhero'>
            <Section title='Marvel'>
                <Item key='ironman'>Iron Man</Item>
                <Item key='captain'>Captain America</Item>
                <Item key='strange'>Doctor Strange</Item>
                <Item key='panther'>Black Panther</Item>
                <Item key='spiderman'>Spiderman</Item>
                <Item key='hulk'>Hulk</Item>
            </Section>
            <Section title='DC'>
                <Item key='batman'>Batman</Item>
                <Item key='superman'>Superman</Item>
                <Item key='diana'>Wonder Woman</Item>
                <Item key='flash'>Flash</Item>
                <Item key='aquaman'>Aquaman</Item>
                <Item key='cyborg'>Cyborg</Item>
            </Section>
        </Picker>
    )
}

export default PickerDemo
