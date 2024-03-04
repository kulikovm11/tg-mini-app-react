import {useCallback, useEffect, useState} from "react";

import './Form.css'
import {useTelegram} from "../../hooks";
const Form = () => {
    const [country, setCountry ] = useState()
    const [street, setStreet ] = useState()
    const [subject, setSubject ] = useState()
    const {tg} = useTelegram()

    const onSendData = useCallback(()=>{
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    },[country,street,subject])

    useEffect(()=>{
        tg.WebApp.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.WebApp.offEvent('mainButtonClicked', onSendData)
        }
    },[onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text:'Отправить данные',

        })
    },[])

    useEffect(() => {
        if (!country || !street) {
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
        }
    },[country,street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return (
        <div className="form">
            <h3>Input your data</h3>

            <input
                className="input"
                type="text"
                placeholder="country"
                value={country}
                onChange={onChangeCountry}
            />

            <input
                className="input"
                type="text"
                placeholder="street"
                value={street}
                onChange={onChangeStreet}
            />

            <select className="select" value={subject} onChange={onChangeSubject}>
                <option value="physical">Person</option>
                <option value="legal">Company</option>
            </select>
        </div>
    );
};

export {Form};
