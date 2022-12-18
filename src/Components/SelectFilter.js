import React from 'react';
import '../Styles/Components/SelectFilter.scss';

const SelectFilter = ({
    options = [
        'Microsoft',
        'Autodesk',
        'VMWARE',
        'IBM',
    ],
    setProducerSelected,
}) => {
    return (
        <div className="select-filter-container">
            <label className="select-filter-label">Filtrar por:</label>
            <select onChange={(e) => setProducerSelected(e.target.value)} className='filter-select'>
                <option 
                    className='default-option' 
                    defaultChecked 
                    value={'all producers'}
                >
                    Todos los fabricantes
                </option>
                {
                    options &&
                    options.map( option =>
                        <option value={option}>{option}</option>
                    )
                }
            </select>
        </div>
    );
}

export default SelectFilter;
