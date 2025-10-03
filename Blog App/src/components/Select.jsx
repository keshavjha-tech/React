import { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ref,
    ...props
}) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1' htmlFor={id}></label>}
                <select 
                {...props} 
                ref={ref} 
                id={id}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                    {options?.map((option) => (
                        <Option key={option} value={option}>
                            {option} ref={ref}
                        </Option>
                    ))}
                </select>

        </div>
    )
}

export default Select