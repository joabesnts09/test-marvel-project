import iconSun from '../../../../public/icons/icon-sum.svg'
import iconMoon from '../../../../public/icons/icon-moon.svg'
import { DivContainer } from './style'
import { ChangeEventHandler, useContext } from 'react'
import { ThemeContext } from 'styled-components'

interface IProps {
    handleClick: ChangeEventHandler<HTMLInputElement>
}


export const ButtonToggleTheme = ({ handleClick }: IProps) => {
    const { title } = useContext(ThemeContext)
    

    return (
        <>
            <DivContainer >
                <input onChange={handleClick} type='checkbox' id='chk' checked={title === 'dark'}/>
                <label className='label' htmlFor='chk'>
                    <div className='icon'><img src={iconSun} alt='icon sun' /></div>
                    <div className='icon'><img src={iconMoon} alt='icon moon' /></div>
                    <div className='boll'></div>
                </label>
            </DivContainer>

        </>
    )
}