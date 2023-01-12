import React, { useState } from 'react';
import Select from 'react-select';


const Test = () => {
    const [agree, setAgree] = useState(false)

    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    const options = [
        {
            label: 'Manufacturing',
            options: [
                { label: 'Construction materials', value: 'Construction materials' },
                { label: ' Electronics and Optics', value: ' Electronics and Optics' }
            ]
        },
        {
            label: 'Food and Beverage',
            options: [
                { label: 'Bakery & confectionery products', value: 'Bakery & confectionery products' },
                { label: 'Beverages', value: 'Beverages' },
                { label: 'Fish & fish products', value: 'Fish & fish products' },
                { label: 'Meat & meat products', value: 'Meat & meat products' },
                { label: 'Milk & dairy products', value: 'Milk & dairy products' },
                { label: 'Sweets & snack food', value: 'Sweets & snack food' },
                { label: 'Other', value: 'Other' }
            ]
        },
        {
            label: 'Furniture',
            options: [
                { label: 'Bathroom/sauna', value: 'Bathroom/sauna' },
                { label: 'Bedroom', value: 'Bedroom' },
                { label: 'Childrenâ€™s room', value: 'Childrenâ€™s room' },
                { label: 'Kitchen', value: 'Kitchen' },
                { label: 'Living room', value: 'Living room' },
                { label: 'Office', value: 'Office' },
                { label: 'Other (Furniture)', value: 'Other (Furniture)' },
                { label: 'Outdoor', value: 'Outdoor' },
                { label: 'Project furniture', value: 'Project furniture' },
            ]
        },
        {
            label: 'Machinery',
            options: [
                { label: 'Machinery components', value: 'Machinery components' },
                { label: 'Machinery equipment/tools', value: 'Machinery equipment/tools' },
                { label: 'Manufacture of machinery', value: 'Manufacture of machinery' },
                { label: 'Repair and maintenance service', value: 'Repair and maintenance service' },
                { label: 'Other', value: 'Other' },
                { label: 'Repair and maintenance service', value: 'Repair and maintenance service' },
            ]
        },
        {
            label: 'Maritime',
            options: [
                { label: ' Aluminum and steel workboat', value: ' Aluminum and steel workboat' },
                { label: 'Boat/Yacht building', value: 'Boat/Yacht building' },
                { label: 'Ship repair and conversion', value: 'Ship repair and conversion' },
            ]
        },
        {
            label: 'Metalworking',
            options: [
                { label: 'Construction of metal structures', value: 'Construction of metal structures' },
                { label: 'Houses and buildings', value: 'Houses and buildings' },
                { label: 'Metal products', value: 'Metal products' },
            ]
        },
        {
            label: 'Metal works',
            options: [
                { label: 'Construction of metal structures', value: 'Construction of metal structures' },
                { label: 'Houses and buildings', value: 'Houses and buildings' },
                { label: 'Metal products', value: 'Metal products' },
            ]
        },
        {
            label: 'Metal works',
            options: [
                { label: 'CNC-machining', value: 'CNC-machining' },
                { label: 'Forgings, Fasteners', value: 'Forgings, Fasteners' },
                { label: 'Gas, Plasma, Laser cutting', value: 'Gas, Plasma, Laser cutting' },
                { label: 'MIG, TIG, Aluminum welding', value: 'MIG, TIG, Aluminum welding' },
            ]
        },
        {
            label: 'Plastic and Rubber',
            options: [
                { label: 'Packaging', value: 'Packaging' },
                { label: 'Plastic goods', value: 'Plastic goods' },
                { label: 'Plastic profiles', value: 'Plastic profiles' },
            ]
        },
        {
            label: 'Plastic processing technology',
            options: [
                { label: 'Blowing', value: 'Blowing' },
                { label: 'Moulding', value: 'Moulding' },
                { label: 'Plastics welding and processing', value: 'Plastics welding and processing' },
            ]
        },
        {
            label: 'Printing',
            options: [
                { label: 'Advertising', value: 'Advertising' },
                { label: 'Book/Periodicals printing', value: 'Book/Periodicals printing' },
                { label: 'Labelling and packaging printing', value: 'Labelling and packaging printing' },
            ]
        },
        {
            label: 'Textile and Clothing',
            options: [
                { label: 'Clothing', value: 'Clothing' },
                { label: 'Textile', value: 'Textile' },
                { label: 'Labelling and packaging printing', value: 'Labelling and packaging printing' },
            ]
        },
        {
            label: 'Wood',
            options: [
                { label: 'Other (Wood)', value: 'Other (Wood)' },
                { label: 'Wooden building materials', value: 'Wooden building materials' },
                { label: 'Wooden houses', value: 'Wooden houses' },
            ]
        },
        {
            label: 'Other',
            options: [
                { label: 'Environment', value: 'Environment' },
                { label: ' Energy technology', value: ' Energy technology' },
                { label: 'Environment', value: 'Environment' },
            ]
        },
        {
            label: 'Service',
            options: [
                { label: 'Business services', value: 'Business services' },
                { label: 'Engineering', value: 'Engineering' },
                { label: 'Tourism', value: 'Tourism' },
                { label: 'Translation services', value: 'Translation services' },
            ]
        },
        {
            label: 'Information Technology and Telecommunications',
            options: [
                { label: 'Data processing, Web portals, E-marketing', value: 'Data processing, Web portals, E-marketing' },
                { label: 'Programming, Consultancy', value: 'Programming, Consultancy' },
                { label: 'Software, Hardware', value: ' Software, Hardware' },
                { label: 'Telecommunications', value: 'Telecommunications' },
            ]
        },
        {
            label: 'Transport and Logistics',
            options: [
                { label: 'Air', value: 'Air' },
                { label: 'Rail', value: 'Rail' },
                { label: 'Road', value: 'Road' },
                { label: 'Water', value: 'Water' }
            ]
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            Name: e.target.name.value,
            option: selectedOption.value
        }
        console.log('Form submitted', user);
    };

    return (
        <div className='flex justify-center '>
            <div className="card w-[60%] shadow-xl">
                <div className="card-body bg-slate-100 border rounded-xl">
                    <h2 className="card-title">Please enter your name and pick the Sectors you are currently involved in.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='my-5'>
                            <label className='font-bold mr-5'>Name:</label>
                            <input className='border border-slate-300 rounded px-2 py-1 w-[300px]' type="text" name='name' required />
                        </div>
                        <div>
                            <div className='flex'>
                                <label className='font-bold mr-4 pt-1'>Sector:</label>
                                <Select options={options} onChange={handleChange} value={selectedOption} className="w-[300px]" />
                            </div>
                            <div className='flex py-5 ml-14'>
                                <input type="checkbox" name="agree" id="" onClick={() => setAgree(!agree)} />
                                <label htmlFor="agree" className='font-semibold pl-5'>Agree to terms</label>
                            </div>
                            <div>
                                <input type="submit" value="Save" className='btn btn-primary px-5' disabled={!agree} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Test;