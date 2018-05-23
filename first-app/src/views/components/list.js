import React from 'react';
import { Card } from './card';

export const List = ({ itemSource, children, itemClose }) => (
    <div>
        {itemSource.map(item =>

            <Card key={item.id} item={item} close={itemClose}>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
            </Card>

        )}
    </div>
)

