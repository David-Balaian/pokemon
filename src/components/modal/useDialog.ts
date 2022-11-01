import { SyntheticEvent, useState } from "react"

 const useDialog = () => {

    const [tabValue, setTabValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return {
        tabValue,
        handleChange,
    }
}

export default useDialog