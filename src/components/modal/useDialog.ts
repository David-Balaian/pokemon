import { SyntheticEvent, useState } from "react"

export default () => {

    const [tabValue, setTabValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    return {
        tabValue,
        handleChange,
    }
}