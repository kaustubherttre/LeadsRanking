import React from 'react';
import PropTypes from 'prop-types';

const ViewAttributes = ({items}) => {
    
    return (Object.keys(items).map(key => 
            (<div key={key} className="view-attribute">
                <div>
                    {key}
                </div>
                <div>
                    {items[key]}
                </div>
            </div>))
    );
};

ViewAttributes.defaultProps = {
    items: {},
};

ViewAttributes.propTypes = {
    items: PropTypes.object,
};



export const ViewOutcomes = ({items}) => {
    
    return (
        <>
            <div className="view-attribute">
                    <div>
                        Type
                    </div>
                
                    <div>
                        Expression
                    </div>
            </div>
            {items.map((item, ind) => 
                (<div key={ind} className="view-attribute">
                    <div>
                        {item.type}
                    </div>
                    <div>
                        {item.params.EXPRESSION}
                    </div>
                </div>))}
        </>
    );
};

ViewOutcomes.defautProps = {
    items: [],
};

ViewOutcomes.propTypes = {
    items: PropTypes.array,
};

export default ViewAttributes;



