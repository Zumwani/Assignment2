import React, { useState } from 'react'
import Toggle from './Toggle';

const TabControl = ({ children }) => {

    const [selectedTab, setSelectedTab] = useState(children[0].props.id);

    const onTabChange = (id) => {
        setSelectedTab(id);
    }

    return (
        <div className='tab-control'>
            <fieldset>
                {
                    children.map(c => {
                        const { id, header } = c.props;
                        return <Toggle name="tab" key={id} id={id} text={header} onChange={() => onTabChange(id)} checked={selectedTab == id}/>
                    })
                }
            </fieldset>
            {
                children.map(c => {
                    const { id } = c.props;
                    return <div key={id} className={ "tab" + (selectedTab == id ? " active" : "") }>{c}</div>;
                })
            }
        </div>
    )

}

export default TabControl