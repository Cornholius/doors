import React, {useState} from 'react';

import Collection from '../collections/Collection'


const Collections = () => {
    const [collections, setCollections] = useState([
        {id:1, text:'Коллекция'},
        {id:2, text:'Коллекция 2'},
        {id:3, text:'Коллекция 3'},
        {id:4, text:'Коллекция 4'},
        {id:5, text:'Коллекция 5'},
        
    ])

    return (
        <section className='collections'>
          {collections.map((collection )=>
            <Collection collection={collection} key={collection.id}/>
            )}
        </section>
    );
};

export default Collections;